import { ProductsCatalog } from "@/components/products/ProductsCatalog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Shree Laxmi Traders",
  description: "Browse our complete catalog of Cement, TMT Bars, Balu, and Gitti available in Kushinagar.",
}

export default function ProductsPage() {
  return (
    <div className="w-full">
      <ProductsCatalog />
    </div>
  )
}
