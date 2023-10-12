import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import { sprite , playerDownIdle} from '../../../assets/test'

const Flower = () => {
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

export default Flower