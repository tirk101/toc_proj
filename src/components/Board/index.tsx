import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import Droppable from './Block/index';
import {board,tileHolder} from '../../assets/home';
import Tile from '../Tile/Path/index';
import Playertile from '../Tile/Player';

export const Board =({dataObject,boardData,setFocusTile,player}) =>{

  return (
    <div className=' relative'>
      <div className='absolute  w-full h-full '>
          <div className='flex justify-between h-full flex-col '>
            <div className='flex justify-center items-center'> 
            <div className='flex items-center justify-center flex-wrap gap-10'>
              <div className='grid grid-cols-9 mt-[50px]'>
                {boardData.map((boardItem ,index) => (
                  <Droppable id={boardItem.id} index={index} tileId={boardItem.tileId} tileType={boardItem.tileType}>
                    {dataObject.map((item) => (
                      item.map((iitem)=> ((iitem.boardId === boardItem.id)? 
                      <Tile id={iitem.id} key={iitem.id} content={iitem.content} type={iitem.tileType}  boardId={iitem.boardId} setFocusTile={setFocusTile}/> : null
                    ))))}
                    {boardItem.id === player[0].boardId ? <Playertile id={'p1'} key={'p1'} content={player[0].content} type={"player"}  boardId={player[0].boardId} setFocusTile={setFocusTile}/> : null}
                  </Droppable>
                ))}
                </div>
            </div>
            </div>
            <div className='flex justify-between mx-32 mb-10'> 
              <div className='relative'>
                <div className='absolute left-[0.7rem]'>
                  {player[0].boardId == 'null' ? <Playertile id={'p1'} key={'p1'} content={player[0].content} type={"player"}  boardId={player[0].boardId} setFocusTile={setFocusTile}/> : null}
                </div>
                <img src={tileHolder} className='w-[6rem] draggable={false} '/>
              </div>
              <div className='relative'>
                <div className='absolute'>
                  <Tile id={'f1'} key={'f1'} content={'up'} type={"deadend"}  boardId={'null'} setFocusTile={setFocusTile}/>
                </div>
                <img src={tileHolder} className='w-[6rem] draggable={false} '/>
              </div>
            </div>
          </div>
      </div>
      <img src={board} className='w-[65rem] pointer-events-auto' draggable={false}/>
      </div>
);
};
export default Board