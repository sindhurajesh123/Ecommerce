import React from 'react'
import{Route,Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Logoutt from '../components/Logoutt/Logoutt'
import ProductDetails from '../components/ProductDetails/ProductDetails'





function RoutesLayout() {
  return (
    <>

     

<Header/>
    <Routes>
<Route path='/'element={<Home/>}/>
<Route path='/logoutt'element={<Logoutt/>}/>
<Route path='/product/:id'element={<ProductDetails/>}/>



    </Routes>
    <Footer/>
   
  
    
    </>
      
    
  )
}

export default RoutesLayout
