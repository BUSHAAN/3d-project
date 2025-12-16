"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function FitnessModel() {
  const { scene, animations } = useGLTF("/models/lunaSnow2.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions?.Idle?.play();
  }, []);

  return <primitive object={scene} scale={1.2} position={[0, 0, 0]} />;
}
