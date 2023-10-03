import React from 'react'

import { ground, background, button } from '../../assets/endgame/index'

const index = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
            <div className='absolute top-0 text-[200px] pr-[1000px] pl-[1000px] leading-normal mt-[80px]'>
                <p className='text-center leading-[200px] text-white'>TRY AGAIN</p>
            </div>
            <div className='absolute flex-col w-full mt-[200px]'>
                <div className='flex justify-center'>
                    <p className='absolute z-10 text-[85px] text-[#90625D] flex justify-center'>YES</p>
                    <img src={button} alt="" className='' width={400} />
                </div>
                <div className='flex justify-center'>
                    <p className='absolute z-10 text-[85px] text-[#90625D]'>MENU</p>
                    <img src={button} alt="" className='z-0' width={400} />
                </div>
            </div>

            <div className='absolute bottom-0'>
                <img src={ground} alt="ground" />
            </div>
        </div>
    )
}

export default index
