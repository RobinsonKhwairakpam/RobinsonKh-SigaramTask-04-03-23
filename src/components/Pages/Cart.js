import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CartPage from '../Cart/CartPage'

function Cart() {
  return (
    <Container sx={{mt:'30px'}} bgcolor='background.paper'>
      <Typography variant='h6'>Review Your Order</Typography>
      <CartPage />
    </Container>
  )
}

export default Cart