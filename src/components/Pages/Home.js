import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Main from '../Main'
import Rightbar from '../Rightbar'
import Sidebar from '../Sidebar'

function Home() {
  return (
    <Box bgcolor='background.paper'>
    <Stack direction='row'>        
      <Sidebar/>
      <Main />
      <Rightbar />
    </Stack>
    </Box>
  )
}

export default Home