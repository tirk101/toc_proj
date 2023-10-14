import React , {useEffect} from 'react';
import {useDraggable} from '@dnd-kit/core';

import { SpriteAnimator } from 'react-sprite-animator'


const Playertile =(props) =>{
  const spirteData = [{id:'down',src:props.playerImage.down},{id:'up',src:props.playerImage.up},{id:'left',src:props.playerImage.left},{id:'right',src:props.playerImage.right}]
  const spriteIdle = [{id:'down',src:props.playerIdle.down},{id:'up',src:props.playerIdle.up},{id:'left',src:props.playerIdle.left},{id:'right',src:props.playerIdle.right}]
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