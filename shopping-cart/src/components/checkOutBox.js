import React, { useContext } from 'react';
import styles from './checkOutBox.module.css';
import { cartContext } from '../context/CartContextProvider'
const CheckOutBox = ({ totalPrice,totalItems }) => {
    const { state, dispatch } = useContext(cartContext)
    return (
        <div className={styles.box}>
            <div className={styles.header}>
                <div><span>Total items: </span>{totalItems}</div>
                <div><span>Total payment: </span>{totalPrice} $</div>
            </div>
            <div className={styles.footer}>
                <button onClick={() => dispatch({ type: 'clear' })}>clear</button>
                <button onClick={() => dispatch({ type: 'checkout' })}>Checkout</button>
            </div>
        </div>
    );
};

export default CheckOutBox;