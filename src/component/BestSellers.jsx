// src/components/BestSellers.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const bestSellers = [
  {
    id: 1,
    name: "Makhani Do Pyaza",
    price: "₹165",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    tag: "FUSION HIT",
    desc: "Creamy makhani gravy with crunchy onions.",
  },
  {
    id: 2,
    name: "BBQ Chicken",
    price: "₹150",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    tag: "MEAT LOVER",
    desc: "Smoked chicken chunks with our secret BBQ sauce.",
  },
  {
    id: 3,
    name: "Peri Peri Veg",
    price: "₹230",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop",
    tag: "SPICY",
    desc: "Loaded with spicy peppers and golden corn.",
  },
  {
    id: 4,
    name: "Choco Brownie",
    price: "₹110",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=1974&auto=format&fit=crop",
    tag: "SWEET ENDING",
    desc: "Gooey warm chocolate to finish the feast.",
  },
];

export default function BestSellers() {
  const container = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;

      // Create the master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top", // Start when top of section hits top of screen
          end: "+=300%", // Scroll distance (longer = slower animation)
          pin: true, // Lock the section in place
          scrub: 1, // Smooth scrubbing based on scroll
          anticipatePin: 1,
        },
      });

      // Animate each card
      cards.forEach((card, index) => {
        // Logic:
        // 1. Start completely off screen to the left (xPercent: -150)
        // 2. Rotate slightly for style
        // 3. End in the center (xPercent: 0)
        // 4. Stacking: Each card stops slightly lower (y: index * 40) so we see the top of the previous one

        tl.fromTo(
          card,
          {
            xPercent: -150,
            rotation: -10,
            opacity: 0,
          },
          {
            xPercent: 0,
            rotation: 0, // Straighten out when they land
            opacity: 1,
            y: index * 40, // <--- This creates the visible "stack" offset
            duration: 1,
            ease: "power2.out",
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden relative"
    >
      {/* Background Title (Static) */}
      <div className="absolute top-10 left-0 w-full text-center z-0">
        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
          Customer Favorites
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-zinc-800 mt-2 tracking-tighter uppercase">
          Hall of Fame
        </h2>
      </div>

      {/* The Stack Container */}
      <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4] z-10">
        {bestSellers.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: index + 1 }} // Ensure proper layering
          >
            <Link
              to="/menu"
              className="block w-full h-full relative group rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-900"
            >
              {/* Full Height Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top: Tag */}
                <div className="flex justify-between items-start">
                  <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {item.tag}
                  </span>
                  <span className="text-4xl font-black text-white/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Bottom: Info */}
                <div>
                  <h3 className="text-3xl font-black text-white mb-2 leading-none uppercase">
                    {item.name}
                  </h3>
                  <p className="text-zinc-300 text-sm mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-3xl font-mono font-bold text-orange-400">
                      {item.price}
                    </span>
                    <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:translate-x-2 transition-transform">
                      ORDER <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 text-zinc-500 text-sm animate-bounce">
        Scroll to discover
      </div>
    </section>
  );
}
