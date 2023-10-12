import { useState } from 'react'
import React from 'react'
import { background, island, button, buttonM, sprite, chicken1, chicken2 } from "../../assets/home"
import Flower from "../../components/Sprite/Flower"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background relative' >
      <div className="absolute z-10 top-[3.5rem] left-[4rem] leading-[10rem] drop-shadow-2xl" >
        <div className='text-4xl text-[#6A8139] font-outline-2 '>WHEEL</div>
        <div className='text-[11.6rem] text-[#A4C263] font-outline-4 tracking-tight'>ROBOT</div>
        <div className='text-[5rem] text-[#A4C263] font-outline-4 leading-[8rem] tracking-widest'>SIMULATION</div>
        <div className='text-4xl text-[#6A8139] font-outline-2  leading-[2rem] '>WITH CUSTOMIZABLE PATHING</div>
      </div>
      <div className='absolute z-0'>
        <img src={island} className='w-screen pr-[100px] ' />
      </div>
      <div className='absolute z-10 top-[40rem] left-[5.5rem]'>
        <div className=' hover:scale-110 ml-1'>
          <img src={buttonM} className='w-[30rem] pr-[90px]' />
          <p className='w-[34rem] pr-[140px] pt-[1.5rem] mt-[-9rem] text-center text-7xl text-[#90625D]' >PLAY</p>
        </div>
        <div className='flex '>
          <div className='hover:scale-110'>
            <img src={button} className='w-[12.3rem] mt-[2.5rem]' />
            <p className='ml-[2.6rem] text-4xl mt-[-5.5rem] text-[#461E19]'>EXIT</p>
          </div>
          <div className='hover:scale-110'>
            <img src={button} className='w-[12.3rem] mt-[2.5rem]' />
            <p className='ml-[3.5rem] text-4xl mt-[-5.5rem] text-[#461E19]'>HOW</p>
          </div>
        </div>
      </div>
      <div className='absolute z-10 top-[20rem] right-[27.5rem]'>
        <Flower/>
        </div>
        <div className='absolute z-10 top-[43.5rem] right-[52.6rem] animate-bounce w-[5rem]'>
          <img src={chicken1} />
        </div>
        <div className='absolute z-10 top-[40rem] left-[34rem] animate-bounce w-[5rem]'>
          <img src={chicken2} />
        </div>
    </div>
  
  )
}

export default Home