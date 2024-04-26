import { TypeAnimation } from 'react-type-animation';

import React from 'react'

export default function TextAnimation() {
  return (
    <div>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       // wait 1s before replacing "Mice" with "Hamsters"
        'Every where',
        3000,
        'Anytime',
        3000,
        'And Cheaper',
        3000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

    </div>
  )
}
