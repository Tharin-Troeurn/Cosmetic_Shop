import { BrowserRouter, Route, Routes } from "react-router-dom"

import AppRoute from "./routes/AppRoute"


function App() {
  return (
    <>
      
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
      
    </>
  )
}

export default App
