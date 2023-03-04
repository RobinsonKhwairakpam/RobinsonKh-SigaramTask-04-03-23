import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Contact() {
  return (
    <Container bgcolor='background.paper'>
        <Typography variant='h5' mt={5}>Contact</Typography>
        <Typography variant='body1' mt={2}>Robinson Khwairakpam</Typography>
        <Typography variant='body1'>robsonkhzepflo@gmail.com</Typography>
        <Typography variant='body1'>8787886320</Typography>
    </Container>
  )
}

export default Contact