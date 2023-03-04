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

function MiniButton( {quantity, handleAdd, handleSubtract} ) {
  return (
    <>
    <StyledButton size='small' variant='contained' onClick={handleSubtract}>-</StyledButton>
            
        <div style={{ width: '2.8rem', textAlign: 'center', marginBottom:'3px'}} >
        <span style={{fontWeight: 'bold', fontSize: "0.86rem"}}> {quantity} </span>
        </div>
                    
    <StyledButton size='small' variant='contained' onClick={handleAdd}>+</StyledButton>
    </>
  )
}

export default MiniButton