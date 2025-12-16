"use client";

import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useRef } from "react";

const shots = [
  {
    position: [0, 1.6, -2],
    target: [1, 1.4, 0],
  },
  {
    position: [3.2, 1.5, 2.2],
    target: [2.2, 1.3, 0],
  },
  {
    position: [-1.8, 1.7, -1.2],
    target: [0, 1.6, 0],
  },
];

export default function CameraRig({ activeShot }) {
  const { camera } = useThree();
  const lookAtRef = useRef(new Vector3());

  useFrame(() => {
    const shot = shots[activeShot];

    camera.position.lerp(new Vector3(...shot.position), 0.08);

    lookAtRef.current.lerp(new Vector3(...shot.target), 0.08);

    camera.lookAt(lookAtRef.current);
  });

  return null;
}
