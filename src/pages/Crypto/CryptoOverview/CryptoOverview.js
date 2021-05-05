import { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import {
    CoinApp,
    CoinText,
    CoinInput
} from './CryptoOverview.elements'

function App() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data)
            }).catch(error => console.log(error))
    }, [])

    // platforms
    // https://api.coingecko.com/api/v3/finance_platforms

    const handelChange = e => {
        setSearch(e.target.value)
    }

    /** filter our search */
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <CoinApp>
            <CoinText>cryptocurrencies</CoinText>
            <form>
                <CoinInput type="text" placeholder="Search" onChange={handelChange} />
            </form>

            {filteredCoins.map(coin => {

                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}

                    />
                )
            })}
        </CoinApp>
    );
}

export default App;