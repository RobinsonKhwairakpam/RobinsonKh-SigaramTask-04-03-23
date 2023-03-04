import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Sidebar() {

    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

  return (
    <Box p={2} bgcolor='background.paper' sx={{flex:{sm: '0.3', lg: '1'}}}>
    <Typography variant='h6' p={1}>Categories</Typography>
    <Divider></Divider>
    <List>
          <ListItem disablePadding>
            <ListItemButton selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}              
            >
                <ListItemText primary="All items" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Food" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Cat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Bird" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Fish" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Dog" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar