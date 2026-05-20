import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seversoft Technologies | Fintech, AI & Software Engineering Solutions",
  description: "Seversoft Technologies builds premium fintech infrastructure, AI-powered systems, and scalable software solutions for modern businesses. Africa's leading partner for digital growth.",
  keywords: [
    "Seversoft Technologies", 
    "Fintech Africa", 
    "AI Solutions", 
    "Software Engineering Africa", 
    "Custom Software Development",
    "Digital Transformation",
    "Scalable Infrastructure"
  ],
  authors: [{ name: "Seversoft Technologies" }],
  creator: "Seversoft Technologies",
  publisher: "Seversoft Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Seversoft Technologies | Build Smart. Scale Fast.",
    description: "Premium fintech and software solutions for modern businesses.",
    url: "https://seversoftech.com", // Update this with your actual domain
    siteName: "Seversoft Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seversoft Technologies | Fintech & AI Solutions",
    description: "Engineering high-performance digital systems for ambitious businesses.",
  },
};

import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Seversoft Technologies",
    "url": "https://seversoftech.com",
    "logo": "https://seversoftech.com/media/seversoft_logo.png",
    "description": "Premium fintech and software solutions company in Africa specializing in AI systems and scalable infrastructure.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Africa"
    },
    "sameAs": [
      "https://twitter.com/seversoft",
      "https://linkedin.com/company/seversoft"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
