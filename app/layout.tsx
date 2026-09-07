import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AnimatedBot from "./components/AnimatedBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenstardesign.in"),
  title: {
    default: "Green Star Designs & Construction | Architecture & Engineering, Bettiah Bihar",
    template: "%s | Green Star Designs & Construction",
  },
  description: "Green Star Designs & Construction Pvt. Ltd. — top architecture, civil engineering & construction firm in Bettiah, Bihar. Led by Er. Wasi Reza. Premium architectural design, structural engineering, site supervision, BOQ estimation, interior & exterior design across India.",
  keywords: [
    "Green Star Designs", "Green Star Designs Construction", "Green Star Designs & Construction",
    "Wasi Reza", "Er Wasi Reza", "Wasi Reza architect", "Wasi Reza engineer",
    "architecture firm Bettiah", "civil engineer Bihar", "structural design India",
    "construction company", "architectural design", "building planning",
    "interior design", "exterior design", "site inspection", "project supervision",
    "BOQ estimation", "construction management", "Bettiah architect",
    "Bihar civil engineer", "building contractor Bihar", "home design India",
    "commercial architecture", "residential design", "structural engineering",
    "vaastu compliant design", "India architecture firm",
    "Green Star Designs Bettiah", "Green Star Designs Bihar",
    "architecture Bettiah Bihar", "engineering consultancy Bihar"
  ],
  authors: [{ name: "Green Star Designs & Construction Pvt. Ltd." }],
  creator: "Green Star Designs & Construction Pvt. Ltd.",
  publisher: "Green Star Designs & Construction Pvt. Ltd.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greenstardesign.in",
    siteName: "Green Star Designs & Construction",
    title: "Green Star Designs & Construction | Architecture & Engineering, Bettiah Bihar",
    description: "Premium architecture, civil engineering & construction services in Bettiah, Bihar. Led by Er. Wasi Reza. Serving all India with architectural design, structural engineering & project supervision.",
    images: [{
      url: "https://greenstardesign.in/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Green Star Designs & Construction — Architecture & Engineering",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Star Designs & Construction | Architecture & Engineering, Bettiah Bihar",
    description: "Architecture, civil engineering & construction services in Bettiah, Bihar. Led by Er. Wasi Reza.",
    images: ["https://greenstardesign.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://greenstardesign.in",
  },
  verification: {
    google: "f_u40XPoiSJ7UacEIVuhbCWbCl_3iBTJzWUNfdhz2vo",
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
    <html lang="en-IN" className="overflow-x-hidden">
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
                  name: "Green Star Designs & Construction Pvt. Ltd.",
                  url: "https://greenstardesign.in",
                  logo: "https://greenstardesign.in/logo.png",
                  description: "Premium architecture, civil engineering, structural design, and construction services. Led by Er. Wasi Reza.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bettiah",
                    addressLocality: "Bettiah",
                    addressRegion: "Bihar",
                    addressCountry: "IN",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-7358331731",
                    contactType: "customer service",
                    availableLanguage: ["English", "Hindi"],
                  },
                  sameAs: [
                    "https://www.facebook.com/people/Green-Star-Designs-Construction-Pvt-Ltd/61574672838764/",
                    "https://www.instagram.com/greenstardesigns_",
                    "https://www.linkedin.com/company/green-star-designs-Construction-pvt-ltd",
                  ],
                  founder: {
                    "@type": "Person",
                    name: "Er. Wasi Reza",
                    url: "https://greenstardesign.in/about",
                    jobTitle: "Board of Director",
                    sameAs: [
                      "https://www.linkedin.com/in/er-wasi-reza-888a1244/",
                    ],
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://greenstardesign.in/#service",
                  name: "Green Star Designs & Construction Pvt. Ltd.",
                  url: "https://greenstardesign.in",
                  description: "Architecture, civil engineering, structural design, construction, site inspection, project supervision, interior design, exterior design, BOQ estimation.",
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
                  name: "Green Star Designs & Construction Pvt. Ltd.",
                  image: "https://greenstardesign.in/logo.png",
                  url: "https://greenstardesign.in",
                  telephone: "+91-7358331731",
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
                {
                  "@type": "Person",
                  "@id": "https://greenstardesign.in/#wasireza",
                  name: "Er. Wasi Reza",
                  url: "https://greenstardesign.in/about",
                  jobTitle: "Board of Director — Green Star Designs & Construction",
                  description: "Er. Wasi Reza is a Board of Director at Green Star Designs & Construction Pvt. Ltd. with M.Tech in Structural Engineering and 10+ years of experience. Registered with UD&HD, experienced in Military projects, and member of ASCE, CSCE, IAENG, and DJFRVO.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bettiah",
                    addressRegion: "Bihar",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/er-wasi-reza-888a1244/",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Green Star Designs & Construction Pvt. Ltd.",
                    url: "https://greenstardesign.in",
                  },
                  alumniOf: [
                    { "@type": "EducationalOrganization", name: "M.Tech Structural Engineering" },
                    { "@type": "EducationalOrganization", name: "B.Tech Civil Engineering" },
                  ],
                  hasCredential: [
                    "Registered Engineer — Urban Development & Housing Department",
                    "Sr. Affiliated Member of ASCE America",
                    "CSCE (Canada)",
                    "IAENG (Hong Kong)",
                    "DJFRVO (India)",
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
