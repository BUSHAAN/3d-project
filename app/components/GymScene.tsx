'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CameraRig from './CameraRig'
import FitnessModel from './fitnessmodel'


export default function 
GymScene({ activeShot }: { activeShot: number }) {
  return (
    <Canvas camera={{ position: [0, 1.6, 4], fov: 45 }} className="opacity-50 md:opacity-100">
      <Suspense fallback={null}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <CameraRig activeShot={activeShot} />
        <FitnessModel />
      </Suspense>
    </Canvas>
  )
}
