"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-md py-4"
          : "bg-background/30 backdrop-blur-md py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary  to-primary flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:shadow-primary/50 group-hover:scale-105 transition-all duration-300"
          >
            SL
          </motion.div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
              Shree Laxmi
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold group-hover:text-foreground transition-colors mt-0.5">
              Traders
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold transition-colors group"
              >
                <span className={isActive ? "text-primary" : "text-foreground/70 group-hover:text-foreground"}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-foreground/30 rounded-t-full transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <ThemeToggle />
          <Link
            href="tel:+917058669488"
            className="hidden sm:inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Link>
        </div>
      </div>
    </header>
  )
}
