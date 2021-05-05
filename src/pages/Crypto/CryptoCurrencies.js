import React from 'react'
import { CryptoContainer } from './CryptoCurrencies.elements'
import CryptoPersonal from './CryptoPersonal/CryptoPersonal'
import CryptoOverview from './CryptoOverview/CryptoOverview'

const CryptoCurrencies = () => {
    return (
        <>
            <CryptoContainer>
                <h1>CryptoContainer</h1>
                <CryptoOverview />
                <CryptoPersonal />
            </CryptoContainer>
        </>
    )
}

export default CryptoCurrencies
