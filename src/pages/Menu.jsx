import React from "react";
import { motion } from "framer-motion";
import { menuData } from "../data"; // Import the array we made in step 1

const MenuItem = ({ item, isFixed }) => (
  <div className="flex justify-between items-start py-4 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors p-2 rounded-lg">
    <div className="flex-1 pr-4">
      <h4 className="text-xl font-bold text-orange-100">{item.name}</h4>
      <p className="text-sm text-zinc-400 mt-1">{item.desc}</p>
    </div>
    <div className="text-right whitespace-nowrap">
      {isFixed ? (
        <span className="text-lg font-mono text-orange-400">₹{item.price}</span>
      ) : (
        // Wait, wait, let's look at your image.
        // R = Regular, M = Medium.
        // Usually Regular is 7-8 inch, Medium is 10-12 inch.
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-zinc-500 uppercase">Reg</span>
            <span className="text-lg font-mono text-white">
              ₹{item.priceR || "Check Cat"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-zinc-500 uppercase">Med</span>
            <span className="text-lg font-mono text-orange-400">
              ₹{item.priceM || "Check Cat"}
            </span>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default function Menu() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20 bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-center text-orange-500 mb-12 tracking-tighter">
          OUR MENU
        </h1>

        {menuData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex justify-between items-end mb-6 border-b-2 border-orange-600 pb-2">
              <h2 className="text-3xl font-bold text-white uppercase">
                {category.category}
              </h2>
              {!category.isFixedPrice && (
                <div className="text-right">
                  <div className="flex gap-4 text-xl font-bold font-mono">
                    <span className="text-white">
                      R: ₹{category.priceRegular}
                    </span>
                    <span className="text-orange-500">
                      M: ₹{category.priceMedium}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="grid gap-2">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start py-3 border-b border-zinc-900/50"
                >
                  <div>
                    <h3 className="text-lg font-medium text-zinc-200">
                      {item.name}
                    </h3>
                    {item.desc && (
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    )}
                  </div>
                  {/* If item has individual price override, show it, otherwise it follows category price */}
                  {category.isFixedPrice && (
                    <span className="font-mono text-orange-400">
                      ₹{item.price}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
