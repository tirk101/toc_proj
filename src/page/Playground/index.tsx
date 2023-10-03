import React, { useState } from 'react'

import {background, boardLeft,boardRight,board,restartButton,tutorialButton,startButton} from '../../assets/home'

import {DndContext} from '@dnd-kit/core';

import Board  from '../../components/Board/index'
import Tileholder from '../../components/Tileholder';
import Sizechanger from '../../components/Sizechanger';
import Tile from '../../components/Tile';

import {StraightTile,LeftCorner,RightCorner,Deadend,Tway,Oneway} from '../../components/types'
import defaultBoard9x9 from '../../components/Board/defaultBoard';

const defaultStraight: StraightTile[] = [
  {
      id: 's1',
      boardId: 'null',
      content: "พ่อง;",
      tileType: 'straight'
  }, 
]

const defaultLeftCorner: LeftCorner[] = [
  {
      id: 'l1',
      boardId: 'null',
      content: "พ่อง;",
      tileType: 'leftCorner',
  }, 
]

const defaultRightCorder: RightCorner[] = [
  {
      id: 'r1',
      boardId: 'null',
      content: "พ่อง;",
      tileType: 'rightCorner',
  }, 
]

const defaultDeadend: Deadend[] = [
  {
      id: 'd1',
      boardId: 'null',
      content: "พ่อง;",
      tileType: 'deadend',
  }, 
]

const defaultTway: Tway[] = [
  {
      id: 't1',
      boardId: 'null',
      content: "พ่อง;",
      tileType: 'tway',
  }, 
]

const defaultOneway: Oneway[] = [
  {
      id: 'o1',
      boardId: 'null',
      content: "พ่อง;",
      tileType: 'oneway',
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
  const [boardData, setBoardData] = useState(defaultBoard9x9);
  const dataObject = {straight: straight, leftCorner: leftCorner, rightCorner: rightCorner, deadend: deadend, tway: tway, oneway: oneway}  

  const dataArray = [straight, leftCorner, rightCorner, deadend, tway,  oneway]

  

const handleDragEnd = (event) => {
    const { over, active } = event;
    const typesMap = {
      straight: [straight, setStraight],
      leftCorner: [leftCorner, setLeftCorner],
      rightCorner: [rightCorner, setRightCorner],
      deadend: [deadend, setDeadend],
      tway: [tway, setTway],
      oneway: [oneway, setOneway],
    };
      const currentTileData = boardData.find((item) => item.id === over?.id);
      const previousTileData = boardData.find((item) => item.id === active.data.current.boardId);
      if(currentTileData)
      {
        currentTileData.tileId = active.id;
        currentTileData.tileType = active.data.current.type;
      }
      if(previousTileData)
      {
        previousTileData.tileId = 'null';
        previousTileData.tileType = 'null';
      }
    if(over)
    {
      if(over.data.current.tileId === 'null')
      {
        const [activeArray, setActiveArray] = typesMap[active.data.current.type];
        const activeIndex = activeArray.findIndex((item) => item.id === active.id);
        activeArray[activeIndex].boardId = over?.id || 'null';
        setActiveArray([...activeArray]);
        handleIncreaseTile(active);
      }
    }
    else
    {
        const [activeArray, setActiveArray] = typesMap[active.data.current.type];
        if(activeArray.length === 1) return;
        const newData = activeArray.filter((item) => item.id !== active.id);
        setActiveArray([...newData]);
    }
  };




const handleIncreaseTile = (active) => {
  if (active.data.current.boardId !== 'null') return;
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
  const id = (state[state.length-1].id)
  const matches = parseInt(id.match(/\d+/g)[0])
  const newTile = {
    id: `${type.charAt(0)}${matches + 1}`,
    boardId: 'null',
    content: "พ่อง",
    tileType: type
  };
  setState([...state, newTile]);
}

const handleReset=()=>{
  setStraight(defaultStraight);
  setLeftCorner(defaultLeftCorner);
  setRightCorner(defaultRightCorder);
  setDeadend(defaultDeadend);
  setTway(defaultTway);
  setOneway(defaultOneway);
  setBoardData(defaultBoard9x9);
}

  return (
    <DndContext onDragEnd={handleDragEnd} >
      <div style={{ backgroundImage: `url(${background})` }} className='w-full h-[100vh] flex justify-center items-center gap-[5rem] overflow-hidden animate-moving-background' >
          <Tileholder dataObject={dataObject} />
          <Board dataObject={dataArray} boardData={boardData}/>
          <Sizechanger/>
          <div className=' absolute flex bottom-1 w-[30rem] justify-center items-center'>
            <img src={tutorialButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px]  [clip-path:circle(40%_at_50%_50%)]' draggable={false} />
            <img src={startButton} className='w-[12rem] pointer-events-auto hover:translate-y-[-3px] duration-100   active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(38%_at_50%_50%)]' draggable={false}/>
            <img src={restartButton} className='w-[8rem] pointer-events-auto hover:translate-y-[-3px] duration-100 active:opacity-70 active:hover:translate-y-[3px] [clip-path:circle(40%_at_50%_50%)]' draggable={false} />
          </div>

      </div>
      </DndContext>

  )
}
export default index