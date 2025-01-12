import React from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,Button,CardHeader,Avatar} from '@mui/material'
import {NavLink} from 'react-router-dom'
function ProductCard({product}) {
  return (
    <Card sx={{borderRadius:'8px',
      '&:hover':{
        borderRadius:"0px",
        boxShadow:'1px 0px 1px 0.1px black'
        }
    }}>
        <CardHeader
         avatar={
            <Avatar sx={{bgcolor:'secondary.main'}}>
                {product.name.charAt(0).toUpperCase()}
            </Avatar>
         }
         title={product.name}
         titleTypographyProps={{
            sx:{fontWeight:'bold',color:'primary.main'}
         }}
        />
    <CardMedia
      sx={{ height: 140,backgroundSize:'contain',bgcolor:'primary.light' }}
      image={product.pictureUrl}
      title={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="secondary">
        {(product.price/100).toFixed(2)} Rs
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.brand} / {product.type}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to Cart</Button>
      <Button size="small">
        <NavLink to={`/catalog/${product.id}`} style={{textDecoration:'none'}}>

        View
        </NavLink>
        </Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard
