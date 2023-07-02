import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer-container'>
        <h2>Subscribe To Get Offers In Your Inbox</h2>
        <div className="email-input-sec">
            <input type="email" placeholder='Your email address...'/>
            <button>Subscribe</button>
        </div>
        <div className="footer-nav">
            <Link to='/'>Eniqma</Link>
            <Link to='/'>Women</Link>
            <Link to='/'>Men</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
        </div>
        <p>Copyright © 2023 Eniqma | Powered by Eniqma</p>
    </div>
  )
}
