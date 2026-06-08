import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Shree Laxmi Traders",
  description: "View photos of our cement, TMT, balu, gitti deliveries, and happy customer sites in Kushinagar.",
}

export default function GalleryPage() {
  return (
    <div className="w-full">
      <GalleryGrid />
    </div>
  )
}
