import React from 'react';
import {useDroppable} from '@dnd-kit/core';

const Droppable = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    backgroundColor: (props.id.charCodeAt(0) % 2 === 0)
      ? (props.index % 2 === 0) ? 'rgb(0, 0, 0,0.3)' : 'rgb(255, 255, 255,0.3)'
      : (props.index % 2 !== 0) ? 'rgb(255, 255, 255,0.3)' : 'rgb(0, 0, 0,0.3)'
  };


  return (
    <div ref={setNodeRef} style={style} className='w-[4.5rem]   h-[4.5rem]'>
      {props.children} 
    </div>
  );
}
export default Droppable
