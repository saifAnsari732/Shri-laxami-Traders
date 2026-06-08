"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, X, ZoomIn } from "lucide-react"

const GALLERY_IMAGES = [
  { id: 1, src: "/images/gallery_1.png", category: "Cement Delivery", title: "Bulk UltraTech Delivery" },
  { id: 2, src: "/images/gallery_2.png", category: "Customer Sites", title: "Bricklaying with Cement" },
  { id: 3, src: "/images/gallery_3.png", category: "Customer Sites", title: "House Foundation TMT" },
  { id: 4, src: "/images/gallery_4.png", category: "Building Materials", title: "Unloading River Sand" },
  { id: 5, src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop", category: "Truck Loading", title: "Sand Delivery" },
  { id: 6, src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop", category: "Customer Sites", title: "Roof Casting" },
  { id: 7, src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop", category: "Cement Delivery", title: "ACC Cement Stock" },
  { id: 8, src: "https://images.unsplash.com/photo-1621644155139-33d3bb7e51c8?q=80&w=600&auto=format&fit=crop", category: "Building Materials", title: "Fine Balu" },
]

const CATEGORIES = ["All", "Cement Delivery", "Truck Loading", "Customer Sites", "Building Materials"]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [selectedImage, setSelectedImage] = React.useState<typeof GALLERY_IMAGES[0] | null>(null)

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  )

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Our Gallery</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Glimpses of our daily operations, deliveries, and happy customer sites in Kushinagar.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 px-2 hide-scrollbar w-full md:w-auto justify-start md:justify-center">
          <Filter className="w-5 h-5 text-muted-foreground mr-2 shrink-0 hidden md:block" />
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all shrink-0 ${
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

      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={image.id}
              className="break-inside-avoid"
            >
              <div 
                className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <ZoomIn className="w-10 h-10 text-white mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                  <h3 className="text-white font-bold text-lg text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                  <p className="text-primary text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-primary font-medium">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
