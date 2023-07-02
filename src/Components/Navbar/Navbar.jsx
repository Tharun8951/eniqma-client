import React from 'react'
import '../Navbar/navbar.scss'
import { Link } from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {BsBasketFill} from 'react-icons/bs'

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="right-nav">
        <Link to="/men">BUY T-SHIRTS</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/men">MEN</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="middle-nav">
        <Link to="/">ENIQMA</Link>
      </div>
      <div className="left-nav">
          <div className="search-icon"><HiOutlineSearch /></div>
          <div className="basket-icon"><BsBasketFill/></div>
          <div className="auth-btn">LOG IN</div>
      </div>
    </div>
  )
}

export default Navbar
