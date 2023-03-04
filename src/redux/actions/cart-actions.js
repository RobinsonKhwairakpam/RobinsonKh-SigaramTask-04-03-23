export const addItem = (product) => {
    return {
        type: 'ADD_ITEM',
        payload: product
    }
}

export const subtractItem = (product) => {
    return {
        type: 'SUBTRACT_ITEM',
        payload: product
    }
}

export const clear = () => {
    return {
        type: 'CLEAR_CART',
        payload: []
    }
}