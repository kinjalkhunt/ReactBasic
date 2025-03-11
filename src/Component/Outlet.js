import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.js'
import Footer from './Footer.js'

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
