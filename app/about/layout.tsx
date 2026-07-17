import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Green Star Designs & Consultants Pvt. Ltd. — a premier architecture and engineering consultancy based in Bettiah, Bihar. Meet our team of 15+ expert engineers led by Er. Wasi Reza and Er. Razida.",
  openGraph: {
    title: "About Green Star Designs & Consultants | Architecture & Engineering",
    description: "Meet the leadership team behind Green Star Designs. Board of Directors, advisors, and our journey since 2016.",
    url: "https://greenstardesign.in/about",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Green Star Designs & Consultants" }],
  },
  alternates: {
    canonical: "https://greenstardesign.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
