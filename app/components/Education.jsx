"use client"

import { useEffect, useState, useRef } from "react"

const Education = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically load Three.js from the CDN
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"; // Load Three.js
      script.onload = () => {
        // Dynamically load Vanta.js from the CDN
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"; // Load Vanta.js Trunk Effect
        vantaScript.onload = () => {
          if (!vantaEffect) {
            setVantaEffect(
              window.VANTA.WAVES({
                el: myRef.current, // Apply the effect to the referenced element
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0x000000, // Customize the trunk color (white)
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
      className="h-screen w-screen flex flex-col text-white dark:text-black"
    >
      <div className="space-y-5 text-xl">
        <p>
          I attend <span className="text-[#B3A369]">Georgia Institute of Technology College of Computing. 🐝</span>
        </p>

        <p>
          Interested in Machine Learning, Software Engineering, and Quantitative Trading
        </p>
      </div>

      <div>
        <h1 className="text-2xl">Clubs</h1>
        <p>
          Trading at Georgia Tech (TGT)
        </p>

        <p>
          Artificial Intelligence At Georgia Tech (AI@GT)
        </p>

        <p>
          Black Student Coding Organization (BSCO)
        </p>
      </div>
    </div>
  );
};

export default Education;
