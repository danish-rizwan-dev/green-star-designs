import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Green Star Designs & Consultants Pvt. Ltd. in Bettiah, Bihar. Call, email, or visit our office for architecture, engineering & construction consultancy. Free consultation available.",
  openGraph: {
    title: "Contact Green Star Designs & Consultants Pvt. Ltd.",
    description: "Reach out to Bettiah's top architecture & civil engineering firm. Free consultation for your construction project.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Green Star Designs - Contact Us" }],
  },
  twitter: {
    title: "Contact Green Star Designs & Consultants Pvt. Ltd.",
    description: "Contact Bettiah's premier architecture & engineering consultancy. Free consultation available.",
  },
  alternates: {
    canonical: "https://greenstardesign.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
