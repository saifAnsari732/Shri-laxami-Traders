"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

const CATEGORIES = [
  {
    id: 1,
    title: "Premium Cement",
    description: "UltraTech, ACC, and Ambuja cement for strong foundations.",
    image: "/images/cement_bag.png",
    link: "/products?category=cement"
  },
  {
    id: 2,
    title: "TMT Bars",
    description: "High-grade Tata Tiscon and Jindal Panther steel.",
    image: "/images/tmt_bars.png",
    link: "/products?category=tmt"
  },
  {
    id: 3,
    title: "River Sand (Balu)",
    description: "Clean, fine quality river sand for plastering and brickwork.",
    image: "/images/balu_sand.png",
    link: "/products?category=balu"
  },
  {
    id: 4,
    title: "Crushed Stone (Gitti)",
    description: "Strong 20mm and 10mm crushed stone for concrete mix.",
    image: "/images/gitti_stone.png",
    link: "/products?category=gitti"
  }
]

function Card3D({ category }: { category: typeof CATEGORIES[0] }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={category.link}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm cursor-pointer shadow-2xl flex flex-col justify-end overflow-hidden group block"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
      
      <div 
        className="relative z-20 p-6 translate-z-[50px]"
        style={{ transform: "translateZ(50px)" }}
      >
        <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
          {category.description}
        </p>
      </div>
    </motion.a>
  )
}

export function Categories3D() {
  return (
    <section className="py-20 bg-background overflow-hidden perspective-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Premium Materials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Highest quality construction materials for your dream home
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ perspective: 1000 }}
            >
              <Card3D category={cat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
