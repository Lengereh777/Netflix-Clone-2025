import React from 'react'
import "../../componte/Footer/Footer"
import Navbar from '../../componte/Navbar/Navbar'
import Footer from '../../componte/Footer/Footer'
import Banner from '../../componte/Banner/Banner'
import RowList from '../../componte/Rowss/Rowlist/Rowlist'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowList/>
      <Footer/>
    
    </div>
  )
}

export default Home
