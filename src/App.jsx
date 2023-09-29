import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link} from 'react-router-dom'

import Home from './page/Home/index'
import Tutorial from './page/Tutorial/index'
import Playground from './page/Playground/index'

const route = () => {
  return (
    <BrowserRouter>
      <div className='absolute'>
        <div className='flex gap-10 '>
          <Link className='bg-red-500 p-1 rounded-md' to="/" >Home</Link>
          <Link className='bg-red-500 p-1 rounded-md' to="/tutorial" >Tutorial</Link>
          <Link className='bg-red-500 p-1 rounded-md' to="/playground">Playground</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  )
}

export default route