import React from 'react'
import './Hero.scss'
import bgimg from '../Hero/hero.png'
import bgblob from '../Hero/hero-blob.png'

export default function Hero() {
  return (
    <div className='container'>
      <div className="text-wrapper">
        <p>WOMEN</p>
        <h1>Slick. Modern.</h1>
        <h1>Awesome.</h1>
        <div className="shop-collection">
         <button>Shop Collection</button>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={bgblob} alt='bg-blob' id='bg-blob'/> 
        <img src={bgimg} alt='bg-img' id='bg-img'/>
      </div>
    </div>
  )
}
