'use client'
import ThreeDScene from "./components/GymScene";
import { useEffect, useState } from "react";
import GymScene from "./components/GymScene";

export default function Home() {
  const [activeShot, setActiveShot] = useState(0);

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
      <div className="fixed inset-0">
        <GymScene activeShot={activeShot} />
      </div>

      <section data-shot="0" className="h-screen bg-amber-200" />
      <section data-shot="1" className="h-screen bg-amber-300" />
      <section data-shot="2" className="h-screen bg-amber-400" />
    </>
  );
}
