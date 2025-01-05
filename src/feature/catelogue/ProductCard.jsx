import React from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,Button,CardHeader,Avatar} from '@mui/material'
function ProductCard({product}) {
  return (
    <Card >
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
      <Button size="small">View</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard
