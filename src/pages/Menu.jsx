// src/pages/Menu.jsx
import React, { useRef } from "react";
import { menuData } from "../data"; // Assuming your data is here
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
  const container = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".menu-item");

      items.forEach((item) => {
        // --- 1. ENTERING (Grow from 50% to 100%) ---
        // From bottom of screen up to the Center
        gsap.fromTo(
          item,
          {
            scale: 0.5,
            opacity: 0.3, // Lower opacity for better contrast
            filter: "blur(4px)", // Add blur for depth
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out", // Smooth easing
            scrollTrigger: {
              trigger: item,
              start: "top 90%", // Start growing when top hits bottom area
              end: "center center", // Full size when it hits exact center
              scrub: 1, // '1' adds a 1-second lag for "buttery" feel
            },
          },
        );

        // --- 2. LEAVING (Shrink from 100% back to 50%) ---
        // From Center up to the Top of screen
        gsap.fromTo(
          item,
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          },
          {
            scale: 0.5,
            opacity: 0.3,
            filter: "blur(4px)",
            ease: "power2.in",
            scrollTrigger: {
              trigger: item,
              start: "center center", // Start shrinking from center
              end: "bottom 10%", // Fully small when bottom hits top area
              scrub: 1, // Consistent smooth lag
              immediateRender: false, // Important to prevent conflict with first tween
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="bg-black min-h-screen w-full text-white">
      {/* Spacer to allow first item to reach center */}
      <div className="h-[40vh]" />

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-12 pb-40">
        {/* Title (Optional) */}
        <h1 className="fixed top-10 left-0 w-full text-center text-zinc-700 font-bold tracking-[1em] uppercase z-50 pointer-events-none mix-blend-difference">
          Menu Selection
        </h1>

        {menuData.map((category, catIndex) => (
          <React.Fragment key={catIndex}>
            {/* Render Category Header as an item too, or keep it static? 
                Let's make items the focus. */}

            {category.items.map((item, index) => (
              <div
                key={`${catIndex}-${index}`}
                className="menu-item w-full flex flex-col items-center justify-center p-8 border border-zinc-800 bg-zinc-900/50 rounded-3xl backdrop-blur-sm"
                // Using transform-gpu forces hardware acceleration for smoothness
                style={{ willChange: "transform, opacity, filter" }}
              >
                {/* Visual Content */}
                <div className="text-center space-y-4">
                  <div className="text-orange-500 font-mono text-xs tracking-widest uppercase">
                    {category.category} No.{" "}
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                    {item.name}
                  </h2>

                  <p className="text-zinc-400 font-light max-w-md mx-auto">
                    {item.desc ||
                      "A delicious culinary masterpiece made with fresh ingredients."}
                  </p>

                  <div className="pt-4">
                    <span className="text-3xl font-mono font-bold text-white">
                      ₹{item.price || category.priceRegular}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Spacer to allow last item to reach center */}
      <div className="h-[40vh]" />
    </div>
  );
}
