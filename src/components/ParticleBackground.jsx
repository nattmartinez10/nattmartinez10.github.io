// src/components/ParticleBackground.jsx
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "../App.module.css"; // ✅ Import your CSS module

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={styles.particlesBg} // ✅ Add class to place behind content
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#5ec6fa" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
};

export default ParticleBackground;
