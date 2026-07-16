import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AnimatedBot from "./components/AnimatedBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenstardesign.in"),
  title: {
    default: "Green Star Designs & Consultants Pvt. Ltd. | Architecture & Engineering",
    template: "%s | Green Star Designs",
  },
  description: "Green Star Designs & Consultants Pvt. Ltd. - Top architecture, civil engineering, structural design & construction consultancy in Bettiah, Bihar. Premium architectural design, site supervision, BOQ estimation, interior & exterior design services across India. Turning Ideas Into Reality.",
  keywords: [
    "Green Star Design", "Green Star Designs", "Green Star Designs & Consultants",
    "architecture firm Bettiah", "civil engineer Bihar", "structural design India",
    "construction consultancy", "architectural design", "building planning",
    "interior design", "exterior design", "site inspection", "project supervision",
    "BOQ estimation", "construction management", "Bettiah architect",
    "Bihar civil engineer", "building contractor Bihar", "home design India",
    "commercial architecture", "residential design", "structural engineering",
    "vaastu compliant design", "India architecture firm"
  ],
  authors: [{ name: "Green Star Designs & Consultants Pvt. Ltd." }],
  creator: "Green Star Designs & Consultants Pvt. Ltd.",
  publisher: "Green Star Designs & Consultants Pvt. Ltd.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greenstardesign.in",
    siteName: "Green Star Designs & Consultants Pvt. Ltd.",
    title: "Green Star Designs & Consultants Pvt. Ltd. | Architecture & Engineering",
    description: "Premium architecture, civil engineering, structural design & construction consultancy in Bettiah, Bihar. Serving all India with architectural design, project supervision & more.",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Green Star Designs & Consultants",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Star Designs & Consultants Pvt. Ltd. | Architecture & Engineering",
    description: "Premium architecture, civil engineering, structural design & construction consultancy in Bettiah, Bihar.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://greenstardesign.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Bettiah",
    "geo.position": "26.8029;84.5036",
    "ICBM": "26.8029, 84.5036",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://greenstardesign.in/#organization",
                  name: "Green Star Designs & Consultants Pvt. Ltd.",
                  url: "https://greenstardesign.in",
                  logo: "https://greenstardesign.in/logo.png",
                  description: "Premium architecture, civil engineering, structural design, and construction consultancy services.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bettiah",
                    addressLocality: "Bettiah",
                    addressRegion: "Bihar",
                    addressCountry: "IN",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-",
                    contactType: "customer service",
                    availableLanguage: ["English", "Hindi"],
                  },
                  sameAs: [
                    "https://www.facebook.com/people/Green-Star-Designs-Consultants-Pvt-Ltd/61574672838764/",
                    "https://www.instagram.com/greenstardesigns_",
                    "https://www.linkedin.com/company/green-star-designs-consultants-pvt-ltd",
                  ],
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://greenstardesign.in/#service",
                  name: "Green Star Designs & Consultants Pvt. Ltd.",
                  url: "https://greenstardesign.in",
                  description: "Architecture, civil engineering, structural design, construction consultancy, site inspection, project supervision, interior design, exterior design, BOQ estimation.",
                  areaServed: "India",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Architecture & Engineering Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Design" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structural Design" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Design" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site Inspection" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Supervision" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "BOQ & Estimation" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Consultancy" } },
                    ],
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://greenstardesign.in/#business",
                  name: "Green Star Designs & Consultants Pvt. Ltd.",
                  image: "https://greenstardesign.in/logo.png",
                  url: "https://greenstardesign.in",
                  telephone: "+91-",
                  priceRange: "₹₹",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bettiah",
                    addressRegion: "Bihar",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 26.8029,
                    longitude: 84.5036,
                  },
                  openingHoursSpecification: [
                    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
                    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
                    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
                    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
                    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
                    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
                  ],
                },
              ],
            }),
          }}
        />
        <Navigation />
        <CustomCursor />
        <AnimatedBot />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
