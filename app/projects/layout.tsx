import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "View our portfolio of 500+ completed architecture, engineering & construction projects by Green Star Designs in Bettiah, Bihar and across India. Residential, Commercial, Industrial, Institutional, Villa & Apartment projects.",
  openGraph: {
    title: "Project Portfolio | Green Star Designs & Consultants",
    description: "Browse our completed projects - residential, commercial, industrial, institutional designs by Green Star Designs in Bettiah, Bihar.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Green Star Designs - Project Portfolio" }],
  },
  twitter: {
    title: "Project Portfolio | Green Star Designs & Consultants",
    description: "Residential, commercial & industrial projects by Green Star Designs in Bettiah, Bihar.",
  },
  alternates: {
    canonical: "https://greenstardesign.in/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
