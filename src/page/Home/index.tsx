import { useState } from 'react'
import React from 'react'
import {background} from "../../assets/home"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
        
      </div>
  )
}

export default Home