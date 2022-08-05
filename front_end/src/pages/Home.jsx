import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
// import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        {/* <Announcements/> */}
        <Navbar/>
        <Slider/>
        {/* <Categories/> */}
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home