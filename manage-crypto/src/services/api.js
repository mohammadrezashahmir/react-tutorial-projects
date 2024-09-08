import axios from "axios"

export const getCrypto = async () => {
    const result = await axios.get('https://api.coinranking.com/v2/coins/');
    return result.data.data.coins;
}