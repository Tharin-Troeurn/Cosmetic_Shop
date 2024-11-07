import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const LayoutContainer = () => {

  React.useEffect(()=>{
    Aos.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Header />
        <section>
        <Outlet/>
        </section>
      <Footer />
    </>
  )
}

export default LayoutContainer