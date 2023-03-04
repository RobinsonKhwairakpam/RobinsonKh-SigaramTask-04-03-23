import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, subtractItem } from '../../redux/actions/cart-actions'
import { currency } from '../../utilities/currency'
import MiniButton from './MiniButton'

const StyledCard = styled(Card)({
    mt: '10px',
    width: '350px',
    height: '350px',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)'
})

const StyledImg = styled("img")({
    display: 'block',
    margin: '5px auto',
    height: '200px',
    width: '200px',
    objectFit: 'contain'
})


function Product( {product} ) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems) 
    
    const quantity = cartItems.find(item => item.id === product.id)?.quantity || 0 //get current item quantity
    
    const handleAdd = () => {
        dispatch(addItem(product))
    }
    const handleSubtract = () => {
        dispatch(subtractItem(product))
    }

  return (
    <StyledCard variant='outlined' sx={{width:{xs:'250px', md:'350px'}}}>        
        {/* <CardMedia title='Image' image={product.image} sx={{height:'400px'}} /> */}
        <StyledImg src={product.image} alt={product.title} />
        <CardContent sx={{height:'30px'}}>{product.title}</CardContent>

        <Stack direction='row' justifyContent='space-between'>
        <Typography variant='body1' sx={{mt:'20px',ml:'15px',fontWeight:'bold'}}>{currency(product.price)}</Typography>
        <CardActions>           

            <div>
           {quantity === 0 ? <Button sx={{p:'10px', mr:'5px', mt:'2px'}} onClick={handleAdd}>+ Add to Cart</Button>
          :( <>
            <Stack direction='row' justifyContent='center' alignItems='center' sx={{mt:'8px', mr:'8px', border:'1px solid #1976d2', height:'31px'}}>
                <MiniButton quantity={quantity} handleAdd={handleAdd} handleSubtract={handleSubtract} />
             </Stack>              
             </> 
            )}
           </div>

        </CardActions>
        </Stack>
        
    </StyledCard>
  )
}

export default Product