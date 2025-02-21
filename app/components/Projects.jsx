"use client"; // Ensure it runs only on the client side

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";


const Projects = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    //TODO When you enable toggle day and night make sure the changes reflct here.
    if (typeof window !== "undefined") {
      // Dynamically load Three.js from the CDN
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"; // Load Three.js
      script.onload = () => {
        // Dynamically load Vanta.js from the CDN
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"; // Load Vanta.js Dots Effect
        vantaScript.onload = () => {
          if (!vantaEffect) {
            setVantaEffect(
              window.VANTA.NET({
                el: myRef.current, // Apply the effect to the referenced element
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xffffff, //0xB3A369, // Customize the dot color (green)
                color2: 0xffffff,
                backgroundColor: 0x000000, // Customize background color (black)
              })
            );
          }
        };
        document.body.appendChild(vantaScript);
      };
      document.body.appendChild(script);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef} // Reference element to apply the effect
      className="h-screen w-screen flex flex-col items-center justify-center text-white"
    >
      <p>
        Google
      </p>

      <p>
        Incoming Google ML
      </p>

      <p>
        Quantitative Analyst
      </p>
        
   
    </div>
  );
};

export default Projects;
