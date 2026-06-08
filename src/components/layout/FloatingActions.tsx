"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export function FloatingActions() {
  const WHATSAPP_NUMBER = "917058669488"
  const DEFAULT_MESSAGE = "Hello Shree Laxmi Traders, I would like to know more about your building materials."
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
  const phoneUrl = `tel:+917058669488`

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* Call Button - mostly useful for mobile, but fine on desktop */}
      <motion.a
        href={phoneUrl}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </motion.a>
    </div>
  )
}
