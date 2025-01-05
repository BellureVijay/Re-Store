import React from 'react'
import {AppBar,Toolbar,Typography,Switch} from "@mui/material"
function Header({darktheme,handleDarkTheme}) {
  
  return (
    <AppBar position='static' sx={{mb:4}}>
      <Toolbar>
        <Typography varient="h6">Re-Store</Typography>
      <Switch
      checked={darktheme}
      onChange={handleDarkTheme}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      </Toolbar>
    </AppBar>
  )
}

export default Header
