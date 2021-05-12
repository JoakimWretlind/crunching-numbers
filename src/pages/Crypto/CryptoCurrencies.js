import React from 'react'
import { SubHeader } from '../../components/Header.elements'
import { Card } from '../../components/Card/Cards.elements'
import { CryptoContainer, CryptoCard } from './CryptoCurrencies.elements'
import CryptoPersonal from './CryptoPersonal/CryptoPersonal'
import CryptoOverview from './CryptoOverview/CryptoOverview'

const CryptoCurrencies = () => {
    return (
        <>
            <CryptoContainer>
                <SubHeader>
                    <h1>Crypto<span>Currencies</span></h1>
                </SubHeader>

            </CryptoContainer>
        </>
    )
}

export default CryptoCurrencies
