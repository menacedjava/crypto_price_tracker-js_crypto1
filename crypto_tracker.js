// Crypto Price Tracker using CoinGecko API
const axios = require('axios');

async function getPrice(symbol) {
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
    console.log(res.data);
}

getPrice('bitcoin');
