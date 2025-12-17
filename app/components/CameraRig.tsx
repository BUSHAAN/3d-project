"use client"

import { useThree, useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useRef, useEffect } from "react"

type CameraRigProps = {
  activeShot: number
}

const shots: { position: [number, number, number]; target: [number, number, number] }[] = [
  { position: [0, 1.6, -2], target: [1, 1.4, 0] },
  { position: [3.2, 1.5, 2.2], target: [2.2, 1.3, 0] },
  { position: [-1.8, 1.7, -1.2], target: [0, 1.6, 0] }
]

export default function CameraRig({ activeShot }: CameraRigProps) {
  const { camera } = useThree()

  const currentPos = useRef(new Vector3())
  const currentTarget = useRef(new Vector3())

  const desiredPos = useRef(new Vector3())
  const desiredTarget = useRef(new Vector3())

  useEffect(() => {
    desiredPos.current.set(...shots[activeShot].position)
    desiredTarget.current.set(...shots[activeShot].target)
  }, [activeShot])

  useFrame(() => {
    currentPos.current.lerp(desiredPos.current, 0.06)
    currentTarget.current.lerp(desiredTarget.current, 0.06)

    camera.position.copy(currentPos.current)
    camera.lookAt(currentTarget.current)
  })

  return null
}
