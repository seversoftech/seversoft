import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seversoft Technologies",
  description:
    "Premium fintech and software solutions landing page for Seversoft Technologies, a Nigeria-based technology company.",
  keywords: ["Seversoft Technologies", "fintech", "software solutions", "Nigeria", "landing page"],
  openGraph: {
    title: "Seversoft Technologies",
    description: "Pay Smart. Pay Fast. Pay Soft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
