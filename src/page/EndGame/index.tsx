import React from 'react'
import "./index.css"

import { ground, background, button } from '../../assets/endgame/index'

const index = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
            <div className='absolute z-10 top-0 text-[200px]  leading-normal mt-[80px]'>
                <div className='title text-center font-bold leading-[200px] text-[#A4C263]'>TRY</div>
                <div className='title text-center font-bold leading-[200px] text-[#A4C263]'>AGAIN</div>
            </div>
            <div className='absolute z-10  w-full mt-[200px]'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <p className='absolute z-10 text-[85px] text-[#90625D] flex justify-center'>YES</p>
                        <img src={button} alt="" className='' width={400} />
                    </div>
                    <a href="/" className=' w-fit mx-auto'>
                        <div className='flex justify-center z-20'>
                            <p className=' absolute z-10 text-[85px] text-[#90625D] '>MENU</p>
                            <img src={button} alt="" className='z-0' width={400} />
                        </div>
                    </a>
                </div>

            </div>

            <div className='absolute bottom-0 z-0'>
                <img src={ground} alt="ground" className='' />
            </div>
        </div>
    )
}

export default index
