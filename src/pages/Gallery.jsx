import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../data";

export default function Gallery() {
  return (
    <div className="min-h-screen pt-24 px-4 bg-zinc-950">
      <h1 className="text-5xl font-black text-center text-orange-500 mb-12">
        GALLERY
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-xl aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white font-bold">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
