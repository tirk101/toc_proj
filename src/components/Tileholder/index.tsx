import React from 'react'
import { boardLeft } from '../../assets/home'
import { tileHolder } from '../../assets/home';
import Tile from '../Tile/index';


const Tileholder = ({dataObject}) => {

    

  return (
    <div className=' relative z-10 '>
            <div className='absolute  w-full h-full flex flex-col '>
                <div  className='flex flex-col  justify-center mx-[7rem] gap-5 mt-20 '>
                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {dataObject.straight.map((item) => ((item.boardId === 'null')?
                                <Tile id={item.id} key={item.id} content={item.content} type={"straight"}  boardId={item.boardId}/> : null
                            ))}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {dataObject.leftCorner.map((item) => (
                                <Tile id={item.id} key={item.id} content={item.content} type={"leftCorner"}  boardId={item.boardId}/>
                            ))}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {dataObject.rightCorner.map((item) => (
                                <Tile id={item.id} key={item.id} content={item.content} type={"rightCorner"}  boardId={item.boardId}/>
                            ))}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {dataObject.deadend.map((item) => (
                                <Tile id={item.id} key={item.id} content={item.content} type={"deadend"}  boardId={item.boardId}/>
                            ))}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {dataObject.oneway.map((item) => (
                                <Tile id={item.id} key={item.id} content={item.content} type={"oneway"}  boardId={item.boardId}/>
                            ))}
                        </div>
                        <img src={tileHolder} className='w-[4.5rem] h-[4.5rem]' draggable={false}/>
                    </div>

                    <div className='relative'>
                        <div className=' absolute w-full h-full flex'>
                            {dataObject.tway.map((item) => (
                                <Tile id={item.id} key={item.id} content={item.content} type={"tway"}  boardId={item.boardId}/>
                            ))}
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