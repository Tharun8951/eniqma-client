import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from './Hero/Hero'
import Popular from './Popular/Popular'
import Spring from './Spring/Spring'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Popular/>
        <Spring/>
        <Footer/>
    </>
  )
}
