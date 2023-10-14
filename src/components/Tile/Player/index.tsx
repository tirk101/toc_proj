import React , {useEffect} from 'react';
import {useDraggable} from '@dnd-kit/core';

import { SpriteAnimator } from 'react-sprite-animator'
import { playerFront , playerBack,playerLeft,playerRight   } from '../../../assets/playground';
import {playerDownMove,playerLeftMove,playerUpMove,playerRightMove , playerDownIdle,playerLeftIdle,playerRightIdle,playerUpIdle} from '../../../assets/test'

const Playertile =(props) =>{
  const imgData = [{id:'down',src:playerFront},{id:'up',src:playerBack},{id:'left',src:playerLeft},{id:'right',src:playerRight}]
  const spirteData = [{id:'down',src:playerDownMove},{id:'up',src:playerUpMove},{id:'left',src:playerLeftMove},{id:'right',src:playerRightMove}]
  const spriteIdle = [{id:'down',src:playerDownIdle},{id:'up',src:playerUpIdle},{id:'left',src:playerLeftIdle},{id:'right',src:playerRightIdle}]
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
  //<img src={imgData.find((item)=>item.id === props.direction)?.src} alt={props.type} className='w-full h-full'/>
  return (

    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className={`w-[4.5rem] h-[4.5rem] z-[20] object-contain relative ${!isDragging ? 'transition-transform transform translate-y-[-10px]' : ''}`}>
    <SpriteAnimator
      sprite={!props.isMove ? spriteIdle.find((item)=>item.id === props.direction)?.src:spirteData.find((item)=>item.id === props.direction)?.src}
      width={172}
      height={124}
      frameCount={16}
      wrapAfter={1}
      fps={4}
      scale={1.5}
      direction={'horizontal'}
      className='absolute top-[-0.5rem] left-[-1.25rem]'
    />
    </button>
  );
}

export default Playertile