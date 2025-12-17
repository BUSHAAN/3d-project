"use client";
import ThreeDScene from "./components/GymScene";
import { useEffect, useRef, useState } from "react";
import GymScene from "./components/GymScene";
import CenterContentSection from "./components/homeSections/CenterSection";
import HeroSection from "./components/homeSections/Hero";
import LeftContentSection from "./components/homeSections/LeftSection";
import { motion } from "motion/react";

export default function Home() {
  const [activeShot, setActiveShot] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionsRef = useRef([]);

  const snapTo = (index) => {
    if (isAnimating) return;
    if (index < 0 || index > sectionsRef.current.length - 1) return;

    setIsAnimating(true);
    setActiveShot(index);

    sectionsRef.current[index].scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 900);
  };
  const list = [HeroSection, LeftContentSection, CenterContentSection];

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) snapTo(activeShot + 1);
      else snapTo(activeShot - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeShot, isAnimating]);

  return (
    <>
      <div className="fixed bg-gray-300 -z-10 inset-0 pointer-events-none">
        <GymScene activeShot={activeShot} />
      </div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {list.map((Component, index) => (
          <motion.div
            key={index}
            animate={
              activeShot === index
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="h-screen snap-start"
          >
            <Component />
          </motion.div>
        ))}
      </div>
    </>
  );
}
