"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, ShieldCheck, Truck } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

export function Hero() {
  const WHATSAPP_NUMBER = "917058669488"
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Shree Laxmi Traders, I want to order materials.")}`

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center pt-15 pb-16">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 z-0 bg-background dark:bg-[#0B1120]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      </div>

      {/* Content - Centered and Balanced */}
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary font-bold text-sm md:text-base mb-8 border border-primary/30 backdrop-blur-sm shadow-sm"
          >
            Welcome to Shree Laxmi Traders
          </motion.span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight mb-6 leading-[1.1]">
            
            घर बनाने का
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-300%">
               भरोसेमंद साथी <span className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-primary font-semibold drop-shadow-sm">
              श्री लक्ष्मी ट्रेडर्स
            </span>
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-foreground/90 font-bold mb-4 max-w-3xl drop-shadow-sm">
            सीमेंट • छड़ • बालू • गिट्टी
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted destination in Turkpatti, Kushinagar for premium building materials. We provide 100% genuine products at the best wholesale rates to build your dream home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground font-medium mb-12 text-sm md:text-base bg-card/50 backdrop-blur-md px-6 py-3 rounded-full border border-border shadow-sm">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-500" /> 100% Original Brands</span>
            <span className="hidden sm:inline-block text-border">•</span>
            <span className="flex items-center gap-2"><Truck className="w-5 h-5 text-accent" /> Fast Delivery in Kushinagar</span>
            <span className="hidden sm:inline-block text-border">•</span>
            <span className="text-primary font-bold">Wholesale Prices</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl shadow-[#25D366]/40 hover:bg-[#20bd5a] transition-all w-full sm:w-auto"
            >
              <FaWhatsapp className="w-6 h-6" />
              Order on WhatsApp
            </motion.a>
            <motion.a
              href="tel:+917058669488"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white dark:bg-white/10 text-foreground px-10 py-5 rounded-full font-bold text-xl shadow-xl border border-border hover:bg-gray-50 dark:hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Phone className="w-6 h-6 text-primary" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
