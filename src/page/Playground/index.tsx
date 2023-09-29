import React, { ReactElement } from 'react'

import {background, boardLeft,boardRight,board,restartButton,tutorialButton,startButton} from '../../assets/home'


const index = () => {
  return (
      <div  style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
          
          <div className=' relative'>
            <div className='absolute  w-full h-full'>
            </div>
            <img src={boardLeft} className='w-[20rem] pointer-events-auto ' draggable={false}/>
          </div>
          <div className=' relative'>
            <div className='absolute  w-full h-full '>
                <div className='flex justify-center items-end h-full'>
                  <div className='flex justify-center items-center'> 
                    <img src={tutorialButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px]  [clip-path:circle(40%_at_50%_50%)]' draggable={false} />
                    <img src={startButton} className='w-[12rem] pointer-events-auto hover:translate-y-[-3px] duration-100   active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(38%_at_50%_50%)]' draggable={false}/>
                    <img src={restartButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(40%_at_50%_50%)]' draggable={false}/>
                  </div>
                </div>
            </div>
            <img src={board} className='w-[65rem] pointer-events-auto' draggable={false}/>
          </div>
          <div className=' relative'>
            <div className='absolute  w-full h-full'>
            </div>
            <img src={boardRight} className='w-[20rem] pointer-events-auto ' draggable={false}/>
          </div>
      </div>
  )
}
export default index