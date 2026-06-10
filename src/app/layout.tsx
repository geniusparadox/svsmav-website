import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.svsmav.com"),
  title: "SVS Maverick | Your Partner for Welding and Manufacturing Solutions",
  description: "SVS Maverick - Over 60 years of expertise in welding technology, copper alloys, flexible busbars, and manufacturing solutions. Connections that last.",
  keywords: "welding, manufacturing, copper alloys, flexible busbars, laminated copper connectors, welding products, milling equipment, SVS Maverick",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "SVS Maverick",
    locale: "en_US",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SVS Maverick Private Limited",
  url: "https://www.svsmav.com",
  logo: "https://www.svsmav.com/logo-v3.png",
  email: "sales@svsmav.com",
  telephone: "+91-72040-57172",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No 40/A, Site No 193/3, Narayanapura Main Road, Peenya Industrial Area",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560058",
    addressCountry: "IN",
  },
  description:
    "Manufacturer of flexible busbars, laminated copper connectors, welding electrodes, and copper alloy products serving customers in India and worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
