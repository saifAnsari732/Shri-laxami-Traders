"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-card pt-16 pb-24 md:pb-8 border-t border-border relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                SL
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-foreground">
                  Shree Laxmi
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                  Traders
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your trusted partner for premium building materials. We provide the highest quality cement, TMT bars, balu, and gitti in Kushinagar district.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Products</Link></li>
              <li><Link href="/offers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Today's Offers</Link></li>
              <li><Link href="/gifts" className="text-muted-foreground hover:text-primary transition-colors text-sm">Rewards Program</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Top Materials</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">UltraTech Cement</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tata Tiscon TMT</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Jindal Panther Bar</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Premium River Sand</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Crushed Stone (Gitti)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Shree Laxmi Traders,<br />Turkpatti, Kushinagar,<br />Uttar Pradesh - 274406</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+917058669488" className="hover:text-primary">+91 7058669488</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@shreelaxmitraders.in" className="hover:text-primary">info@shreelaxmitraders.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Shree Laxmi Traders. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
