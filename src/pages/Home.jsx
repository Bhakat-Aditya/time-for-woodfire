// src/pages/Home.jsx
import React from "react";
import Features from "../component/Features";
import BestSellers from "../component/BestSellers"; // Import the new component

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 bg-black/60 p-10 rounded-xl backdrop-blur-sm border border-orange-500/30">
          <h1 className="text-6xl md:text-8xl font-black text-orange-500 mb-2 tracking-tighter">
            TIME FOR WOODFIRE
          </h1>
          <p className="text-white text-xl tracking-widest uppercase">
            The Best Pizza in Midnapore
          </p>
          <div className="mt-8">
            <a
              href="/menu"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-all"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>

      {/* Stacking Video Cards */}
      <Features />

      {/* New Best Sellers / Fan Favorites Section */}
      <BestSellers />

      {/* Simple CTA (bottom of page before Footer) */}
      <div className="py-20 text-center bg-zinc-950 border-t border-zinc-900">
        <h3 className="text-4xl text-white mb-8">Can't decide?</h3>
        <a
          href="/menu"
          className="bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-700 transition-all"
        >
          VIEW FULL MENU
        </a>
      </div>
    </div>
  );
}
