import React, { useState } from 'react'
import { SubHeader } from '../../components/Header.elements'
import {
    FormSection,
    Container,
    FormGroup,
    Label,
    Input,
    SubmitButton,
    Error,
    EmiCalculations,
    NumbersOutput,
    ChartOutput,

} from './FormContainer.elements'
import { Pie } from 'react-chartjs-2'
import numeral from 'numeral'

const FormContainer = () => {
    const [purchasePrice, setPurchasePrice] = useState("")
    const [downPayment, setDownPayment] = useState("")
    const [loanTerm, setLoanTerm] = useState("")
    const [loanApr, setLoanApr] = useState("")
    const [loanAmount, setLoanAmount] = useState(100)
    const [monthlyPayment, setMonthlyPayment] = useState("")
    const [totalInterest, setTotalInterest] = useState("")
    const [totalCost, setTotalCost] = useState("")

    const submitCalculation = async (e) => {
        e.preventDefault()

        // Valifate fields
        const validatedPrice = await validateField(purchasePrice, setPurchasePrice)
        const validatedPayment = await validateField(downPayment, setDownPayment)
        const validatedLoanTerm = await validateField(loanTerm, setLoanTerm)
        const validatedApr = await validateField(loanApr, setLoanApr)

        // Calculate values
        if (
            validatedPrice &&
            validatedPayment &&
            validatedLoanTerm &&
            validatedApr
        ) {
            console.log("Form fully validated")
            CalculateValues()
        }
    }
    const validateField = (field, setValue) => {
        let int = parseFloat(field)

        if (field === "" || field === 0) {
            setValue({ ...field.values, error: "Please enter a value" })
            return false
        } else if (isNaN(int)) {
            setValue({ ...field.values, error: "Please enter a number" })
            return false
        } else {
            setValue(int)
            return true
        }
    }

    /**
      FORMULAS:
        * TI: Total Interest
        * P: Loan Amount
        * r: interest
        * n: timeperiods        
   
        TI=(P*(1+r)^n)-P
        
        P = principal loan amount (purchasePrice - downPayment)
        i = interest rate
        n = number of periods required to repay the loan

        M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
     */

    const CalculateValues = () => {
        // Monthly Payment
        let principal = purchasePrice - downPayment
        let monthlyInterest = loanApr / 100 / 12
        let numberOfPayments = loanTerm * 12

        let monthlyPrice = (principal *
            [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments]) / [(1 + monthlyInterest) ** numberOfPayments - 1]
        setMonthlyPayment(monthlyPrice)

        // Loan Amount
        let loanAmount = (principal)
        setLoanAmount(loanAmount)

        // Total Interest
        let P = purchasePrice - downPayment
        let r = loanApr / 100
        let n = loanTerm
        let totalInterest = ((P * (1 + r) ** n) - P)
        setTotalInterest(totalInterest)

        // Total Cost
        let totalCost = totalInterest - (-purchasePrice)
        setTotalCost(totalCost)
    }

    return (
        <>
            <FormSection>
                <SubHeader>
                    <h1>EMI <span>Calculator</span></h1>
                </SubHeader>
                <Container>
                    <FormGroup>
                        <Label htmlFor="label">Purchased Prise</Label>
                        <Input onChange={(e) => setPurchasePrice(e.target.value)} type="number" />
                        <Error>{purchasePrice.error}</Error>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="label">Down Payment</Label>
                        <Input onChange={(e) => setDownPayment(e.target.value)} type="number" />
                        <Error>{downPayment.error}</Error>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="label">Loan Term (Years)</Label>
                        <Input onChange={(e) => setLoanTerm(e.target.value)} type="number" />
                        <Error>{loanTerm.error}</Error>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="label">APR (%)</Label>
                        <Input onChange={(e) => setLoanApr(e.target.value)} type="number" />
                        <Error>{loanApr.error}</Error>
                    </FormGroup>
                </Container>
                <SubmitButton onClick={(e) => submitCalculation(e)}>Calculate</SubmitButton>
                <EmiCalculations>
                    <NumbersOutput>
                        <h3>Loan Amount: {numeral(loanAmount).format("$ 0,0.00")}</h3>
                        <h3>Monthly Payments: {numeral(monthlyPayment).format("$ 0,0.00")}</h3>
                        <h3>Total Interest: {numeral(totalInterest).format("$ 0,0.00")}</h3>
                        <h3>Total Cost: {numeral(totalCost).format("$ 0,0.00")}</h3>
                    </NumbersOutput>
                    <ChartOutput>
                        <Pie
                            data={{
                                labels: ['Total Interest', 'Loan'],
                                datasets: [{
                                    data: [totalInterest, loanAmount],
                                    borderColor: ['#f1f1f1'],
                                    backgroundColor: ['#BF0037', '#006377']
                                }]
                            }}
                            height={200}
                            width={200}
                        />
                    </ChartOutput>
                </EmiCalculations>
            </FormSection>

        </>
    )
}

export default FormContainer
