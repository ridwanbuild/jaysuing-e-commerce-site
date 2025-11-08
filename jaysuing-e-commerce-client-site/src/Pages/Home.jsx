
import Hero_Section from '../Component/MainCompo/Hero_Section'

import Footer from '../Component/Share_Compo.jsx/Footer'
import Faq from '../Component/MainCompo/Faq'
import About_Product from '../Component/MainCompo/About_Product'
import Order_Section from '../Component/MainCompo/Order_Section'
import Contact from './Contact'
import Review from '../Component/MainCompo/Review'
import Loading from '../Component/Share_Compo.jsx/Loading'

export default function Home() {


  


  return (
    <div>
      
        <Hero_Section></Hero_Section>
        <About_Product></About_Product>
        <Order_Section></Order_Section>
        <Faq></Faq>
        <Review></Review>
       <Contact></Contact>
        
        
    </div>
  )
}
