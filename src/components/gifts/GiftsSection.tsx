"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Gift, Lock, Unlock, Trophy } from "lucide-react"

const GIFTS = [
  {
    id: 1,
    requiredBags: 50,
    title: "Free Trowel",
    image: "https://images.unsplash.com/photo-1541888081643-ebfa0ba00aee?q=80&w=400&auto=format&fit=crop",
    unlocked: true,
  },
  {
    id: 2,
    requiredBags: 100,
    title: "Free Safety Helmet",
    image: "https://images.unsplash.com/photo-1550595303-31622345b5c9?q=80&w=400&auto=format&fit=crop",
    unlocked: false,
  },
  {
    id: 3,
    requiredBags: 200,
    title: "Free Measuring Tape 50m",
    image: "https://images.unsplash.com/photo-1536845347264-b0a7d9796781?q=80&w=400&auto=format&fit=crop",
    unlocked: false,
  },
  {
    id: 4,
    requiredBags: 500,
    title: "Premium Tool Kit",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cb8c9ea?q=80&w=400&auto=format&fit=crop",
    unlocked: false,
  }
]

function GiftCard3D({ gift, progress }: { gift: typeof GIFTS[0], progress: number }) {
  const isUnlocked = progress >= gift.requiredBags
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-[3/4] rounded-2xl bg-card border ${isUnlocked ? 'border-primary' : 'border-border'} cursor-pointer shadow-xl overflow-hidden group perspective-1000`}
    >
      <div className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${!isUnlocked && 'grayscale opacity-50 blur-[2px]'}`} style={{ backgroundImage: `url(${gift.image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

      <div 
        className="absolute top-4 right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-md shadow-lg translate-z-[30px]"
        style={{ transform: "translateZ(30px)" }}
      >
        {isUnlocked ? <Unlock className="w-5 h-5 text-primary" /> : <Lock className="w-5 h-5 text-muted-foreground" />}
      </div>
      
      <div 
        className="absolute inset-x-0 bottom-0 p-6 z-20 translate-z-[50px]"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Trophy className={`w-4 h-4 ${isUnlocked ? 'text-primary' : 'text-muted-foreground'}`} />
          <span className={`text-sm font-bold ${isUnlocked ? 'text-primary' : 'text-muted-foreground'}`}>
            {gift.requiredBags} Bags
          </span>
        </div>
        <h3 className={`text-2xl font-bold ${isUnlocked ? 'text-white' : 'text-white/50'}`}>{gift.title}</h3>
      </div>
    </motion.div>
  )
}

export function GiftsSection() {
  const [bags, setBags] = React.useState(60)

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4">
          <Gift className="w-12 h-12 text-primary" /> Rewards Program
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Buy more, earn more! Unlock premium gifts as you order more cement bags from Shree Laxmi Traders.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-20 bg-card p-8 rounded-3xl border border-border shadow-lg">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-xl font-bold">Your Current Orders</h3>
            <p className="text-muted-foreground text-sm">Interactive Demo</p>
          </div>
          <div className="text-3xl font-black text-primary">{bags} <span className="text-lg text-foreground font-medium">Bags</span></div>
        </div>
        
        {/* Interactive slider for demo purposes */}
        <input 
          type="range" 
          min="0" 
          max="500" 
          value={bags} 
          onChange={(e) => setBags(parseInt(e.target.value))}
          className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mb-6"
        />

        <div className="relative w-full h-4 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((bags / 500) * 100, 100)}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {GIFTS.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GiftCard3D gift={gift} progress={bags} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
