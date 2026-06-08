"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

import Link from "next/link"
import { ALL_PRODUCTS } from "@/data/products"

const PRODUCTS = ALL_PRODUCTS.slice(0, 8)

import { useRouter } from "next/navigation"

export function PopularProducts() {
  const router = useRouter()
  const WHATSAPP_NUMBER = "917058669488"

  const getWhatsAppLink = (productName: string) => {
    const msg = `Hello I want to buy ${productName}. Please share today's price.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Products</h2>
            <p className="text-muted-foreground text-lg">Top-selling materials highly trusted by contractors.</p>
          </div>
          <a href="/products" className="text-primary font-semibold hover:underline">
            View All Products &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div onClick={() => router.push(`/products/${product.id}`)} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col cursor-pointer block">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-foreground">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                    {product.brand}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="mt-auto">
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
