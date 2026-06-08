"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Tag, Image as ImageIcon, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const MOBILE_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/offers", label: "Offers", icon: Tag },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/contact", label: "Contact", icon: MapPin },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-card border-t border-border/50 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.6)] pb-safe">
      <div className="flex items-center justify-around h-[72px] px-2">
        {MOBILE_LINKS.map((link) => {
          const isActive = pathname === link.href
          const Icon = link.icon

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 relative transition-all duration-300",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full shadow-[0_4px_10px_rgba(245,158,11,0.5)]" />
              )}
              
              <div className={cn(
                "flex items-center justify-center p-2 rounded-full transition-all duration-300",
                isActive ? "bg-primary/10 mt-1" : "bg-transparent"
              )}>
                <Icon className={cn("w-6 h-6", isActive && "fill-primary/20")} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "text-[10px] font-bold transition-all duration-300",
                isActive ? "text-primary" : "font-medium"
              )}>{link.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
