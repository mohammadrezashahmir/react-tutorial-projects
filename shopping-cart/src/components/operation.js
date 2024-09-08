import React, { useContext } from 'react';
import { isInCart, getCount } from '../helper/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { cartContext } from '../context/CartContextProvider';
function CartOperation({ id }) {
    const cartData = useContext(cartContext)
    const count = getCount(cartData.state,id)
    return (
        <div className={'operationContainer'}>
            {
                count == 1 && <button onClick={() => cartData.dispatch({ type: 'delete', id })}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            }
            {
                count > 1 && <button onClick={() => cartData.dispatch({ type: 'decrease', id })}>-</button>
            }
            <div className='count'>{count}</div>
            {
                isInCart(cartData.state,id) ?
                    <button onClick={() => cartData.dispatch({ type: 'increase', id })}>+</button>
                    : <button onClick={() => cartData.dispatch({ type: 'add', id })}>Add to cart</button>
            }
        </div>
    );
};

export default CartOperation;