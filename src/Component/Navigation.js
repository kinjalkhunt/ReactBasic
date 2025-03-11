import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.js'
import About from './about.js'
import Outlet1 from './Outlet.js'
import Header from './Header.js'
import Footer from './Footer.js'

function Navigation() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path='/' element={<Outlet1/>}> */}
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* </Route> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation
