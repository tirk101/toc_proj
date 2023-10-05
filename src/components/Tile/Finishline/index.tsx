import React , {useEffect} from 'react';
import {useDraggable} from '@dnd-kit/core';

import { finishline  } from '../../../assets/playground';

const Playertile =(props) =>{
  const imgData = [{id:'up',src:finishline},{id:'down',src:finishline},{id:'left',src:finishline},{id:'right',src:finishline}]
  const {attributes, listeners, setNodeRef, transform , isDragging} = useDraggable({
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

  useEffect(() => {
    props.setFocusTile(isDragging)
  }, [isDragging])
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='w-[4.5rem] h-[4.5rem]'>
      <img src={imgData.find((item)=>item.id === props.content)?.src} alt={props.type} className='w-full h-full'/>
    </button>
  );
}

export default Playertile