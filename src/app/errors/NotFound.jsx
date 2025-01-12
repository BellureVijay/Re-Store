import React from 'react'
import {Container,Paper,Typography,Divider,Button,Link} from '@mui/material'
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate=useNavigate();
  return (
  <Container component={Paper} sx={{height:"400"}}>
        <Typography gutterBottom varient='h3'> Oops we could not find what you are looking for </Typography>
        <Divider/>
        <Button fullwidth component={Link} to='/catalog' onClick={()=>{navigate('/catalog')}}>GO back to catalog</Button>
  </Container>
  )
}

export default NotFound
