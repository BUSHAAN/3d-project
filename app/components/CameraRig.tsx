"use client"

import { useThree, useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useRef, useEffect } from "react"

type CameraRigProps = {
  activeShot: number
}

type Shot = {
  position: [number, number, number]
  target: [number, number, number]
}

const desktopShots: Shot[] = [
  {
    position: [0, 1.6, -2],
    target: [1, 1.4, 0],
  },
  {
    position: [2.0, 1.5, -3],
    target: [-3, 1.0, 0],
  },
  {
    position: [-1.0, 1.7, -1.2],
    target: [-0.15, 1.6, 0],
  },
]


const mobileShots: Shot[] = [
  {
    position: [0, 1.6, -3],
    target: [0, 1.4, 0],
  },
  {
    position: [2.0, 1.5, -4],
    target: [-1, 1.0, 0],
  },
  {
    position: [-1.2, 1.7, -2.6],
    target: [0, 1.6, 0],
  },
]



export default function CameraRig({ activeShot }:CameraRigProps) {
  const { camera, size } = useThree()

  const currentPos = useRef(new Vector3())
  const currentTarget = useRef(new Vector3())
  const desiredPos = useRef(new Vector3())
  const desiredTarget = useRef(new Vector3())


  useEffect(() => {
    const isMobile = size.width < 768
    const shots = isMobile ? mobileShots : desktopShots
    const shot = shots[activeShot]

    desiredPos.current.set(...shot.position)
    desiredTarget.current.set(...shot.target)
  }, [activeShot, size.width])

  useFrame(() => {
    currentPos.current.lerp(desiredPos.current, 0.06)
    currentTarget.current.lerp(desiredTarget.current, 0.06)

    camera.position.copy(currentPos.current)
    camera.lookAt(currentTarget.current)
  })

  return null
}
