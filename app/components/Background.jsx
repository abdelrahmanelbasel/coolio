"use client";
import Script from "next/script";

import { useEffect, useRef, useState } from "react";

export const Background = () => {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    if (threeLoaded && vantaLoaded) {
      const vantaEffect = VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xa5ff,
        points: 15.0,
        maxDistance: 28.0,
        spacing: 18.0,
      });
    }
  }, [threeLoaded, vantaLoaded]);
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => setThreeLoaded(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js"
        onLoad={() => setVantaLoaded(true)}
      />
      <div
        id="vanta-background"
        className="absolute inset-0 h-screen w-screen -z-10"
      ></div>
    </>
  );
};
