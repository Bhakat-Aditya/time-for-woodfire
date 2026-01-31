// src/pages/Menu.jsx
import React, { useRef } from "react";
import { menuData } from "../data";
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
        // 1. Entrance ONLY (Coming from Bottom -> Center)
        // We removed the Exit animation so items stay visible at the top.
        gsap.fromTo(
          item,
          {
            scale: 1,
            opacity: 1,
            filter: "",
            y: 0,
          },
          {
            scale: 1, // On mobile, we stop at scale 1 to prevent overflow
            opacity: 1,
            filter: "brightness(1) blur(0px)",
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 100%",
              end: "center 55%",
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="bg-zinc-950 min-h-screen pb-40">
      {/* Header Space */}
      <div className="pt-32 pb-12 text-center px-4">
        {/* CHANGED: text-4xl for mobile, 8xl for desktop */}
        <h1 className="text-4xl md:text-8xl font-black text-orange-600 tracking-tighter uppercase mb-2 md:mb-4 opacity-90">
          The Menu
        </h1>
        <p className="text-zinc-500 text-sm md:text-lg uppercase tracking-widest">
          Scroll to Focus
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative">
        {menuData.map((category, catIndex) => (
          <div key={catIndex} className="mb-24 md:mb-40 relative">
            {/* Sticky Category Header */}
            <div className="sticky top-20 z-30 py-4 md:py-6 mb-8 md:mb-12 bg-zinc-950/80 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex justify-between items-end px-2 md:px-4">
                {/* CHANGED: text-2xl for mobile */}
                <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
                  {category.category}
                </h2>
                {!category.isFixedPrice && (
                  <div className="hidden md:flex gap-8 font-mono text-xs text-orange-500 font-bold tracking-[0.2em] uppercase opacity-80">
                    <span className="w-16 text-right">Regular</span>
                    <span className="w-16 text-right">Medium</span>
                  </div>
                )}
              </div>
            </div>

            {/* Menu Items List */}
            <div className="space-y-8 md:space-y-12">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  // CHANGED: p-5 for mobile to reduce height
                  className="menu-item will-change-transform transform-gpu bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/60 p-5 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Glow Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>

                  {/* Left: ID & Info */}
                  <div className="flex items-start gap-4 md:gap-6 relative z-10 w-full md:w-auto">
                    {/* Item ID/Number */}
                    {/* CHANGED: text-2xl for mobile */}
                    <span className="text-2xl md:text-5xl font-black text-zinc-800 font-mono select-none opacity-50 pt-1">
                      {(itemIndex + 1).toString().padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      {/* CHANGED: text-xl for mobile */}
                      <h3 className="text-xl md:text-3xl font-bold text-white leading-none mb-2 md:mb-3 tracking-tight drop-shadow-md">
                        {item.name}
                      </h3>
                      {item.desc && (
                        // CHANGED: text-sm for mobile
                        <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed font-light">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Price */}
                  <div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-8 mt-2 md:mt-0 relative z-10 pl-10 md:pl-0">
                    {category.isFixedPrice ? (
                      <div className="text-right">
                        {/* CHANGED: text-xl for mobile */}
                        <span className="block text-xl md:text-3xl font-mono font-bold text-orange-500 drop-shadow-lg">
                          ₹{item.price}
                        </span>
                      </div>
                    ) : (
                      <>
                        {/* Mobile Labels (Compact) */}
                        <div className="md:hidden flex w-full justify-between items-center pt-2 border-t border-white/5">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                              REG
                            </span>
                            <span className="text-lg font-mono font-bold text-zinc-300">
                              ₹{category.priceRegular}
                            </span>
                          </div>
                          <div className="h-6 w-[1px] bg-zinc-800"></div>
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">
                              MED
                            </span>
                            <span className="text-xl font-mono font-bold text-orange-500">
                              ₹{category.priceMedium}
                            </span>
                          </div>
                        </div>

                        {/* Desktop Prices */}
                        <div className="hidden md:flex gap-8 text-right">
                          <span className="w-16 text-2xl font-mono font-bold text-zinc-500">
                            ₹{category.priceRegular}
                          </span>
                          <span className="w-16 text-3xl font-mono font-bold text-orange-500 drop-shadow-orange">
                            ₹{category.priceMedium}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
