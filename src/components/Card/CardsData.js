import Calc from '../../images/calc-test.jpg'
import Crypto from '../../images/crypto.jpg'
import Chart from '../../images/linechart.jpg'
import Emi from '../../images/emi.jpg'
import Savings from '../../images/savings.jpg'


export const feedsource = [
    {
        id: 1,
        path: '/Calculator/Calculator',
        component: 'Calulator',
        source: Calc,
        header: 'Custom Calculator',
        text: 'A Calculator styled your way'
    },
    {
        id: 2,
        path: '/Crypto/CryptoOverview/CryptoOverview',
        source: Crypto,
        header: 'CryptoTracker',
        text: 'Track the cryptocurrencies and the current price'
    },
    {
        id: 3,
        path: '/Crypto/CryptoPersonal/CryptoPersonal',
        source: Chart,
        header: 'Collect Your Own Currencies',
        text: 'Collect and get more information about your favourite cryptocurrencies'
    },
    {
        id: 4,
        path: '/Emi/EmiCalculator',
        source: Emi,
        header: 'EMI Calculator',
        text: 'Calculate the real cost of your current or upcoming loans'
    },
    {
        id: 5,
        path: '/Savings/Savings',
        source: Savings,
        header: 'See the Value of your Savings',
        text: 'See how your savings will rise with time'
    },
]