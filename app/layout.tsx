import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seversoft Technologies",
  description:
    "Premium fintech and software solutions landing page for Seversoft Technologies, a Nigeria-based technology company.",
  keywords: ["Seversoft Technologies", "fintech", "software solutions", "Nigeria", "landing page"],
  openGraph: {
    title: "Seversoft Technologies",
    description: "Build Smart. Scale Fast. Grow Confidently.",
    type: "website",
  },
  icons: {
    icon: "/media/seversoft_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
