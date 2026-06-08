"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function TopMarquee() {
  const text = "🔥 SPECIAL FESTIVAL OFFER: Get flat ₹20 off per bag on UltraTech Cement! Call +91 7058669488 to order now. | 🚚 FREE Delivery on orders above 100 bags! | 💯 100% Genuine Materials Guaranteed!"

  return (
    <div className="bg-primary text-white text-xs md:text-sm font-semibold py-1.5 md:py-2 overflow-hidden whitespace-nowrap flex z-50 relative">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex"
      >
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </motion.div>
    </div>
  )
}
