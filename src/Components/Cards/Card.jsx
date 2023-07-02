import React from 'react'
import '../Cards/Card.scss'
import cardsampleimg from '../Cards/cardsampleimg.jpg'

export default function Card() {
  return (
    <div className='card-container'>
        <img src={cardsampleimg} alt="card-img"  />
        <div className="card-text-wrapper">
            <p>MEN</p>
            <h3>T-Shirt Name 10</h3>
            <span>price: $33.00</span>
        </div>
    </div>
  )
}
