import React,{useEffect,useState} from 'react'
import {Grid,Typography,Divider,TableContainer,Table,TableBody,TableRow,TableCell} from '@mui/material'
import {useParams} from 'react-router-dom'
import agent from '../../app/api/Agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import NotFound from '../../app/errors/NotFound'
function ProductDetails() {
  const[Product,setProduct]=useState([])
  const[loading,setLoading]=useState(true)
  const {id}=useParams();
    useEffect(()=>{
      id && agent.catalog.details(id)
       .then(response=>setProduct(response))
       .catch(err=>console.log(err))
       .finally(()=>setLoading(false))
    },[id])
    
    
    if(loading) return <LoadingComponent/>
    if(!Product) return <NotFound/>
  return (
 <Grid container spacing={6}>
    <Grid item xs={6}>
      <img src={Product.pictureUrl} alt={Product.name} stlye={{width:'100%'}} />
    </Grid>
    <Grid item xs={6}>
      <Typography variant='h3'>
        {Product.name}
      </Typography>
      <Divider sx={{mb:2}}/>
      <Typography variant='h4' color="secondary">
        {(Product.price/100).toFixed(2)} Rs
      </Typography>

      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                  {Product.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Description
              </TableCell>
              <TableCell>
                  {Product.description}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Type
              </TableCell>
              <TableCell>
                  {Product.type}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Brand
              </TableCell>
              <TableCell>
                  {Product.brand}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Quantity
              </TableCell>
              <TableCell>
                  {Product.quantityStock}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
 </Grid>
  )
}

export default ProductDetails
