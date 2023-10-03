import React from 'react'
import { boardLeft } from '../../assets/home'
import { tileHolder } from '../../assets/home';
import Tile from '../Tile/index';

const Tileholder = ({parent, tile}) => {
  return (
    <div className=' relative z-10 '>
            <div className='absolute  w-full h-full flex flex-col '>
                <div  className='flex flex-col  justify-center mx-[7rem] gap-5 mt-20 '>
                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {parent[0].vid === null ? tile[0]: null}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {parent[1].vid === null ? tile[1]: null}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {parent[2].vid === null ? tile[2]: null}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {parent[3].vid === null ? tile[3]: null}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {parent[4].vid === null ? tile[4]: null}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {parent[5].vid === null ? tile[5]: null}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                </div>
            </div>
            <img src={boardLeft} className='w-[20rem] pointer-events-auto ' draggable={false}/>
    </div>
  )
}

export default Tileholder