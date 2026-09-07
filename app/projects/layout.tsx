import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore the portfolio of Green Star Designs & Construction — residential, commercial, institutional, and industrial projects across Bihar and India. 500+ projects completed.",
  openGraph: {
    title: "Project Portfolio | Green Star Designs & Construction",
    description: "View our featured projects including Sayam Kunj Complex, Zakir Complex, Green Valley School, and more across Bihar and India.",
    url: "https://greenstardesign.in/projects",
    images: [{ url: "https://greenstardesign.in/logo.png", width: 1254, height: 1254, alt: "Green Star Designs & Construction" }],
  },
  alternates: {
    canonical: "https://greenstardesign.in/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
