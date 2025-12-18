"use client";
import { useEffect, useRef, useState } from "react";
import GymScene from "./components/GymScene";
import CenterContentSection from "./components/homeSections/CenterSection";
import HeroSection from "./components/homeSections/Hero";
import LeftContentSection from "./components/homeSections/LeftSection";

export default function Home() {
  const [activeShot, setActiveShot] = useState(0);
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const list = [HeroSection, LeftContentSection, CenterContentSection];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveShot(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="fixed z-100 inset-0 pointer-events-none">
        <GymScene activeShot={activeShot} />
      </div>

      <div
        className="relative h-screen z-150 overflow-y-scroll snap-y snap-mandatory"
        ref={scrollRef}
      >
        {list.map((Component, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="snap-start h-screen"
          >
            <Component isActive={activeShot === index} />
          </div>
        ))}
      </div>
    </div>
  );
}
