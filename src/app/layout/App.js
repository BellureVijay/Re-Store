import {useState} from 'react'
import Catelogue from '../../feature/catelogue/Catelogue'
import {CssBaseline,Container,createTheme,ThemeProvider} from '@mui/material'
import Header from './Header'
function App() {
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
    <ThemeProvider theme={Theme}>
    <CssBaseline/>
      <Header darktheme={darktheme} handleDarkTheme={handleDarkTheme} />
      <Container>
      <Catelogue />
      </Container>
    </ThemeProvider>
  );
}

export default App;
