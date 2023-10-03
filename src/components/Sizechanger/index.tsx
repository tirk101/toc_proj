import React from 'react'
import { boardRight } from '../../assets/home'

const Sizechanger = () => {
  return (
    <div className=' relative'>
            <div className='absolute  w-full h-full'>
            </div>
            <img src={boardRight} className='w-[20rem] pointer-events-auto ' draggable={false}/>
    </div>
  )
}

export default Sizechanger