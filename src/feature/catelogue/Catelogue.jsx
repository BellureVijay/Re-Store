import React,{useEffect,useState} from 'react'
import ProductList from './ProductList'

function Catelogue() {
  const[products,setProducts]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/api/Products').then(response=>response.json()).then(data=>setProducts(data))
  },[])

  return (
    <>
     <ProductList products={products} />
    </>
  )
}

export default Catelogue
