import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore the portfolio of Green Star Designs & Consultants — residential, commercial, institutional, and industrial projects across Bihar and India. 500+ projects completed.",
  openGraph: {
    title: "Project Portfolio | Green Star Designs & Consultants",
    description: "View our featured projects including Sayam Kunj Complex, Zakir Complex, Green Valley School, and more across Bihar and India.",
    url: "https://greenstardesign.in/projects",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Green Star Designs & Consultants" }],
  },
  alternates: {
    canonical: "https://greenstardesign.in/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
