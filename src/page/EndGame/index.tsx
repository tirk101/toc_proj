import React from 'react'

import { ground, background, button } from '../../assets/endgame/index'

const index = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
            <div className='absolute title text-center z-10 top-0 leading-[120px] md:leading-[160px] lg:leading-[200px] text-[#A4C263] text-[90px] lg:text-[200px] md:text-[150px] font-bold mt-[80px]'>
                TRY<br/>AGAIN
            </div>
            <div className='absolute z-10  w-full mt-[200px]'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <p className='absolute z-10 text-[60px] md:text-[85px] text-[#90625D] flex justify-center'>YES</p>
                        <img src={button} alt="" className='md:w-[370px] w-[270px]'  />
                    </div>
                    <a href="/" className=' w-fit mx-auto'>
                        <div className='flex justify-center z-20'>
                            <p className=' absolute z-10 text-[60px] md:text-[85px] text-[#90625D] '>MENU</p>
                            <img src={button} alt="" className='md:w-[370px] w-[270px]' />
                        </div>
                    </a>
                </div>

            </div>

            <div className='absolute bottom-0 z-0'>
                <img src={ground} alt="ground" className='w-screen' />
            </div>
        </div>
    )
}

export default index
