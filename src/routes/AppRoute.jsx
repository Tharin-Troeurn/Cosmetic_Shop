import React from 'react'
import LayoutContainer from '../layout/LayoutContainer'
import HomePage from '../pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import HairCream from '../pages/HairCream'
import FaceProducts from '../pages/FaceProducts'
import ProductDetail from '../components/product/ProductDetail'
import AllProducts from '../components/product/AllProducts'
import ShopPage from '../components/product/ShopPage'

const AppRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LayoutContainer/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/hair-cream" element={<HairCream/>} />
            <Route path="/face-product" element={<FaceProducts/>} />
            <Route path="/product-detail" element={<ProductDetail/>} />
            <Route path="/shop" element={<ShopPage/>} />
          </Route>

        </Routes>
    </div>
  )
}

export default AppRoute