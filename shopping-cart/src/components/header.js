import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'
import { cartContext } from '../context/CartContextProvider';
function Header() {
    const cartItemsCount = useContext(cartContext)
    return (
        <div className={styles.header}>
            <ul>
                <li><Link to={"/products/"}>Products</Link></li>
                <li>
                    <Link to={"/order/"}>
                        <div className={styles.shopingI}>
                            <div className={styles.count}>{cartItemsCount.state.itemsCounter}</div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2aT0jUQRTH31ZQRNS1v0RlZRbob+a3Hrp4rIioS90CE7OMiBCCbp6CLh0MYX2zWxZZWhIRGp06WMfo1KUgCDIraXff+23SwchfzG9nrdDV0vn9dn/gB+ayzLw33x/z3ryZWYAlqgyJ3mGp+KNU7JdtyCSRnwtFzeD7CahGJPLYnCJmiKK+qhQjkEdLkxTIH2Z08P2Ek/m6USg6LRV/0/1c9E5CteGid0iL0SKcHj44V1+R5jYj+hXEmZouf6VQlNVinHRhD8QZidRnEkA7xBlRjBUd9AMQZ5LK21WMExqvyuy1oJSNhVqIMwLpnsleZyHOSOQzwb6jqB/ijMRCrRHyeSlOqgWJNPBfNVo47YUFIdxeeSH0btFCGlKFuuk4iRip+FbRN3cu3prvJwTSl6Aazni7ISLqusfXBFU40pR7g7dbMSqQB4Mvk+Y2iAgXqcXUes+sGZXI581avWvN6DzoALd+JnIzuX1GyCeIgIaUt1MvKaHYkzi22p5l30/o4lGL0U4gZCTSFZOx0iEY54emrG+FMOn0l+lTrFlW+63bl+hdMELuQIgIxQeK9wr0NpSyqCGVrzcXF6MQRSWBfDkcD3o/Med4ibwjDBcS8+uE4u9S0U/3Zm5LGD6KjhQ/Kq5dagnDvkA+Z7Lj0zDs/3ak6KJZXrfDsC8VvTQlyQkIEzdDTtkLvkWSVLm9JshzTb3+Kgg/NVJOO2xUtM2maYF8zWTFbpt2yztU/NhUw822bDZ1+it0dW3qOQlRIBV1mMzVa89m/qhZsq8hKvQXM+XDe9vZUCrqgKg4/sBfHryjWD4FCkU/kt0T6yFKJNKQVSFIUwLpOkSNUHTJpMoUxBkXOWmEvIE40xSkS/a0GP3KBXFGmP3ESdMpiDMSqdUE6wjEmcau7NpSuSKQrzqZ/FadmiGOSKRjUtGkxVQ8UjExTk/+iMWr0UmJExsqIkSfTcymNlSfym7STSoanutdRSjqLzcm+KNCJShVrXoypd/0MbV0tph1DBZja7YxUjFHNfe/J2X2k0aV3fyvkxILGBM60/ddiob1xHQTSE9MNhu0NSaSZ+zp25U/q1mknJPmGltjIAqCYEW6r5dM0JAH55vQQsZofgGTeWIvefvBlQAAAABJRU5ErkJggg==" />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
