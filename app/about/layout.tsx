import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Green Star Designs & Consultants Pvt. Ltd. - Bettiah's premier architecture and civil engineering firm. Meet our board of directors, leadership team, and discover our mission, values, and 500+ completed projects journey since 2016.",
  openGraph: {
    title: "About Green Star Designs & Consultants Pvt. Ltd.",
    description: "Premium architecture, civil engineering & construction consultancy firm based in Bettiah, Bihar. 500+ projects completed since 2016.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Green Star Designs - About Us" }],
  },
  twitter: {
    title: "About Green Star Designs & Consultants Pvt. Ltd.",
    description: "Premium architecture & civil engineering firm in Bettiah, Bihar. 500+ projects completed since 2016.",
  },
  alternates: {
    canonical: "https://greenstardesign.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
