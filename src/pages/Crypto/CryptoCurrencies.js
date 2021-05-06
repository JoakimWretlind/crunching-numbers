import React from 'react'
import { CryptoContainer, CryptoCard } from './CryptoCurrencies.elements'
import CryptoPersonal from './CryptoPersonal/CryptoPersonal'
import CryptoOverview from './CryptoOverview/CryptoOverview'

const CryptoCurrencies = () => {
    return (
        <>
            <CryptoContainer>
                <h1>Crypto<span>Currencies</span></h1>
                <CryptoCard>

                </CryptoCard>
                <CryptoCard>

                </CryptoCard>
            </CryptoContainer>
        </>
    )
}

export default CryptoCurrencies
