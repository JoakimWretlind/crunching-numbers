import Crypto from '../../images/crypto.jpg'
import Savings from '../../images/savings.jpg'
import Calcs from '../../images/calc-test.jpg'
import Emis from '../../images/emi.jpg'
import chart from '../../images/linechart.jpg'

export const feedsource = [
    {
        source: Calcs,
        header: 'Custom Calculator',
        text: 'Just a calculator... That you can design after your own wish',
        likes: '29',
        comments: '2',
        isVideo: false,
        id: 2,
    },
    {
        source: Crypto,
        header: 'Crypto Tracker',
        text: 'Overview of the cryptocurrencies and their values today',
        likes: '43',
        comments: '3',
        isVideo: false,
        id: 0,
    },
    {
        source: Savings,
        header: 'Personal Crypto',
        text: 'Search your favourite currencies, save them and watch their history',
        comments: '10',
        isVideo: true,
        id: 1,
    },

    {
        source: Emis,
        header: 'EMI Calculator',
        text: 'Check out the cost of your current or prospect loans',
        comments: '2',
        isVideo: false,
        id: 3,
    },
    {
        source: chart,
        header: 'Savings Calculator',
        text: 'See how your money will grow over time',
        comments: '4',
        isVideo: false,
        id: 4,
    },
];