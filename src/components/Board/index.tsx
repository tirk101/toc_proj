import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import Droppable from './Block/index';
import {board} from '../../assets/home';

const Board =({parent, tile}) =>{
  const containers9x9 = ['a1', 'a2', 'a3','a4',"a5","a6","a7","a8","a9","b1","b2","b3","b4","b5","b6","b7","b8","b9","c1","c2","c3","c4","c5","c6","c7","c8","c9","d1","d2","d3","d4","d5","d6","d7","d8","d9","e1","e2","e3","e4","e5","e6","e7","e8","e9","f1","f2","f3","f4","f5","f6","f7","f8","f9","g1","g2","g3","g4","g5","g6","g7","g8","g9","h1","h2","h3","h4","h5","h6","h7","h8","h9","i1","i2","i3","i4","i5","i6","i7","i8","i9"];
  
  return (
    <div className=' relative'>
      <div className='absolute  w-full h-full '>
          <div className='flex justify-between items-center h-full flex-col '>
            <div className='flex justify-center items-center'> 
            <div className='flex items-center justify-center flex-wrap gap-10'>
              <div className='grid grid-cols-9 mt-[50px]'>
                {containers9x9.map((id,index) => (
                  <Droppable key={id} id={id} index={index}>
                    {parent[0].vid === id ? tile[0]: null}
                    {parent[1].vid === id ? tile[1]: null}
                    {parent[2].vid === id ? tile[2]: null}
                    {parent[3].vid === id ? tile[3]: null}
                    {parent[4].vid === id ? tile[4]: null}
                    {parent[5].vid === id ? tile[5]: null}
                  </Droppable>
                ))}
                </div>
            </div>
            </div>
          </div>
      </div>
      <img src={board} className='w-[65rem] pointer-events-auto' draggable={false}/>
      </div>
);
};
export default Board