import { OffersList } from "@/components/offers/OffersList"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Offers & Deals | Shree Laxmi Traders",
  description: "Check out our latest festival offers, daily deals, and bulk discounts on construction materials.",
}

export default function OffersPage() {
  return (
    <div className="w-full">
      <OffersList />
    </div>
  )
}
