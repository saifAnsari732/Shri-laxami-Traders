"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Truck, MapPin } from "lucide-react"

const AREAS = [
  "Turkpatti", "Kushinagar", "Padrauna", "Kasya", "Nearby Villages"
]

export function DeliverySection() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Move the truck horizontally based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"])

  return (
    <section ref={ref} className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Moving road stripes */}
      <div className="absolute bottom-10 left-0 right-0 h-1 border-b-4 border-dashed border-white/30" />
      
      {/* Animated Truck */}
      <motion.div 
        style={{ x }}
        className="absolute bottom-11 left-0 z-10 drop-shadow-2xl"
      >
        <Truck size={120} className="text-white drop-shadow-xl" strokeWidth={1} fill="currentColor" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Same Day Delivery Available
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                We ensure your construction doesn't stop. Get your materials delivered directly to your site, fast and secure.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {AREAS.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                  >
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="font-semibold">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            {/* Delivery graphics placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <img 
                src="/images/delivery_truck.png" 
                alt="Delivery Truck Loading" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
