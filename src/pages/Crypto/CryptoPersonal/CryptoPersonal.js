import React from 'react'
import { SubHeader } from '../../../components/Header.elements'
import { CPersonal, BackgroundImage } from './CryptoPersonal.elements'

const CryptoPersonal = () => {
    return (
        <>
            <CPersonal>
                <BackgroundImage />
                <SubHeader>
                    <h1>Crypto <span>Personal</span></h1>
                </SubHeader>
            </CPersonal>
        </>
    )
}

export default CryptoPersonal
