import React from 'react';
import NavBar from '../componentes/NavBar';
import Announcement from '../componentes/Announcement'
import Slider from '../componentes/Slider';
import Catogries from '../componentes/Catogries';
import Products from '../componentes/Products';
import Newsletter from '../componentes/Newsletter';
import Footer from '../componentes/Footer';


const HomePage = () => {
  return (
    <div>
      <Announcement />
      <NavBar/>
      <Slider/>
      <Catogries/>
      <Products/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default HomePage
