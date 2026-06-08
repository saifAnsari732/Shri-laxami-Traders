import { ContactInfo } from "@/components/contact/ContactInfo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Shree Laxmi Traders",
  description: "Get in touch with Shree Laxmi Traders in Turkpatti, Kushinagar for building materials inquiries and orders.",
}

export default function ContactPage() {
  return (
    <div className="w-full">
      <ContactInfo />
    </div>
  )
}
