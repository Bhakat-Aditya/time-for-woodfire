// src/components/Features.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: 1,
    title: "Hand-TXZ Dough",
    subtitle: "Fermented for 48 hours for that perfect airy crust.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-fresh-pizza-dough-slow-motion-43549-large.mp4",
  },
  {
    id: 2,
    title: "Woodfire Oven",
    subtitle: "Cooked at 400°C for authentic smokey char.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-putting-pizza-in-the-oven-43553-large.mp4",
  },
  {
    id: 3,
    title: "Fresh Basil",
    subtitle: "Picked daily from our own indoor garden.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-pizza-maker-putting-basil-leaves-on-43552-large.mp4",
  },
  {
    id: 4,
    title: "Artisan Cheese",
    subtitle: "Locally sourced mozzarella that stretches for miles.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-serving-a-pizza-slice-43554-large.mp4",
  },
  {
    id: 5,
    title: "Served Hot",
    subtitle: "From oven to table in less than 3 minutes.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-eating-pizza-with-friends-43556-large.mp4",
  },
];

export default function Features() {
  const container = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;

      // Create a timeline that pins the container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${cards.length * 100}%`, // Scroll distance proportional to number of cards
          pin: true,
          scrub: 1,
          // snap: 1 / (cards.length - 1), // Optional: Snap to cards
        },
      });

      // Animate each card stacking up
      cards.forEach((card, index) => {
        if (index === 0) return; // First card is already visible

        tl.fromTo(
          card,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "none", duration: 1 },
        );
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative w-full h-screen bg-zinc-950 overflow-hidden"
    >
      <div className="absolute top-8 left-0 w-full text-center z-10 pointer-events-none">
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm">
          Our Process
        </p>
      </div>

      {featuresData.map((feature, index) => (
        <div
          key={feature.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
          style={{ zIndex: index + 1 }} // Ensure simpler stacking context
        >
          {/* Card Container */}
          <div className="relative w-full max-w-4xl h-[80vh] bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col md:flex-row">
            {/* Video Side */}
            <div className="w-full md:w-2/3 h-2/3 md:h-full relative">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <video
                className="w-full h-full object-cover"
                src={feature.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/3 h-1/3 md:h-full bg-zinc-900 p-8 flex flex-col justify-center border-l border-zinc-800">
              <span className="text-6xl font-black text-orange-600/20 mb-4">
                0{index + 1}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-lg">{feature.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
