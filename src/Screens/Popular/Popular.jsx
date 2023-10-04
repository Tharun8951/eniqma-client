import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../Popular/Popular.scss'
import Card from '../../Components/Cards/Card'
import pop21 from './pop-2-1.jpg'
import pop22 from './pop-2-2.jpg'

export default function Popular() {

  const loadData = async () => {

    await axios.get(`https://eniqma-server.vercel.app/products`)
    // await axios.get(`http://localhost:4000/products/`)
    .then(res => {
      console.log(res)
      // const response_fooditems = res.data.food_items 
      // const response_foodcat = res.data.food_cat
      // setFoodItems(response_fooditems)
      // setFoodCat(response_foodcat)
    })
  }

  useEffect(() => {
    loadData()
  }, [])
    
    
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
