import React from 'react';
import {useDraggable} from '@dnd-kit/core';

import { character,deadEnd,straight,leftCorner,oneWay,rightCorner,tWay } from '../../assets/playground';

const Tile =(props) =>{
  const imgData = [{id:'character',src:character},{id:'deadend',src:deadEnd},{id:'straight',src:straight},{id:'leftCorner',src:leftCorner},{id:'oneway',src:oneWay},{id:'rightCorner',src:rightCorner},{id:'tway',src:tWay}]
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    data:
    {
      content: props.content,
      boardId: props.boardId,
      type: props.type,
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='w-[4.5rem]    h-[4.5rem] '>
      <img src={imgData.find((item)=>item.id === props.type).src} alt={props.type} className='w-full h-full'/>
    </button>
  );
}

export default Tile