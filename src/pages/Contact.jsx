import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 px-4 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Text Information Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h1 className="text-5xl font-black text-orange-500 mb-6 tracking-tighter">
              FIND US
            </h1>
            <p className="text-xl text-zinc-400">
              Come visit us for the best woodfired experience in Midnapore.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-zinc-400">
                  Sepoy Bazar Rd, Midnapore, West Bengal 721101
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  (Near the historic district)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Opening Hours</h3>
                <p className="text-zinc-400">Monday - Sunday</p>
                <p className="text-orange-400 font-mono text-lg">
                  10:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="text-zinc-400">+91 62970 04033</p>{" "}
                {/* Update with real number */}
                <p className="text-sm text-zinc-500">
                  Call for reservations or takeout
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=TIME+FOR+WOODFIRE+Sepoy+Bazar+Rd+Midnapore+West+Bengal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all w-fit"
          >
            <Navigation className="w-5 h-5" />
            <span>GET DIRECTIONS</span>
          </a>
        </motion.div>

        {/* Map Embed Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
        >
          <iframe
            title="Time for Woodfire Location"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) invert(92%) contrast(83%)",
            }} // Custom dark map style
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.9718308826073!2d87.32033671105658!3d22.430086038093137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b5e58f89bdf%3A0x9b2b09180e0b78fc!2sTIME%20FOR%20WOODFIRE!5e0!3m2!1sen!2sin!4v1769879911263!5m2!1sen!2sin`}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
