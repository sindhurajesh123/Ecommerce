import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../../Apiservice/Api'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from  "react-redux";
import axios from 'axios';
import { getData } from '../../stateManager/action/getData.action';
function Home() {
     const dispatch = useDispatch()
    const[products,setProducts] = useState([])
   // useEffect (() => {
        //const fetchProducts = async ()=>{
           // const data = await getAllProducts();
        //setProducts(data)
        //}
        //fetchProducts()

    //}, [])
const {apiData}= useSelector((state)=>state.productData)
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((response)=> {
      dispatch(getData({
        type:"API_DATA",
        items: response.data
      }))
      }) 
    
    },[])
    useEffect(()=>{
console.log(apiData);
setProducts(apiData)
    },[apiData])

  return (
    <div className='product-grid'>
        {
            products.map((product)=>(

         <div className='product' key={product.id}>
          <img src={product.image} alt="alternative" />
          <h2>Sample</h2>
          <p>
            <span className='price'>${product.price}</span></p> 
            <Link to={`/product/${product.id}`}>
            <button>Product Details</button>
            </Link>
            
        </div>
            ))
}
    </div>
  )
}

export default Home
