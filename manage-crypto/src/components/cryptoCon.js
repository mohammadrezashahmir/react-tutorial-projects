import React, { useEffect, useState } from 'react';
import { getCrypto } from '../services/api';
import styles from './cryptoCon.module.css';
import CryptoItem from './cryptoItem';
function CryptoCon() {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState('')
    useEffect(() => {
        const fetchAPI = async () => {
            setData(await getCrypto())
        }
        fetchAPI()
    }, [])
    const changeHandler = (event) => {
        setSearchData(event.target.value);
    }
    const dataFiltered = data.filter(item => item.name.toLowerCase().includes(searchData.trim().toLowerCase()))
    const dataList = []
    dataFiltered.map(item => dataList.push(<CryptoItem key={item.uuid} cryptoData={item} />))
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input type="text" placeholder={'search...'} value={searchData} onChange={changeHandler} />
            </div>
            <div className={styles.cryptoItems}>
                {dataList.length ? dataList : <span>Loading...</span>}
            </div>
        </div>
    )
}

export default CryptoCon
