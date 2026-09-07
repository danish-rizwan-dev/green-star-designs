import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive architecture and engineering services by Green Star Designs & Construction: Architectural Design, Structural Design, Interior Design, Site Inspection, Project Supervision, BOQ & Estimation, and Construction Consultancy.",
  openGraph: {
    title: "Architecture & Engineering Services | Green Star Designs",
    description: "From architectural design to construction consultancy — we offer end-to-end services for residential, commercial, and institutional projects.",
    url: "https://greenstardesign.in/services",
    images: [{ url: "https://greenstardesign.in/logo.png", width: 1254, height: 1254, alt: "Green Star Designs & Construction" }],
  },
  alternates: {
    canonical: "https://greenstardesign.in/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
