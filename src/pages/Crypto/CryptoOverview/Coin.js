import React from 'react';
import {
    CoinRow,
    CoinItem,
    CoinSymbol,
    CoinData,
    CoinPrice,
    CoinVolume,
    CoinMarketcap,
    CoinRed,
    CoinGreen
} from './Coin.elements'

const Coin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <CoinRow>
            <CoinItem>
                <img src={image} alt='crypto' />
                <h1>{name}</h1>
                <CoinSymbol>{symbol}</CoinSymbol>
            </CoinItem>
            <CoinData>
                <CoinPrice>${price}</CoinPrice>
                <CoinVolume>${volume.toLocaleString()}</CoinVolume>
                {/** Change of price -> red or green */}
                {priceChange < 0 ? (
                    <CoinRed>{priceChange.toFixed(2)}%</CoinRed>
                ) : (
                    <CoinGreen>{priceChange.toFixed(2)}%</CoinGreen>
                )}
            </CoinData>
            <CoinMarketcap>
                Mkt Cap: ${marketcap.toLocaleString()}
            </CoinMarketcap>
        </CoinRow>
    );
};

export default Coin;