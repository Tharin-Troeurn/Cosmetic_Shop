import React from 'react'
import Hero from '../components/homePage/Hero'
import CategoryShop from '../components/homePage/CategoryShop'
import TrendingProducts from '../components/homePage/TrendingProducts'
import { Banner } from '../components/homePage/Banner'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <CategoryShop/>
        <Banner/>
        <TrendingProducts/>
        
    </>
  )
}

export default HomePage