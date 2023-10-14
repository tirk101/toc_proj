import React ,{useEffect} from 'react';
import {useDroppable} from '@dnd-kit/core';

const Droppable = (props) => {
  const {isOver, setNodeRef,active ,} = useDroppable({
    id: props.id,
    data:
    {
      tileId: props.tileId,
      tileType: props.tileType,
    }
  });
  let type = '';

  if (active && active.data && active.data.current) {
    type = active.data.current.type;
  }



  const style = {
    backgroundColor: !isOver? ((props.id.charCodeAt(0) % 2 === 0)
      ? (props.index % 2 === 0) ? 'rgb(0, 0, 0,0.25)' : 'rgb(0, 0, 0,0.2)'
      : (props.index % 2 !== 0) ? 'rgb(0, 0, 0,0.2)' : 'rgb(0, 0, 0,0.25)'): 
      props.tileId === 'null' ? 'rgb(0,255,0,0.1)' : 'rgb(255,0,0,0.5)',
  };


  return (
    <div ref={setNodeRef} style={style} className='md:w-[4.5rem]  md:h-[4.5rem]'>
      {props.children} 
    </div>
  );
}
export default Droppable
