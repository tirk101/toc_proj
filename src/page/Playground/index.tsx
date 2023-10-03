import React, { useState } from 'react'

import {background, boardLeft,boardRight,board,restartButton,tutorialButton,startButton} from '../../assets/home'

import {DndContext} from '@dnd-kit/core';

import Board  from '../../components/Board/index'
import Tileholder from '../../components/Tileholder';
import Sizechanger from '../../components/Sizechanger';
import Tile from '../../components/Tile';

const index = () => {
  const [parent, setParent] = useState([{id:'draggable1',vid:null},{id:'draggable2',vid:null},{id:'draggable3',vid:null},{id:'draggable4',vid:null},{id:'draggable5',vid:null},{id:'draggable6',vid:null}]);
  
  function handleDragEnd(event) {
    const {active, over} = event;
    const activeIndex = parent.findIndex((item) => item.id === active.id);
    if (over === null)
    {
        parent[activeIndex].vid = null;
        const updatedParent = [...parent];
        setParent(updatedParent);
    }
    else
    {
      
      const overIndex = parent.findIndex((item) => item.vid === over.id);
      if(parent[overIndex] && (parent[overIndex] !== parent[activeIndex]))
      {

      }
      else
      {
        parent[activeIndex].vid = over.id;
        const updatedParent = [...parent];
        setParent(updatedParent);
      }
    }
    
  }

  const tile = [
    <Tile id="draggable1">S</Tile>,
    <Tile id="draggable2">R</Tile>,
    <Tile id="draggable3">L</Tile>,
    <Tile id="draggable4">T</Tile>,
    <Tile id="draggable5">D</Tile>,
    <Tile id="draggable6">OS</Tile>
];

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
          <Tileholder parent={parent} tile={tile}/>
          <Board parent={parent} tile={tile}/>
          <Sizechanger/>
          <div className=' absolute flex bottom-1 w-[30rem] justify-center items-center'>
            <img src={tutorialButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px]  [clip-path:circle(40%_at_50%_50%)]' draggable={false} />
            <img src={startButton} className='w-[12rem] pointer-events-auto hover:translate-y-[-3px] duration-100   active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(38%_at_50%_50%)]' draggable={false}/>
            <img src={restartButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(40%_at_50%_50%)]' draggable={false}/>
          </div>
      </div>
      </DndContext>
  )
}
export default index