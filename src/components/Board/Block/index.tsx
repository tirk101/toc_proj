import React from 'react';
import {useDroppable} from '@dnd-kit/core';

const Droppable = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data:
    {
      tileId: props.tileId,
      tileType: props.tileType,
    }
  });
  const style = {
    color: isOver ? 'green' : undefined,
    backgroundColor: (props.id.charCodeAt(0) % 2 === 0)
      ? (props.index % 2 === 0) ? 'rgb(0, 0, 0,0.2.5)' : 'rgb(0, 0, 0,0.2)'
      : (props.index % 2 !== 0) ? 'rgb(0, 0, 0,0.2)' : 'rgb(0, 0, 0,0.25)'
  };


  return (
    <div ref={setNodeRef} style={style} className='w-[4.5rem]   h-[4.5rem]'>
      {props.children} 
    </div>
  );
}
export default Droppable
