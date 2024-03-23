import React from 'react'
import "./Navbar.css"
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left"><i class="fa-solid fa-piggy-bank"></i> OnTipsBank</div>
        <div className="right">Add account</div>
        

      
    </div>
  )
}

export default Navbar;
