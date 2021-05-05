/* eslint no-eval: 0 */
/* Above line to avoid warning-messages */

import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { TiBackspaceOutline } from 'react-icons/ti'
import { Calc, CalcWrapper, CalcSettings, CalcIcon, ButtonGrid, CalcButton, CalcInputs, CalcResult } from './Calculator.elements'

/** I have written multiple functions to avoid if- else statements */
const Calculator = () => {
    const [data, setData] = useState("")
    const [result, setResult] = useState("")
    const [settings, setSettings] = useState("")

    const handleSettingsClick = () => setSettings(!settings)
    const closeSettings = () => setSettings(false)

    /** Numbers and brackets */
    const calcBtn = (e) => {
        setData(data + e.target.value)
    }

    /* Reset button function */
    const resetBtn = () => [
        setData(""),
        setResult("")
    ]

    /* Backspace button function */
    const calcBackspace = () => {
        setData(data.slice(0, -1))
    }

    /* Equal button function. If comma is used, set result to 3 decimals */
    /* If input cannot be handled return "error" in the result-display */
    const equalBtn = () => {
        try {
            setResult(
                String(eval(data)).length > 3 &&
                    String(eval(data)).includes('.') ?
                    (
                        String(eval(data).toFixed(3))) :
                    String(eval(data))
            )
        }
        catch (err) {
            setResult("error")
        }
    }

    /** RETURN **/
    return (
        <ThemeProvider theme={{
            black: "#111111",
            blue: "#103240",
            blueE: "#88888833",
            gray: "#292929",
            pink: "#53414c",
            transparent: "transparent",
            white: "#ffffff",
            letterspacingS: "0.2rem",
            noBorder: "none",
        }}>
            <Calc>
                <CalcWrapper>
                    <CalcSettings>
                        <CalcIcon onClick={handleSettingsClick}>
                            {settings ? <FaTimes /> : <IoMdSettings />}
                        </CalcIcon>
                    </CalcSettings>
                    <CalcInputs>{data}</CalcInputs>
                    <CalcResult>{result}</CalcResult>
                    <ButtonGrid>
                        <CalcButton onClick={resetBtn}>AC</CalcButton>
                        <CalcButton className="bracket" onClick={calcBtn} value="(">(</CalcButton>
                        <CalcButton onClick={calcBtn} value=")">)</CalcButton>
                        <CalcButton onClick={e => setData(data + e.target.value)} value="/" style={{ borderRight: "none" }}>/</CalcButton>

                        <CalcButton onClick={calcBtn} value="9">9</CalcButton>
                        <CalcButton onClick={calcBtn} value="8">8</CalcButton>
                        <CalcButton onClick={calcBtn} value="7">7</CalcButton>
                        <CalcButton onClick={e => setData(data + e.target.value)} value="*" style={{ borderRight: "none" }}>&times;</CalcButton>

                        <CalcButton onClick={calcBtn} value="6">6</CalcButton>
                        <CalcButton onClick={calcBtn} value="5">5</CalcButton>
                        <CalcButton onClick={calcBtn} value="4">4</CalcButton>
                        <CalcButton onClick={e => setData(data + e.target.value)} value="-" style={{ borderRight: "none" }}>-</CalcButton>

                        <CalcButton onClick={calcBtn} value="3">3</CalcButton>
                        <CalcButton onClick={calcBtn} value="2">2</CalcButton>
                        <CalcButton onClick={calcBtn} value="1">1</CalcButton>
                        <CalcButton onClick={e => setData(data + e.target.value)} value="+" style={{ borderRight: "none" }}>+</CalcButton>

                        <CalcButton onClick={calcBtn} value=".">.</CalcButton>
                        <CalcButton onClick={calcBtn} value="0">0</CalcButton>
                        <CalcButton className="backspace" onClick={calcBackspace}><TiBackspaceOutline /></CalcButton>
                        <CalcButton className="equals" onClick={equalBtn} value="=" style={{ borderRight: "none" }}>=</CalcButton>
                    </ButtonGrid>
                </CalcWrapper>
            </Calc>
        </ThemeProvider>
    )
}

export default Calculator