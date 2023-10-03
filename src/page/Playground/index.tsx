import React, { useState } from 'react'

import {background, boardLeft,boardRight,board,restartButton,tutorialButton,startButton} from '../../assets/home'

import {DndContext} from '@dnd-kit/core';

import Board  from '../../components/Board/index'
import Tileholder from '../../components/Tileholder';
import Sizechanger from '../../components/Sizechanger';
import Tile from '../../components/Tile';
import {StraightTile,LeftCorner,RightCorner,Deadend,Tway,Oneway} from '../../components/types'

const defaultStraight: StraightTile[] = [
  {
      id: 's1',
      boardId: 'null',
      content: "พ่อง;"
  }, 
]

const defaultLeftCorner: LeftCorner[] = [
  {
      id: 'l1',
      boardId: 'null',
      content: "พ่อง;"
  }, 
]

const defaultRightCorder: RightCorner[] = [
  {
      id: 'r1',
      boardId: 'null',
      content: "พ่อง;"
  }, 
]

const defaultDeadend: Deadend[] = [
  {
      id: 'd1',
      boardId: 'null',
      content: "พ่อง;"
  }, 
]

const defaultTway: Tway[] = [
  {
      id: 't1',
      boardId: 'null',
      content: "พ่อง;"
  }, 
]

const defaultOneway: Oneway[] = [
  {
      id: 'o1',
      boardId: 'null',
      content: "พ่อง;"
  }, 

]


const index = () => {
  //Data Section
  const [straight, setStraight] = useState<StraightTile[]>(defaultStraight);
  const [leftCorner, setLeftCorner] = useState<LeftCorner[]>(defaultLeftCorner);
  const [rightCorner, setRightCorner] = useState<RightCorner[]>(defaultRightCorder);
  const [deadend, setDeadend] = useState<Deadend[]>(defaultDeadend);
  const [tway, setTway] = useState<Tway[]>(defaultTway);
  const [oneway, setOneway] = useState<Oneway[]>(defaultOneway);
  const dataObject = {straight: straight, leftCorner: leftCorner, rightCorner: rightCorner, deadend: deadend, tway: tway, oneway: oneway}  

  

const  handleDragEnd = (event) => {
    const {over, active} = event;

    const activeIndex = straight.findIndex((item) => item.id === active.id)

    straight[activeIndex].boardId = over?.id || 'null';
    setStraight([...straight]);

    const hasANullBoardId = straight.some((item) => item.boardId === 'null');

    if(!hasANullBoardId)
    {
      handleIncreaseTile(active);
    }
    
  }

const handleIncreaseTile = (active) => {
  const tileTypeMap = {
    straight: { state: straight, setState: setStraight },
    leftCorner: { state: leftCorner, setState: setLeftCorner },
    rightCorner: { state: rightCorner, setState: setRightCorner },
    deadend: { state: deadend, setState: setDeadend },
    tway: { state: tway, setState: setTway },
    oneway: { state: oneway, setState: setOneway },
  };

  const { type } = active.data.current;
  const { state, setState } = tileTypeMap[type];

  const newTile = {
    id: `${type.charAt(0)}${state.length + 1}`,
    boardId: 'null',
    content: "พ่อง",
  };

  setState([...state, newTile]);
}

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
          <Tileholder dataObject={dataObject} />
          <Board dataObject={dataObject}/>
          <Sizechanger/>
          <div className=' absolute flex bottom-1 w-[30rem] justify-center items-center'>
            <img src={tutorialButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px]  [clip-path:circle(40%_at_50%_50%)]' draggable={false} />
            <img src={startButton} className='w-[12rem] pointer-events-auto hover:translate-y-[-3px] duration-100   active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(38%_at_50%_50%)]' draggable={false}/>
            <img src={restartButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(40%_at_50%_50%)]' draggable={false}/>
          </div>

      </div>
      <button onClick={handleIncreaseTile}>เพิ่มTile</button>
      </DndContext>

  )
}
export default index