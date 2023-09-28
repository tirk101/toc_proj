import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter, } from 'react-router-dom'

import Home from './page/Home/index'
import Tutorial from './page/Tutorial/index'
import Playground from './page/Playground/index'

const route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  )
}

export default route