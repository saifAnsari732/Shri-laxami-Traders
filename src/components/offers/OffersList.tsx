"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, Tag, Gift, Flame } from "lucide-react"

const OFFERS = [
  {
    id: 1,
    title: "Festival Dhamaka",
    description: "Flat ₹20 off per bag on UltraTech Cement.",
    tag: "🔥 Limited Offer",
    type: "festival",
    validUntil: new Date(Date.now() + 1000 * 60 * 60 * 48).getTime(), // 48 hours
    color: "from-red-500 to-orange-500"
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Buy 100 bags of cement, get free doorstep delivery within 20km.",
    tag: "💰 Discount",
    type: "weekly",
    validUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).getTime(), // 3 days
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Bulk TMT Deal",
    description: "Order above 5 Tons of Tata Tiscon and get a free Safety Gear Kit.",
    tag: "🎁 Free Gift",
    type: "today",
    validUntil: new Date(Date.now() + 1000 * 60 * 60 * 12).getTime(), // 12 hours
    color: "from-green-500 to-emerald-500"
  }
]

function CountdownTimer({ targetDate }: { targetDate: number }) {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 0, minutes: 0, seconds: 0 })

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-2 text-sm font-mono bg-black/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
      <Clock className="w-4 h-4" />
      <span>
        {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')}
      </span>
    </div>
  )
}

export function OffersList() {
  const getIcon = (tag: string) => {
    if (tag.includes("🔥")) return <Flame className="w-5 h-5" />
    if (tag.includes("💰")) return <Tag className="w-5 h-5" />
    if (tag.includes("🎁")) return <Gift className="w-5 h-5" />
    return <Tag className="w-5 h-5" />
  }

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Exclusive Offers</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Save big on your construction material with our daily, weekly, and festival deals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OFFERS.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`relative rounded-3xl overflow-hidden shadow-xl text-white bg-gradient-to-br ${offer.color}`}
          >
            {/* Decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

            <div className="p-8 relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md border border-white/20">
                  {getIcon(offer.tag)}
                  {offer.tag.replace(/[^a-zA-Z\s]/g, '')}
                </span>
                <CountdownTimer targetDate={offer.validUntil} />
              </div>

              <h3 className="text-3xl font-bold mb-4">{offer.title}</h3>
              <p className="text-white/90 text-lg mb-8 flex-grow">
                {offer.description}
              </p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-gray-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  window.open(`https://wa.me/917058669488?text=Hello%20I%20want%20to%20claim%20the%20${encodeURIComponent(offer.title)}%20offer`, "_blank")
                }}
              >
                Claim Offer on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
