import { useState } from 'react'
import React from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
      <div className=' flex flex-col justify-center items-center font-bold'>
        <h1>Home page</h1>
        <div >
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
  )
}

export default Home