import { useState } from 'react'
import React from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
      <div className=' flex flex-col justify-center items-center font-bold'>
        <h1>Home page</h1>
        <h2 className='text-green-500'>chawong Check In</h2>
        <h2 className='text-rose-500'>chawong Check Out</h2>
        <h2 className='text-rose-500'>Baipoo /Checking Out Code -goto- Checking In Code./</h2>
        <div >
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
  )
}

export default Home