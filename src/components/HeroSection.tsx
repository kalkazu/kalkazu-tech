"use client";
import React, { Suspense } from 'react'
import HeroText from './HeroText'
import ParallaxBackground from './ParallaxBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from './Astronaut'
import { easing } from "maath"
import { Float, Loader, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';


const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <div className='flex items-start justify-center md:items-center md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText />
        <ParallaxBackground />
        <figure 
         className='absolute inset-0'
         style={{ width: "100vw", height: "100vh"}}
        >
         <Canvas shadows camera={{ position: [0, 1, 3] }}>
           <Suspense fallback={<Loader />}>
              <Float>
                <OrbitControls />
                <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]} />
              </Float>
              <Rig />
           </Suspense>
         </Canvas>
        </figure>
    </div>
  )
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5, delta);
  });
}

export default HeroSection