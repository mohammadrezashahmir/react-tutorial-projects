import React, { useReducer, createContext } from 'react'
const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    checkOut: false,
}
const sumSelectedItems = (items) => {
    const itemsCounter = items.reduce((total, product) => total + product.count, 0)
    return { itemsCounter }
}

const shoppingReducer = (state, {type,id}) => {
    switch (type) {
        case 'add':
            if (!state.selectedItems.find(item => item.id === id)) {
                state.selectedItems.push({
                    id,
                    count: 1,
                })
            }
            return {
                ...state,
                ...sumSelectedItems(state.selectedItems),
                checkOut: false,
            }
        case 'delete':
            const filtered = state.selectedItems.filter(item => item.id !== id)
            return {
                ...state,
                selectedItems: [...filtered],
                ...sumSelectedItems(filtered),
            }
        case 'increase':
            const indexI = state.selectedItems.findIndex(item => item.id === id)
            if (indexI != -1) {
                state.selectedItems[indexI].count += 1
            }
            return {
                ...state,
                ...sumSelectedItems(state.selectedItems),
            }
        case 'decrease':
            const indexD = state.selectedItems.findIndex(item => item.id === id)
            if (indexD != -1) {
                state.selectedItems[indexD].count -= 1
            }
            return {
                ...state,
                ...sumSelectedItems(state.selectedItems),
            }
        case 'clear':
            return {
                selectedItems: [],
                itemsCounter: 0,
                checkOut: false,
            }
        case 'checkout':
            return {
                selectedItems: [],
                itemsCounter: 0,
                checkOut: true,
            }
        default:
            return state
    }
}
export const cartContext = createContext()
function CartContextProvider(props) {
    const [state, dispatch] = useReducer(shoppingReducer, initialState)
    return (
        <div>
            <cartContext.Provider value={{  state, dispatch }}>
                {props.children}
            </cartContext.Provider>
        </div>
    )
}

export default CartContextProvider
