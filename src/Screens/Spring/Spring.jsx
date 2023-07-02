import React from 'react'
import './Spring.scss'
import springimg2 from './spring-img-2.jpg'
import catmencard from './cat-men.jpg'
import catwomencard from './cat-women.jpg'
import Card from '../../Components/Cards/Card'
import { AiFillStar } from 'react-icons/ai'

export default function Spring() {
  return (
    <div>
      {/* background fixed image */}
      <div className="spring-container">
        <div className="Spring-img">
          <div className="text-overlay">
            <p>NEW COLLECTION</p>
            <h3>Be different in your own way!</h3>
            <h4>Find your unique style.</h4>
            <button>Shop Collection</button>
          </div>
        </div>

        <div className="women-spring-collection">
          <div className="spring-img-1">
            <img src={springimg2} alt="img" className="spring-img-2" />
          </div>
          <div className="spring-text-wrapper">
            <span>WOMEN</span>
            <h3>Spring Summer Collection</h3>
            <p>
              Experience our enchanting Spring Summer Collection. <br />
              Embrace the season with trendy styles. Elevate your wardrobe with
              chic designs.
            </p>
            <button>See Whole Collection</button>
          </div>
        </div>
      </div>

      {/* Summer collection cards */}
      <div className="pop-container-2">
        <div className="pop-text-wrapper-2">
          <p>SUMMER COLLECTION</p>
          <h2>Popular T-Shirts</h2>
        </div>
        <div className="pop-tshirts-row-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* review section */}
      <div className="review-container">
        <h2>Reviews</h2>
        <p>
          “ Very good quality T-shirts and lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua quis ipsum! ”
        </p>
        <span>
          {' '}
          <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
          <AiFillStar />
        </span>
        <span className="jane">JANE OLIVER</span>
      </div>

      {/* section above footer (men-women-card)*/}
      <div className="men-women-card">
        <div className="cat-men-card">
          <img src={catmencard} alt="men-card" />
            <p>MEN</p>
        </div>
        <div className="cat-women-card">
          <img src={catwomencard} alt="men-card" />
            <p>WOMEN</p>
        </div>
      </div>
    </div>
  )
}
