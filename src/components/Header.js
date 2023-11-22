import React from 'react'
import './Header.css';
import  { Link } from 'react-router-dom';


function Header () {
  return (
  
    <header className='header'>
      <Link to='/' style={{textDecoration:"none",color:"orange"}}>
      <h1>ebay</h1>
      </Link>
     

  <Link to='/logoutt'>
  <button className='log'>Log out</button>
  </Link>
 
    </header>
  
  )
}

export default Header
