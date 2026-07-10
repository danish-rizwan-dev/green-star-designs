"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Ruler, XCircle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeader from "../components/SectionHeader";

const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Villa", "Apartment"];

const projects = [
  {
    id: 1,
    name: "The Emerald Residence",
    category: "Residential",
    location: "Bettiah, Bihar",
    year: "2025",
    area: "4,500 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "A luxurious 4-bedroom villa featuring modern amenities, sustainable design elements, and premium finishes. The project included complete architectural design, structural engineering, and interior design services.",
    features: ["4 Bedrooms", "Swimming Pool", "Smart Home System", "Solar Panels", "Landscaped Garden"],
  },
  {
    id: 2,
    name: "Skyline Corporate Tower",
    category: "Commercial",
    location: "Patna, Bihar",
    year: "2024",
    area: "75,000 sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "A 12-story commercial complex with smart building technology, premium office spaces, and underground parking. Designed with earthquake-resistant structural systems and energy-efficient HVAC.",
    features: ["12 Floors", "Smart Building Tech", "Underground Parking", "Conference Facilities", "Rooftop Terrace"],
  },
  {
    id: 3,
    name: "Green Valley School",
    category: "Institutional",
    location: "Muzaffarpur, Bihar",
    year: "2024",
    area: "45,000 sq ft",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    description: "State-of-the-art educational facility designed for 2000 students. Features modern laboratories, a library, auditorium, sports facilities, and eco-friendly construction materials.",
    features: ["50 Classrooms", "Science Labs", "Library", "Auditorium", "Sports Complex"],
  },
  {
    id: 4,
    name: "Royal Heights Apartments",
    category: "Apartment",
    location: "Bettiah, Bihar",
    year: "2023",
    area: "60,000 sq ft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    description: "Premium residential complex with 48 units featuring rooftop gardens, community hall, gymnasium, and 24/7 security. Designed with Vaastu principles and modern aesthetics.",
    features: ["48 Units", "Rooftop Garden", "Community Hall", "Gymnasium", "24/7 Security"],
  },
  {
    id: 5,
    name: "Heritage Villa",
    category: "Villa",
    location: "Darbhanga, Bihar",
    year: "2023",
    area: "8,000 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    description: "Traditional architecture blended with modern comforts in a sprawling 2-acre estate. Features courtyard design, traditional pillars, and modern amenities seamlessly integrated.",
    features: ["5 Bedrooms", "Courtyard", "Traditional Architecture", "2-Acre Estate", "Modern Kitchen"],
  },
  {
    id: 6,
    name: "Industrial Park Phase I",
    category: "Industrial",
    location: "Bihta, Bihar",
    year: "2022",
    area: "50,000 sq ft",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
    description: "50,000 sq ft industrial facility with optimized logistics, heavy-duty flooring, and advanced safety infrastructure. Designed for manufacturing and warehousing operations.",
    features: ["Heavy-Duty Flooring", "Loading Docks", "Fire Safety Systems", "High Ceilings", "Power Backup"],
  },
  {
    id: 7,
    name: "Sunrise Residency",
    category: "Residential",
    location: "Bettiah, Bihar",
    year: "2022",
    area: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Modern 3-bedroom family home with open floor plan, large windows for natural light, and energy-efficient design. Features a home office and landscaped front yard.",
    features: ["3 Bedrooms", "Home Office", "Open Floor Plan", "Energy Efficient", "Landscaped Yard"],
  },
  {
    id: 8,
    name: "City Center Mall",
    category: "Commercial",
    location: "Patna, Bihar",
    year: "2021",
    area: "120,000 sq ft",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd401154?w=800&q=80",
    description: "Multi-level shopping complex with 100+ retail spaces, food court, multiplex cinema, and ample parking. Designed with modern façade and efficient crowd flow management.",
    features: ["100+ Retail Spaces", "Food Court", "Multiplex", "Ample Parking", "Modern Façade"],
  },
  {
    id: 9,
    name: "MediCare Hospital Wing",
    category: "Institutional",
    location: "Muzaffarpur, Bihar",
    year: "2021",
    area: "35,000 sq ft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    description: "Specialized hospital wing with 50 beds, operation theaters, diagnostic center, and patient-friendly design. Compliant with healthcare building standards and infection control protocols.",
    features: ["50 Beds", "Operation Theaters", "Diagnostic Center", "Infection Control", "Patient-Friendly Design"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 bg-navy-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 section-padding max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Explore our portfolio of premium residential, commercial, and institutional projects across India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          {/* Category Filter */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-500 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-primary-500/5 
                             hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm">Click to view details</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-500 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-900/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center 
                           hover:bg-white transition-colors shadow-lg"
                >
                  <X size={20} className="text-navy-900" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-gold-500 text-navy-900 text-sm font-bold rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                  {selectedProject.name}
                </h2>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-primary-500" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-primary-500" />
                    {selectedProject.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler size={16} className="text-primary-500" />
                    {selectedProject.area}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <h3 className="font-semibold text-navy-900 mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
