import React, { useContext, useEffect } from 'react'
import Product from './product'
import styles from './prdoucts.module.css'
import { productContext } from '../context/ProductContextProvider'

function Products() {
    const data = useContext(productContext)
    const data_list = []
    data.forEach(product => {
        data_list.push(<Product key={product.id} productData={product} />)
    })
    return (
        <>
            <div className={styles.container}>
                {data_list ? data_list : <span>Loading</span>}
            </div>
        </>
    )
}

export default Products
