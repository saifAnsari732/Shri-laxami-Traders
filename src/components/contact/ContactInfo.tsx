"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react"

export function ContactInfo() {
  const WHATSAPP_NUMBER = "917058669488"
  const getWhatsAppLink = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Shree Laxmi Traders, I want to inquire about some materials.")}`
  }

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We are here to help you build your dream project. Reach out to us for the best prices and quality materials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Shop Address</h4>
                  <p className="text-muted-foreground">Shree Laxmi Traders<br/>Turkpatti, Kushinagar<br/>Uttar Pradesh - 274406</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Sunday<br/>07:00 AM - 08:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-muted-foreground flex flex-col gap-1">
                    <a href="tel:+917058669488" className="hover:text-primary transition-colors">+91 7058669488</a>
                    <a href="tel:+919793354664" className="hover:text-primary transition-colors">+91 9793354664</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="tel:+917058669488"
              className="flex items-center justify-center gap-2 bg-primary text-white py-4 px-6 rounded-2xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-2xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card p-2 rounded-3xl border border-border shadow-sm h-[400px] lg:h-auto min-h-[400px] relative overflow-hidden group"
        >
          {/* Using an iframe for Google Maps. Replace src with actual embed URL if available. For demo, we show a general Kushinagar map. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114138.99503929452!2d83.896695!3d26.7441589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993f3d7fb8c9f0d%3A0xc4f4477c70e28f3b!2sKushinagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1.25rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
        </motion.div>
      </div>
    </div>
  )
}
