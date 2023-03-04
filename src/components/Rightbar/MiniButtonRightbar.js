import { styled } from '@mui/material'
import React from 'react'

const StyledButton = styled("button")({
    width: '35px',
    height: '31px',
    textAlign: 'center',
    padding: '5px 10px',
    background: '#1976d2',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
})

function MiniButtonRightbar( {cartItems, product, handleAdd, handleSubtract} ) {

    //get current item quantity
    const quantity = cartItems.find(item => item.id === product.id)?.quantity || 0 

  return (
    <>
    <StyledButton size='small' variant='contained' onClick={() => handleSubtract(product)}>-</StyledButton>
            
        <div style={{ width: '2.8rem', textAlign: 'center', marginBottom:'3px'}} >
        <span style={{fontWeight: 'bold', fontSize: "0.8rem"}}> {quantity} </span>
        </div>
                    
    <StyledButton size='small' variant='contained' onClick={() => handleAdd(product)}>+</StyledButton>
    </>
  )
}

export default MiniButtonRightbar