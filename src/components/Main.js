import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Product from './Products/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/product-actions'
import { Grid } from '@mui/material'

function Main() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <Box flex={3.5} p={2} sx={{mt:'10px'}}>
        <Grid container gap={3} sx={{m:'0 auto'}}>
        {products.map(product => 
            <Grid item sx={{margin: {xs: '0 auto'}}}>
            <Product key={product.id} product={product} />
            </Grid>
        )}
        </Grid>        
    </Box>
  )
}

export default Main