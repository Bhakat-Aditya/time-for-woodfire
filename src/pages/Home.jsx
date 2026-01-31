import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const VideoSection = ({ videoSrc, title, subtitle }) => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    // Scroll trigger logic: Play when in view, pause when out
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden border-b border-orange-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />{" "}
      {/* Overlay for text readability */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        // Use a poster image as fallback
        poster="/images/placeholder-pizza.jpg"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="relative z-20 text-center px-4">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tighter"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-orange-400 font-light"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-black/60 p-10 rounded-xl backdrop-blur-sm border border-orange-500/30">
          <h1 className="text-6xl md:text-8xl font-black text-orange-500 mb-2">
            TIME FOR WOODFIRE
          </h1>
          <p className="text-white text-xl tracking-widest uppercase">
            The Best Pizza in Midnapore
          </p>
        </div>
      </div>

      {/* Scroll Trigger Video Sections */}
      {/* Replace these src urls with your actual local video paths */}
      <VideoSection
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-putting-pizza-in-the-oven-43553-large.mp4"
        title="Wood Fired"
        subtitle="Authentic Smokey Flavor"
      />

      <VideoSection
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-fresh-pizza-dough-slow-motion-43549-large.mp4"
        title="Fresh Dough"
        subtitle="Hand-tossed daily"
      />

      <div className="py-20 text-center bg-zinc-900">
        <h3 className="text-4xl text-white mb-8">Ready to taste?</h3>
        <a
          href="/menu"
          className="bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-700 transition-all"
        >
          VIEW MENU
        </a>
      </div>
    </div>
  );
}
