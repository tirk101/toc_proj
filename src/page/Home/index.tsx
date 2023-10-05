import { useState } from 'react'
import React from 'react'
import { background, island, button, buttonM, sprite, chicken1, chicken2 } from "../../assets/home"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
      <div className="absolute z-10 top-[5.5rem] left-[4rem] leading-[10rem] mainTitle" >
        <div className='text-4xl text-[#6A8139] subTitle'>WHEEL</div>
        <div className='text-[12.6rem] text-[#A4C263] tracking-tight'>ROBOT</div>
        <div className='text-[6.4rem] text-[#A4C263] submainTitle leading-[8rem]   tracking-tighter'>SIMULATION</div>
        <div className='text-4xl text-[#6A8139] subTitle font-extrabold leading-[2rem] '>WITH CUSTOMIZABLE PATHING</div>
      </div>
      <div className='absolute z-0'>
        <img src={island} className='w-screen pr-[100px] ' />
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
      {/* <div className='relative z-10'> */}
        <div className='absolute z-10 top-[23rem] right-[27.5rem]'>
          <img src={sprite} />
        </div>
        <div className='absolute z-10 top-[48rem] right-[54.5rem]'>
          <img src={chicken1} />
        </div>
        <div className='absolute z-10 top-[46rem] left-[36rem]'>
          <img src={chicken2} />
        </div>
        </div>
  
  )
}

export default Home