import React from 'react';
import './navbar.css';
import logo from '../images/logo.webp';
import title from '../images/title.webp';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} className="logo-img"></img>
            <img src={title} className="title-img"></img>
        </div>
        <div className='menu'>
            <div className='menu-item'>Home</div>
            <div className='menu-item'>Our Store</div>
            <div className='menu-item'>Tableware</div>
            <div className='menu-item'>Sustainable Packaging</div>
            <div className='menu-item'>Lifestyle Products</div>
            <div className='menu-item'>Organic Products</div>
        </div>
        <div className='nav-extra'>
            <div><i class="fa-solid fa-cart-shopping" style={{color: "#00BE6D"}}></i></div>
            <div><i class="fa-solid fa-circle" style={{color: "#00BE6D"}}></i></div>
            <div><i class="fa-solid fa-circle-user"></i></div>
            <div>Join Community</div>
        </div>
        <button className='mobile-menu-btn'><i class="fa-solid fa-bars"></i></button>
    </div>
  )
}
