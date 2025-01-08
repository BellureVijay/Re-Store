import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from '../../feature/home/HomePage'
import Catelogue from '../../feature/catelogue/Catelogue'
import ProductDetails from '../../feature/catelogue/ProductDetails'
import About from '../../feature/about/About'
import Contact from '../../feature/contact/Contact'
import Header from '../layout/Header'
import {createTheme,ThemeProvider,CssBaseline,Container} from '@mui/material'
function Routing() {
    const[darktheme,setDarkTheme]=useState(false);
    const palletColor=darktheme?'dark':'light'
    const Theme = createTheme({
      palette: {
        mode: palletColor,
        background:{
          default:!darktheme?'#eaeaea':'#121212'
        }
      }
     
    });
      const handleDarkTheme=()=>{
            setDarkTheme(!darktheme)
          
            
        }
  return (
    
    
    <BrowserRouter>
     <ThemeProvider theme={Theme}>
    <Header darktheme={darktheme} handleDarkTheme={handleDarkTheme} />
        <CssBaseline/>
        <Container>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/Home' exact element={<HomePage/>}/>
        <Route path='/catalog' exact element={<Catelogue/>}/>
        <Route path='/catalog/:id' exact element={<ProductDetails/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routing
