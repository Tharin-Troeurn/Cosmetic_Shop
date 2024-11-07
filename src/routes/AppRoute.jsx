import React from 'react'
import LayoutContainer from '../layout/LayoutContainer'
import HomePage from '../pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import HairCream from '../pages/HairCream'
import FaceProducts from '../pages/FaceProducts'

const AppRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LayoutContainer/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/hair-cream" element={<HairCream/>} />
            <Route path="/face-product" element={<FaceProducts/>} />
          </Route>

        </Routes>
    </div>
  )
}

export default AppRoute