import React , {useEffect} from 'react';
import {useDraggable} from '@dnd-kit/core';

import { playerFront , playerBack,playerLeft,playerRight   } from '../../../assets/playground';

const Playertile =(props) =>{
  const imgData = [{id:'down',src:playerFront},{id:'up',src:playerBack},{id:'left',src:playerLeft},{id:'right',src:playerRight}]
  const {attributes, listeners, setNodeRef, transform , isDragging} = useDraggable({
    id: props.id,
    data:
    {
      direction: props.direction,
      boardId: props.boardId,
      type: props.type,
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : {transform: `translate3d(${props.position.x}rem, ${props.position.y}rem, 0)`}; 

  useEffect(() => {
    props.setFocusTile(isDragging)
  }, [isDragging])
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className={`w-[4.5rem] h-[4.5rem] z-[20] relative ${!isDragging ? 'transition-transform transform translate-y-[-10px]' : ''}`}>
      <img src={imgData.find((item)=>item.id === props.direction)?.src} alt={props.type} className='w-full h-full'/>
    </button>
  );
}

export default Playertile