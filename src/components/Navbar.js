import { AppBar, Avatar, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import styled from '@emotion/styled';
import StoreIcon from '@mui/icons-material/Store';
// import MenuIcon from '@mui/icons-material/Menu';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  '&:focus': {
    textDecoration: 'none'
}, 
  '&:hover': {
    textDecoration: 'none'
}, 
  '&:visited': {
    textDecoration: 'none'
},
  '&:link': {
    textDecoration: 'none'
},
  '&:active': {
        textDecoration: 'none'
    }
})

function Navbar() {
    const cartItems = useSelector(state => state.cartItems)
    const totalCartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity , 0)

  return (
    <AppBar position='static' sx={{p:'17px',background: "#063970",boxShadow:'0px 3px 8px rgba(0, 0, 0, 0.24)'}}>
        <Toolbar>
            <StoreIcon sx={{mr:{sm: '8px', xs: 'auto'},fontSize:'1.8rem'}} />
            <Typography variant='h6' sx={{mr:'auto',display:{xs : 'none', sm: 'block'}}}>FakeShop</Typography>             
            
            <StyledLink to='/'>
            <Typography variant='h6' sx={{ml:'auto',cursor:'pointer',color:'white'}}>
            Home
            </Typography>
            </StyledLink>
  
            <StyledLink to='/contact'>
            <Typography variant='h6' sx={{ml:'30px',cursor:'pointer',color:'white'}}>
              Contact
            </Typography>
            </StyledLink>
            

            <div style={{position:'relative'}}>
            <span style={{
                width: '16px',
                height: '15px',
                padding: '4px',
                backgroundColor: 'red',
                borderRadius: '50%',
                position: 'absolute',
                zIndex: 1,
                textAlign: 'center',
                right: '20px',
                bottom: '17px'
             }}>
                <Typography variant='body2' sx={{fontSize:'0.75rem'}}>{totalCartQuantity}</Typography>
              </span>

            <StyledLink to='/cart' >
              <Stack direction='row' justifyContent='center' alignItems='center' sx={{m:'0 30px',cursor:'pointer'}}>
              <Typography variant='h6' sx={{color:'white'}}>Cart</Typography>
              <ShoppingCartIcon sx={{m:'0 7px',color:'white'}} />
              </Stack>            
            </StyledLink>

            </div>
            <Avatar sx={{height:'38px',width:'38px',mb:'4px',cursor:'pointer', ml:'10px'}} src="https://mui.com/static/images/avatar/1.jpg" />
            
            {/* <MenuIcon fontSize='large' sx={{display: {xs: 'block', md: 'none'}, cursor:'pointer'}} /> */}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar