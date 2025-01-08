import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Switch, List, Badge,IconButton,Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'
function Header({ darktheme, handleDarkTheme }) {
  const midLinks = [
    { title: "catalog", path: "/catalog" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" }
  ];

  const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" }
  ];

  const [active, setActive] = useState(false); // Track active state

  const handleClick = (name) => {
    setActive(name); // Toggle active state when clicked
  };

  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Box display="flex" alignItems="center">

        <NavLink to="/"
         style={{ textDecoration: "none" }}
         onClick={()=>{handleClick('home')}}>

        <Typography sx={
      {color:"white",
        '&:hover':{
          color:"grey.500"
        },
      color: active==="home" ? 'text.secondary' : 'white'
      }
      } variant="h6">Re-Store</Typography>
        </NavLink>
        <Switch
          checked={darktheme}
          onChange={handleDarkTheme}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map((x) => (
            <NavLink
            key={x.path}
            to={x.path}
            style={{ textDecoration: "none" }}
            onClick={()=>{handleClick(x.title)}}
            >
               <IconButton>
    <Typography  sx={
      {color:"white",
        '&:hover':{
          color:"grey.500"
        },
      color: active===x.title ? 'text.secondary' : 'white'
      }
      }>
        {x.title.toUpperCase()}</Typography>
  </IconButton>
            </NavLink>
          ))}
        </List>
        <Box display="flex" alignItems="center">

        <IconButton size="large" edge="start" color="inherit" sx={{mr:2,ml:1}}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCartIcon/>
            </Badge>
        </IconButton>
        <List sx={{ display: "flex" }}>
          {rightLinks.map((x) => (
            <NavLink
            key={x.path}
            to={x.path}
            style={{ textDecoration: "none" }}
            onClick={()=>{handleClick(x.title)}}
            >
               <IconButton>
    <Typography 
     sx={
      {color:"white",
        '&:hover':{
          color:"grey.500"
        },
      color: active===x.title ? 'text.secondary' : 'white'
      }
      }
    >{x.title.toUpperCase()}</Typography>
  </IconButton>
            </NavLink>
          ))}
        </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
