import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore comprehensive architecture, engineering & construction services by Green Star Designs in Bettiah, Bihar. Architectural Design, Structural Design, Interior Design, Exterior Design, Site Inspection, Project Supervision, BOQ & Estimation, Construction Consultancy.",
  openGraph: {
    title: "Architecture & Engineering Services | Green Star Designs",
    description: "8 premium services: Architectural Design, Structural Design, Interior Design, Exterior Design, Site Inspection, Project Supervision, BOQ & Estimation, Construction Consultancy.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Green Star Designs - Services" }],
  },
  twitter: {
    title: "Architecture & Engineering Services | Green Star Designs",
    description: "Architecture, structural design, interior/exterior design, site inspection, project supervision & more in Bettiah, Bihar.",
  },
  alternates: {
    canonical: "https://greenstardesign.in/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
