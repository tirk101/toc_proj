import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import {playerDownIdle} from '../../../assets/test'

const Character = () => {
  return (
    <SpriteAnimator
      sprite={playerDownIdle}
      width={172}
      height={124}
      frameCount={16}
      wrapAfter={1}
      fps={4}
      direction={'horizontal'}
    />
  )
}

export default Character