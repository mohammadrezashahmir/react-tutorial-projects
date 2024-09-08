import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../context/ProductContextProvider'
import styles from './productDetail.module.css'
function ProductDetail() {
    const params = useParams()
    const products = useContext(productContext)
    const [product] = products.filter(item => {
        return item.id == params.id
    })
    return (
        <>
            {product ? <div className={styles.container}>
                <div className={styles.left}>
                    <img src={product.image} alt="product image" />
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>
                        <h3>{product.title}</h3>
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div className={styles.category}>
                        <h4><span>Category:</span> {product.category}</h4>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.price}>{product.price.toLocaleString()} $</div>
                        <Link to={'/products/'}>Back to shop</Link>
                    </div>
                </div>
            </div>
                : <span>Loading...</span>
            }
        </>
    )
}
export default ProductDetail;
