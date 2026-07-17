import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Green Star Designs & Consultants Pvt. Ltd. for a free consultation. Based in Bettiah, Bihar. Call +91 7358331731 or email greenstardesignbth@gmail.com.",
  openGraph: {
    title: "Contact Green Star Designs & Consultants | Free Consultation",
    description: "Get in touch with our team for architecture, engineering, and construction consultancy services. Office at Bettiah, Bihar.",
    url: "https://greenstardesign.in/contact",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Green Star Designs & Consultants" }],
  },
  alternates: {
    canonical: "https://greenstardesign.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
