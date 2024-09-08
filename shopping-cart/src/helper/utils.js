export const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}
export const getCount = (state, id) => {
    const item = state.selectedItems.find(item => item.id === id)
    return item ? item.count : false
}
export const total = items => {
    let totalPrice = items.reduce((total, product) => total + product.price * product.count, 0).toLocaleString()
    let totalItems = items.reduce((total, product) => total + product.count, 0)
    return { totalPrice, totalItems }
}