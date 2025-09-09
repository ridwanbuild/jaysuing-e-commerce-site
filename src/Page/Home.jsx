import React from 'react'
import Navbar from '../Component/Share_Compo.jsx/Navbar'
import Hero_Section from '../Component/MainCompo/Hero_Section'

import Footer from '../Component/Share_Compo.jsx/Footer'
import Faq from '../Component/MainCompo/Faq'
import About_Product from '../Component/MainCompo/About_Product'

export default function Home() {
  return (
    <div>
      
        {/* <Navbar></Navbar> */}
        <Hero_Section></Hero_Section>
        <About_Product></About_Product>
        <Faq></Faq>

        <Footer></Footer>
    </div>
  )
}
