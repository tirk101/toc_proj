import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import Droppable from './Block/index';
import {board,tileHolder} from '../../assets/home';
import Tile from '../Tile/Path/index';
import Playertile from '../Tile/Player';
import Finishline from '../Tile/Finishline';

export const Board =({dataObject,boardData,setFocusTile,player, finishline, defaultTile}) =>{

  return (
    <div className=' relative'>
      <div className='absolute  w-full h-full '>
          <div className='flex justify-between h-full flex-col '>
            <div className='flex justify-center items-center'> 
            <div className='flex items-center justify-center flex-wrap gap-10'>
              <div className='grid grid-cols-9 mt-[50px]'>
                
                  {boardData.map((boardItem ,index) => (
                    <Droppable id={boardItem.id} index={index} tileId={boardItem.tileId} tileType={boardItem.tileType}>
                      <div className='relative'>
                      {dataObject.map((item) => (
                        item.map((iitem)=> ((iitem.boardId === boardItem.id)? 
                        <Tile id={iitem.id} key={iitem.id} content={iitem.content} type={iitem.tileType}  boardId={iitem.boardId} setFocusTile={setFocusTile}/> : null
                      ))))}
                      {defaultTile.map((item) => ((item.boardId === boardItem.id)? <Tile id={item.id} key={item.id} content={item.content} type={item.tileType}  boardId={item.boardId} setFocusTile={setFocusTile}/> : null))}
                      <div className='absolute top-0'>
                        {player.map((item) => ((item.boardId === boardItem.id)? <Playertile id={item.id} key={item.id} content={item.content} type={"player"}  boardId={item.boardId} setFocusTile={setFocusTile}/> : null))}
                        {boardItem.id === finishline[0].boardId  ? <Finishline id={'f1'} key={'f1'} content={finishline[0].content} type={"finishline"}  boardId={finishline[0].boardId} setFocusTile={setFocusTile}/> : null}
                      </div>
                      </div>
                    </Droppable>
                  ))}
                </div>
            </div>
            </div>
            <div className='flex justify-between mx-32 mb-10'> 
              <div className='relative'>
                <div className='absolute left-[0.7rem]'>
                  {player.map((item) => ((item.boardId === 'null')?<Playertile id={item.id} key={item.id} content={item.content} type={"player"}  boardId={item.boardId} setFocusTile={setFocusTile}/>: null ))}
                </div>
                <img src={tileHolder} className='w-[6rem] draggable={false} '/>
              </div>
              <div className='relative'>
                <div className='absolute left-[0.7rem]'>
                  {finishline[0].boardId == 'null' ? <Finishline id={'f1'} key={'f1'} content={'up'} type={"finishline"}  boardId={finishline[0].boardId} setFocusTile={setFocusTile}/> : null}
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