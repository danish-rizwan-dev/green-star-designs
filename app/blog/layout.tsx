import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert insights on architecture, structural engineering, construction management, and design from Green Star Designs & Consultants. Learn about building in Bihar and across India.",
  openGraph: {
    title: "Blog | Green Star Designs & Consultants",
    description: "Architecture, engineering, and construction insights from the team at Green Star Designs.",
    url: "https://greenstardesign.in/blog",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Green Star Designs Blog" }],
  },
  alternates: {
    canonical: "https://greenstardesign.in/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
