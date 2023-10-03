import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import Droppable from './Block/index';
import {board} from '../../assets/home';
import Tile from '../Tile/index';

export const Board =({dataObject,boardData}) =>{
  const test =() =>
  {
    console.log(dataObject[0]);
  }

  return (
    <div className=' relative'>
      <div className='absolute  w-full h-full '>
          <div className='flex justify-between items-center h-full flex-col '>
            <div className='flex justify-center items-center'> 
            <div className='flex items-center justify-center flex-wrap gap-10'>
              <div className='grid grid-cols-9 mt-[50px]'>
                {boardData.map((boardItem ,index) => (
                  <Droppable id={boardItem.id} index={index} tileId={boardItem.tileId} tileType={boardItem.tileType}>
                    {dataObject.map((item) => (
                      item.map((iitem)=> ((iitem.boardId === boardItem.id)? 
                      <Tile id={iitem.id} key={iitem.id} content={iitem.content} type={iitem.tileType}  boardId={iitem.boardId}/> : null
                    ))))}
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