"use client"

import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Star } from "lucide-react"

import "swiper/css"
import "swiper/css/pagination"

const REVIEWS = [
  {
    name: "Ramesh Singh",
    role: "Contractor",
    content: "Best quality Tata Tiscon and cement available. Same day delivery is very helpful for our projects in Kushinagar.",
    rating: 5,
  },
  {
    name: "Suresh Gupta",
    role: "Home Builder",
    content: "Very genuine rates compared to the market. Ordered 500 bags of UltraTech cement and it was delivered within hours.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Civil Engineer",
    content: "I always recommend Shree Laxmi Traders to my clients for building materials. They maintain high trust and quality.",
    rating: 5,
  },
  {
    name: "Manoj Tiwari",
    role: "Village Customer",
    content: "Good behavior of owner and staff. Gitti and Balu are of premium quality. Highly recommended for house construction.",
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our trusted contractors and customers say about us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 px-4"
          >
            {REVIEWS.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card p-8 rounded-3xl border border-border shadow-sm h-full flex flex-col relative mt-8">
                  {/* Avatar bubble */}
                  <div className="absolute -top-8 left-8 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-card flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  
                  <div className="flex gap-1 mb-4 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 italic mb-6 flex-grow">
                    "{review.content}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{review.name}</h4>
                    <p className="text-sm text-primary font-medium">{review.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
