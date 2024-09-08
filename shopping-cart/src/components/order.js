import React, { useContext } from 'react';
import styles from './order.module.css'
import OrderItem from './orderItem';
import CheckOutBox from './checkOutBox';
import { cartContext } from '../context/CartContextProvider'
import { productContext } from '../context/ProductContextProvider'
import { Link } from 'react-router-dom';
import { total } from '../helper/utils';
const Order = () => {
    const { state } = useContext(cartContext)
    const prdoctsData = useContext(productContext)
    const selectedProducts = []
    state.selectedItems.map(item => { selectedProducts.push({ ...prdoctsData.find(product => product.id == item.id), ...item }) })
    const listData = []
    selectedProducts.map(product => {
        listData.push(<OrderItem key={product.id} product={product} />)
    })
    const {totalPrice,totalItems} = total(selectedProducts)
    return (
        <div className={styles.container}>
            <div className={styles.order}>
                {listData.length ? listData : <span>Go to <Link to={'/products/'}>products</Link> to commit an order</span>}
            </div>
            {!!state.itemsCounter && <CheckOutBox totalPrice={totalPrice} totalItems={totalItems} />}
            {state.checkOut && <span>Check out successfully!!
                want more? <Link to={'/products/'}>go to shop</Link>
            </span>}
        </div>
    );
};

export default Order;