import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Laxmi Traders | Cement, Chhad, Balu & Gitti Store",
  description: "Your trusted partner for building materials in Turkpatti, Kushinagar. We provide Tata Tiscon, Jindal, Kamdhenu, and top-quality Cement, Balu, and Gitti.",
  keywords: "Cement Shop Kushinagar, TMT Bar Dealer Kushinagar, Balu Gitti Supplier Kushinagar, Tata Cement Dealer, Jindal Saria Dealer",
  manifest: "/manifest.json",
  openGraph: {
    title: "Shree Laxmi Traders | Premium Building Materials",
    description: "Your trusted partner for building materials in Turkpatti, Kushinagar.",
    url: "https://shreelaxmitraders.in",
    siteName: "Shree Laxmi Traders",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shree Laxmi Traders",
    "image": "https://shreelaxmitraders.in/logo.png",
    "@id": "https://shreelaxmitraders.in",
    "url": "https://shreelaxmitraders.in",
    "telephone": "+917058669488",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Turkpatti",
      "addressLocality": "Kushinagar",
      "postalCode": "274406",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} min-h-full flex flex-col font-sans antialiased pb-16 md:pb-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopMarquee />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
