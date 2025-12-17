"use client";
import ThreeDScene from "./components/GymScene";
import { useEffect, useState } from "react";
import GymScene from "./components/GymScene";
import CenterContentSection from "./components/homeSections/CenterSection";
import HeroSection from "./components/homeSections/Hero";
import LeftContentSection from "./components/homeSections/LeftSection";
import { motion } from "motion/react";

export default function Home() {
  const [activeShot, setActiveShot] = useState(0);

  const list = [HeroSection, LeftContentSection, CenterContentSection];

  useEffect(() => {
    const sections = document.querySelectorAll("[data-shot]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveShot(Number(entry.target.dataset.shot));
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed bg-gray-300 -z-10 inset-0 pointer-events-none">
        <GymScene activeShot={activeShot} />
      </div>
      
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {list.map((Component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=""
          >
            <Component key={index} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
