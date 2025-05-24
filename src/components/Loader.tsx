import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const { progress } = useProgress()
  return (
    <Html center className='text-center text-2xl font-normal'>
       {progress}% Loaded
    </Html>
  )
}

export default Loader