import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import { sprite } from '../../../assets/test'

const Flower = () => {
  return (
    <SpriteAnimator
      sprite={sprite}
      width={172}
      height={124}
      frameCount={16}
      wrapAfter={1}
      fps={4}
      direction={'horizontal'}
    />
  )
}

export default Flower