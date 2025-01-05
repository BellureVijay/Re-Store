import React from 'react'
import {Grid} from '@mui/material'
import ProductCard from './ProductCard'

function ProductList({products}) {
  return (
    <Grid container spacing={4}>
        {products.map(item=>(
            <Grid item xs={3} key={item.id}>
                <ProductCard product={item}/>
                </Grid>
        ))}
      </Grid>
  )
}

export default ProductList
