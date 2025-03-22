import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './header/footer/Footer.js'
import Header from './header/navbar/Header.js'

function Outlet1() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Outlet1
