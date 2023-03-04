import styled from '@emotion/styled'
import { Box, Button, Container, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clear, subtractItem } from '../../redux/actions/cart-actions'
import { currency } from '../../utilities/currency'
import MiniButtonRightbar from '../Rightbar/MiniButtonRightbar'
import EmptyCart from '../../images/empty_cart.png'

const StyledImg = styled("img")({
    display: 'block',
    marginRight: '20px',
    height: '50px',
    width: '50px',
    objectFit: 'contain'
})

function CartPage() {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()

    const clearCart = () => {
        dispatch(clear())
    }

    //total cart items
    const totalCartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity , 0)
    
    //handle cartItem add/subtract
    const handleAdd = (product) => {
        dispatch(addItem(product))
    }
    const handleSubtract = (product) => {
        dispatch(subtractItem(product))
    }

    //total cost of an item
    const totalCostOfAnItem = (id) => {
        let tempArray = cartItems.filter(item => item.id === id)
        const res = tempArray.reduce((quantity, item) => item.quantity * item.price + quantity, 0)
        return res
    }

    //total cost
    const totalCost = cartItems.reduce((quantity, item) => item.quantity * item.price + quantity, 0)

  return (
    <Box flex={2.2} p={2}>
    <Stack direction='row' justifyContent='space-between' p={1}>
        <Typography variant='h6'>My Cart</Typography>
        <Button onClick={clearCart}>Clear Cart</Button>    
    </Stack>
    <Divider></Divider>
        <Box>
            {cartItems.length === 0 ? 
                <img src={EmptyCart} alt='Empty Cart' style={{height:'300px',width:'auto',display:'block',margin:'0 auto'}} />
                : cartItems.map(item =>
                    <Box>
                    
                    <Stack justifyContent='center' alignItems='center' direction='row' sx={{mt:'10px',height:'80px'}}>
                        <StyledImg src={item.image} alt={item.title} />
                        <Typography sx={{width:'280px',wordBreak:'break-word',fontSize:'0.9rem'}}>{item.title}</Typography>
                        
                        <Stack direction='row' justifyContent='center' alignItems='center' 
                            sx={{mt:'5px', m:'0 auto', border:'1px solid #1976d2', height:'28px', width:'100px'}
                        }>
                        <MiniButtonRightbar cartItems={cartItems} product={item} handleAdd={handleAdd} handleSubtract={handleSubtract} />
                        </Stack>
                        
                        <Typography sx={{width:'80px',fontSize:'0.95rem'}}>{currency(totalCostOfAnItem(item.id))}</Typography>                                                
                    </Stack>                    
                    <Divider></Divider>
                    </Box>
            )}
            {cartItems.length ? 
            <>
                <Stack direction='row' justifyContent='space-between' mt={3}>
                    <Stack direction='row' spacing={1.5}>
                        <Typography sx={{fontWeight:'bold'}}>Item Total</Typography>
                        <Typography>({totalCartQuantity} items)</Typography>
                    </Stack>                           
                    <Typography sx={{fontWeight:'bold', mr:'20px'}}>{currency(totalCost)}</Typography>
                </Stack> 
                
                <Button variant='contained' sx={{mt:'25px',p:'8px 12px'}}>Check Out</Button>
                               
                </>
                :
                null
            }
             
        </Box>    
    </Box>
  )
}

export default CartPage