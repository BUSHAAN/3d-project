"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CameraRig from "./CameraRig";
import FitnessModel from "./fitnessmodel";

export default function GymScene({ activeShot }: { activeShot: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <Canvas camera={{ position: [0, 1.6, 4], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={isMobile ? 0.5 : 0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <CameraRig activeShot={activeShot} />
        <FitnessModel />
      </Suspense>
    </Canvas>
  );
}
