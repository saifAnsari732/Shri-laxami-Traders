"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const FEATURES = [
  { title: "10+ Years Experience", desc: "Serving Kushinagar with trust and reliability since a decade." },
  { title: "Fast Delivery", desc: "Same day dispatch for all major orders across the district." },
  { title: "Wholesale & Retail Rate", desc: "Get the best market price whether you buy 10 bags or 1000 bags." },
  { title: "Trusted Quality", desc: "We deal only in genuine, company-certified brands." },
  { title: "Doorstep Delivery", desc: "Direct unloading at your construction site with our own trucks." },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            The most trusted building material supplier in Turkpatti, Kushinagar
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              className="relative pl-10 md:pl-0 mb-10 last:mb-0"
            >
              <div className="md:flex items-center justify-between group">
                {/* Timeline line for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border group-last:bottom-auto group-last:h-full -translate-x-1/2" />
                
                {/* Timeline line for mobile */}
                <div className="md:hidden absolute left-[15px] top-6 bottom-[-40px] w-px bg-border group-last:hidden" />

                {/* Left Side (Empty on odd, Content on even) */}
                <div className={`hidden md:block w-[45%] text-right ${index % 2 === 0 ? "" : "opacity-0"}`}>
                  {index % 2 === 0 && (
                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border group-hover:border-primary/50 transition-colors">
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 top-1 md:relative md:left-auto md:top-auto z-10 w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary group-hover:bg-primary transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Right Side (Content on odd, Empty on even for desktop. For mobile always content here) */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:opacity-0" : ""}`}>
                  {/* For mobile, we always render the content here */}
                  <div className={`bg-card p-6 rounded-2xl shadow-sm border border-border group-hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:hidden" : ""}`}>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                  {/* Desktop Right Content */}
                  {index % 2 !== 0 && (
                    <div className="hidden md:block bg-card p-6 rounded-2xl shadow-sm border border-border group-hover:border-primary/50 transition-colors">
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
