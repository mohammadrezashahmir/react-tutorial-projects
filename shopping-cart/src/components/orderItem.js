import React from 'react';
import styles from './orderItem.module.css'
import { Link } from 'react-router-dom';
import CartOperation from './operation';
const OrderItem = ({product}) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}><img src={product.image} width={70} height={70} alt="product image" /></div>
            <div className={styles.info}>
                <h3><Link to={`/products/${product.id}`}>{product.title}</Link></h3>
                <h4>{product.price.toLocaleString()} $</h4>
            </div>
            <div className={styles.count}>
                {product.count}
            </div>
            <CartOperation id={product.id}/>
        </div>
    );
};

export default OrderItem;