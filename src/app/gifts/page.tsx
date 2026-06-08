import { GiftsSection } from "@/components/gifts/GiftsSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rewards & Gifts | Shree Laxmi Traders",
  description: "Unlock free gifts with bulk purchases of cement and building materials.",
}

export default function GiftsPage() {
  return (
    <div className="w-full">
      <GiftsSection />
    </div>
  )
}
