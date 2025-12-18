"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function FitnessModel() {
  const { scene, animations } = useGLTF("/models/lunaSnow2.glb");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    actions?.idle?.play(); //check the animation name in the console log first
  }, []);

  return <primitive object={scene} scale={1.2} position={[0, 0, 0]} />;
}
