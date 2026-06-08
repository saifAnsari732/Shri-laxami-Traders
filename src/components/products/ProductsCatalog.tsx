"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Loader2 } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import { ALL_PRODUCTS } from "@/data/products"
import Link from "next/link"

import { useRouter } from "next/navigation"

const CATEGORIES = ["All", "Cement", "TMT", "Balu", "Gitti"]

export function ProductsCatalog() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [visibleCount, setVisibleCount] = React.useState(8)
  const [isLoading, setIsLoading] = React.useState(false)

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount(prev => prev + 4)
      setIsLoading(false)
    }, 800)
  }

  // Infinite scroll simulation
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500) {
        if (hasMore && !isLoading) {
          loadMore()
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasMore, isLoading])

  const WHATSAPP_NUMBER = "917058669488"
  const getWhatsAppLink = (productName: string) => {
    const msg = `Hello Shree Laxmi Traders,\n\nI want to order:\nProduct: ${productName}\nQuantity: \n\nPlease share today's price.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Our Products</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our complete catalog of high-quality building materials.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search products or brands..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          <Filter className="w-5 h-5 text-muted-foreground mr-2 shrink-0" />
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setVisibleCount(8) // reset visible count on category change
              }}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all shrink-0 ${
                activeCategory === category 
                  ? "bg-primary text-white shadow-lg shadow-primary/30" 
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {visibleProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="group perspective-1000"
            >
              {/* 3D Card implementation for products */}
              <div onClick={() => router.push(`/products/${product.id}`)} className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform-style-3d group-hover:rotate-x-2 group-hover:-rotate-y-2 group-hover:border-primary/40 flex flex-col h-full cursor-pointer block">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-widest text-foreground uppercase border border-border">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow bg-card relative z-10 translate-z-[20px]">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                    {product.brand}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#25D366]/20"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No products found matching your search.</p>
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}
    </div>
  )
}
