// src/pages/Menu.jsx
import React, { useRef } from 'react';
import { menuData } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
  const container = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.menu-item');

    items.forEach((item) => {
      // 1. Entrance (The "Lighting Up" Phase)
      // Starts dark, small, and blurry. Blooms as it reaches center.
      gsap.fromTo(
        item,
        { 
          scale: 0.8,              // <--- Much smaller start size
          opacity: 0.2,            // <--- Almost invisible
          filter: 'brightness(0.5) blur(6px)', // <--- Dark and blurry
          y: 60 
        },
        {
          scale: 1.05,             // <--- Pop slightly larger than normal for emphasis
          opacity: 1,
          filter: 'brightness(1) blur(0px)', // <--- Crystal clear and bright
          y: 0,
          ease: "power3.out",      // <--- "Power3" is smoother than Power2
          scrollTrigger: {
            trigger: item,
            start: 'top 100%',     // Start lighting up as soon as it enters view
            end: 'center 55%',     // Reach full brightness slightly below center
            scrub: 1,              // <--- Higher scrub value = more "weight" / smoother lag
          },
        }
      );

      // 2. Exit (The "Fade to Black" Phase)
      // As it leaves the center, it smoothly dims and shrinks back down.
      gsap.to(item, {
        scale: 0.8,
        opacity: 0.2,
        filter: 'brightness(0.5) blur(6px)',
        y: -60,
        ease: "power3.in",
        scrollTrigger: {
          trigger: item,
          start: 'center 45%',     // Start fading slightly above center
          end: 'bottom 0%',        // Fully dark by the time it leaves
          scrub: 1,
        },
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-zinc-950 min-h-screen pb-40">
      
      {/* Header Space */}
      <div className="pt-40 pb-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black text-orange-600 tracking-tighter uppercase mb-4 opacity-90">
          The Menu
        </h1>
        <p className="text-zinc-500 text-lg uppercase tracking-widest">Scroll to Focus</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative">
        {menuData.map((category, catIndex) => (
          <div key={catIndex} className="mb-40 relative">
            
            {/* Sticky Category Header */}
            {/* Added extra glassmorphism to make it stand out over scrolling items */}
            <div className="sticky top-20 z-30 py-6 mb-12 bg-zinc-950/80 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex justify-between items-end px-4">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
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
            <div className="space-y-12"> 
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="menu-item will-change-transform transform-gpu bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/60 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Glow Effect behind the card */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>

                  {/* Left: ID & Info */}
                  <div className="flex items-start gap-6 relative z-10">
                     {/* Item ID/Number */}
                     <span className="text-5xl font-black text-zinc-800 font-mono select-none opacity-50">
                        {(itemIndex + 1).toString().padStart(2, '0')}
                     </span>
                     
                     <div>
                        <h3 className="text-3xl font-bold text-white leading-none mb-3 tracking-tight drop-shadow-md">
                           {item.name}
                        </h3>
                        {item.desc && (
                           <p className="text-zinc-400 text-base max-w-md leading-relaxed font-light">
                              {item.desc}
                           </p>
                        )}
                     </div>
                  </div>

                  {/* Right: Price */}
                  <div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-8 mt-2 md:mt-0 relative z-10">
                      {category.isFixedPrice ? (
                          <div className="text-right">
                             <span className="block text-3xl font-mono font-bold text-orange-500 drop-shadow-lg">₹{item.price}</span>
                          </div>
                      ) : (
                          <>
                             {/* Mobile Labels */}
                             <div className="md:hidden flex flex-col text-xs text-zinc-500 font-bold uppercase tracking-widest">
                                <span>REG</span>
                                <span>₹{category.priceRegular}</span>
                             </div>
                             
                             {/* Desktop Prices */}
                             <div className="flex gap-8 text-right">
                                <span className="w-16 text-2xl font-mono font-bold text-zinc-500">₹{category.priceRegular}</span>
                                <span className="w-16 text-3xl font-mono font-bold text-orange-500 drop-shadow-orange">₹{category.priceMedium}</span>
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