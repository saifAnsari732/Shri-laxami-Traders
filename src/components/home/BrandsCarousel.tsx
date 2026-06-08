"use client"

import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"

const BRANDS = [
  { name: "Tata Tiscon", color: "text-blue-600" },
  { name: "Jindal Panther", color: "text-red-600" },
  { name: "Kamdhenu", color: "text-orange-500" },
  { name: "Captain Chhad", color: "text-blue-800" },
  { name: "UltraTech Cement", color: "text-yellow-500" },
  { name: "ACC Cement", color: "text-gray-600" },
]

export function BrandsCarousel() {
  return (
    <section className="py-12 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-xl font-semibold text-muted-foreground uppercase tracking-widest">
          Trusted Partners & Brands
        </h3>
      </div>
      <div className="relative">
        {/* Gradient overlays for infinite effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="brands-swiper !ease-linear"
        >
          {BRANDS.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-24 flex items-center justify-center p-6 grayscale grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 scale-110 cursor-pointer">
                {/* Fallback text since we don't have SVGs */}
                <span className={`text-2xl md:text-3xl font-black tracking-tighter ${brand.color}`}>
                  {brand.name.toUpperCase()}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
