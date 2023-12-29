import { Image } from 'react-native'
import React from 'react'

export default function RenderPokeBall() {
  return (
    <Image
source={require('../assets/pokeball.png')}
style={{width: 75, height: 75, top: -15}}
/>
  )
}


