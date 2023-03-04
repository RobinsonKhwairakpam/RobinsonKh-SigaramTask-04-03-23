export const cartReducer = (cartItems = [], action) => {
    const { payload } = action

    switch(action.type){
        case 'ADD_ITEM':
            if(cartItems.find(item => item.id === payload.id)){
              return cartItems.map(item => {
                    if(item.id === payload.id)
                        return { ...item, quantity: item.quantity + 1 }
                    else
                        return item
                })                
            } 
            else 
            {
                return [...cartItems, {...payload, quantity: 1}]
            }
            

        case 'SUBTRACT_ITEM':

            if(cartItems.find(item => item.id === payload.id)?.quantity === 1){  //check if quantity == 1 of the item we found
                return cartItems.filter(item => item.id !== payload.id)
            } else {
            return cartItems.map(item => {
                    if(item.id === payload.id){
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }            
            
        case 'CLEAR_CART':
            return payload

        default :
            return cartItems
    }
}