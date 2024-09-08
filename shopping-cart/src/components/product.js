import React from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';
import CartOperation from './operation';
function Product({ productData }) {
    return (
        <div className={styles.product} >
            <img src={productData.image} alt="product" />
            <div>
                <h4>{productData.title.substring(0, 20)} ...</h4>
            </div>
            <div>
                <p>{productData.price.toLocaleString()} $</p>
            </div>
            <div className={styles.footer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <CartOperation id={productData.id}/>
            </div>
        </div >
    )
}

export default Product
