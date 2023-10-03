import React from 'react';
import {useDraggable} from '@dnd-kit/core';

const Tile =(props) =>{
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='w-[4.5rem] border-[1px] border-black  h-[4.5rem]  '>
      {props.children}
    </button>
  );
}

export default Tile