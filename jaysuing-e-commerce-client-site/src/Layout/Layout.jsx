import React from 'react'
import Navbar from '../Component/Share_Compo.jsx/Navbar'
import Footer from '../Component/Share_Compo.jsx/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>

      <div className=" ">
          <Navbar />
        </div>

      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}
