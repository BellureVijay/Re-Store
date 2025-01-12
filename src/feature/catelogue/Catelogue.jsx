import React,{useEffect,useState} from 'react'
import ProductList from './ProductList'
import agent from '../../app/api/Agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
function Catelogue() {
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    agent.catalog.list().then(product=>setProducts(product))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  },[])
if(loading){
  return <LoadingComponent/>
}
  return (
    <>
     <ProductList products={products} />
    </>
  )
}

export default Catelogue
