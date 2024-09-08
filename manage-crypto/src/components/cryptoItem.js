import React from 'react';
import styles from './cryptoItem.module.css'
const CryptoItem = ({ cryptoData }) => {
    return (
        <div className={styles.item}>
            <div><img src={cryptoData.iconUrl} width={30} height={30} alt="image" /></div>
            <div className={styles.title}>{cryptoData.name}</div>
            <div className={styles.symbol}>{cryptoData.symbol}</div>
            <div className={styles.price}>{parseFloat(cryptoData.price).toLocaleString()}$</div>
            <div className={cryptoData.change>0 ? styles.green : styles.red}>{cryptoData.change}%</div>
            <div className={styles.cap}>{parseFloat(cryptoData.marketCap).toLocaleString()}$</div>
        </div>
    );
};

export default CryptoItem;