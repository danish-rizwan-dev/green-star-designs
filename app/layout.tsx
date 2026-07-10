import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Green Star Designs & Consultants Pvt. Ltd. | Architecture & Engineering",
    template: "%s | Green Star Designs",
  },
  description: "Premium architecture, civil engineering, structural design, and construction consultancy services. Turning Ideas Into Reality. Based in Bettiah, Bihar, serving all India.",
  keywords: [
    "architecture", "civil engineering", "structural design", "construction consultancy",
    "site inspection", "project supervision", "Bettiah", "Bihar", "India",
    "architectural design", "building planning", "interior design", "exterior design",
    "BOQ estimation", "construction management", "Green Star Designs"
  ],
  authors: [{ name: "Green Star Designs & Consultants Pvt. Ltd." }],
  creator: "Green Star Designs & Consultants Pvt. Ltd.",
  publisher: "Green Star Designs & Consultants Pvt. Ltd.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greenstardesigns.com",
    siteName: "Green Star Designs & Consultants Pvt. Ltd.",
    title: "Green Star Designs & Consultants Pvt. Ltd.",
    description: "Premium architecture, civil engineering, and construction consultancy. Turning Ideas Into Reality.",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Green Star Designs & Consultants",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Star Designs & Consultants Pvt. Ltd.",
    description: "Premium architecture, civil engineering, and construction consultancy.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://greenstardesigns.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
