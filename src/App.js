import React from 'react'
import DetailPage from './components/DetailPage'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <DetailPage/> */}
    </div>
  )
}

export default App