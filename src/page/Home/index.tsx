import { useState } from 'react'
import React from 'react'
import { background, island, button, buttonM, sprite, chicken1, chicken2 } from "../../assets/home"
import "./็home.css"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
      <div className="absolute z-10 top-[5rem] left-[3rem] height decoration-">
        <div className='text-4xl text-[#6A8139]'>WHEEL</div>
        <div className='textR text-[#A4C263]'>ROBOT</div>
        <div className='text-8xl text-[#A4C263]'>SIMULATION</div>
        <div className='text-4xl text-[#6A8139]'>WITH CUSTOMIZABLE PATHING</div>
      </div>
      <div className='absolute z-0'>
        <img src={island} className='w-full pr-[100px] ' />
      </div>
      <div className='absolute z-10 top-[46rem] left-[5.5rem]'>
        <img src={buttonM} className='w-[33rem] pr-[100px]' />
        <div className='flex '>
          <img src={button} className='w-[13.5rem]' />
          <img src={button} className='w-[13.5rem]' />
        </div>
      </div>
      <div className='absolute z-10 top-[46rem] left-[5.5rem]'>
        <div className='w-[34rem] pr-[110px] pt-[1.5rem]  text-center text-8xl text-[#90625D]' >PLAY</div>
        <div className='flex mt-[4.9rem]'>
          <div className='ml-[2rem] text-5xl text-[#461E19]'>EXIT</div>
          <div className='ml-[4.6rem] text-5xl text-[#461E19]'>HOW</div>
        </div>
      </div>
      <div className='absolute z-10 top-[22rem] right-[30rem]'>
        <img src={sprite} />
      </div>
      <div className='absolute z-10 top-[46rem] right-[56rem]'>
        <img src={chicken1} />
      </div>
      <div className='absolute z-10 top-[44rem] left-[33rem]'>
        <img src={chicken2} />
      </div>
    </div>
  )
}

export default Home