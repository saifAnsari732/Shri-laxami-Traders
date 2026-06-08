"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const GALLERY_IMAGES = [
  { id: 1, src: "/images/gallery_1.png", alt: "Loading cement bags" },
  { id: 2, src: "/images/gallery_2.png", alt: "Bricklaying scene" },
  { id: 3, src: "/images/gallery_3.png", alt: "TMT bar foundation" },
  { id: 4, src: "/images/gallery_4.png", alt: "Unloading river sand" },
]

export function HomeGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
            <p className="text-muted-foreground text-lg">A glimpse into our materials being used at real construction sites.</p>
          </div>
          <Link href="/gallery" className="flex items-center gap-2 text-primary font-semibold hover:underline group">
            View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-semibold tracking-wide uppercase text-sm border border-white/50 px-4 py-2 rounded-full">
                  View Large
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
