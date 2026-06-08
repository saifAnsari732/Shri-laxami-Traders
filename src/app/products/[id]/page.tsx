import { ALL_PRODUCTS } from "@/data/products"
import { notFound } from "next/navigation"
import { ShieldCheck, MessageCircle, Truck, PackageCheck, ArrowLeft } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import type { Metadata } from "next"

import { SuggestedProducts } from "@/components/products/SuggestedProducts"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  const product = ALL_PRODUCTS.find(p => p.id === id)
  
  if (!product) return { title: "Product Not Found" }
  
  return {
    title: `${product.name} | Shree Laxmi Traders`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  const product = ALL_PRODUCTS.find(p => p.id === id)

  if (!product) {
    notFound()
  }

  // Get up to 4 related products (same category first, then others, excluding current)
  let relatedProducts = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== id)
  if (relatedProducts.length < 4) {
    const otherProducts = ALL_PRODUCTS.filter(p => p.category !== product.category && p.id !== id)
    relatedProducts = [...relatedProducts, ...otherProducts].slice(0, 4)
  } else {
    relatedProducts = relatedProducts.slice(0, 4)
  }

  const WHATSAPP_NUMBER = "917058669488"
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Shree Laxmi Traders,\n\nI want to inquire about:\nProduct: ${product.name}\nBrand: ${product.brand}\n\nPlease share the latest price and availability.`)}`

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="bg-card border border-border rounded-3xl p-6 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border/50 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold tracking-widest text-foreground uppercase border border-border shadow-sm">
                {product.category}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col h-full">
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                {product.brand} Brand
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Key Features:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-6 p-6 bg-muted/50 rounded-2xl mb-10 border border-border">
                <div className="flex items-center gap-3">
                  <PackageCheck className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">100% Genuine</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Fast Delivery</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] transition-all"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Ask for Price
                </a>
                <a
                  href="tel:+917058669488"
                  className="flex-1 flex items-center justify-center gap-3 bg-card border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  Call Now
                </a>
              </div>
              <p className="text-sm text-muted-foreground text-center sm:text-left mt-4">
                * Prices change daily. Contact us for today's wholesale rate.
              </p>
            </div>

          </div>
        </div>
        
        {/* Suggested Products Section */}
        <SuggestedProducts products={relatedProducts} />
      </div>
    </div>
  )
}
