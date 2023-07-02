import React from 'react'
import '../Popular/Popular.scss'
import Card from '../../Components/Cards/Card'
import pop21 from './pop-2-1.jpg'
import pop22 from './pop-2-2.jpg'

export default function Popular() {
    
    
  return (
    <div className='pop-container'>
        <div className="pop-text-wrapper">
            <p>SUMMER COLLECTION</p>
            <h2>Popular T-Shirts</h2>
        </div>
        <div className="pop-tshirts-row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="pop-container-2">
          <div className="img1">
            <img src={pop21} alt="" />
            <span>MEN</span>
            <h2>The base collection - Ideal every day.</h2>
            <button>Shop Now</button>
          </div>
          <img src={pop22} alt="" />
        </div>
    </div>
  )
}
