"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Ruler, Building2, Home, Building, Search, HardHat, Calculator, MapPin,
  ChevronDown, CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeader from "../components/SectionHeader";

const services = [
  {
    icon: Ruler,
    title: "Architectural Design",
    shortDesc: "Innovative architectural solutions for residential and commercial projects.",
    overview: "Our architectural design services cover everything from initial concept sketches to detailed construction drawings. We create spaces that are functional, beautiful, and tailored to your specific needs and budget.",
    benefits: [
      "Customized designs reflecting your vision",
      "3D visualization and walkthroughs",
      "Sustainable and eco-friendly solutions",
      "Compliance with local building codes",
      "Space optimization for maximum utility",
    ],
    process: [
      "Initial consultation and requirement gathering",
      "Site analysis and feasibility study",
      "Concept design and client approval",
      "Detailed architectural drawings",
      "3D modeling and visualization",
      "Final documentation and approvals",
    ],
    deliverables: [
      "Floor plans and elevations",
      "3D rendered views",
      "Working drawings",
      "Material specifications",
      "Approval drawings for authorities",
    ],
  },
  {
    icon: Building2,
    title: "Structural Design",
    shortDesc: "Robust structural analysis ensuring safety and stability.",
    overview: "Our structural engineering team ensures that every building we design is safe, stable, and built to last. We use advanced analysis software and follow international standards for structural design.",
    benefits: [
      "Earthquake-resistant design",
      "Optimized material usage",
      "Load-bearing capacity analysis",
      "Foundation design expertise",
      "Long-term structural integrity",
    ],
    process: [
      "Structural requirement analysis",
      "Load calculation and modeling",
      "Structural system selection",
      "Detailed analysis and design",
      "Drawing preparation",
      "Peer review and validation",
    ],
    deliverables: [
      "Structural drawings",
      "Load calculations",
      "Foundation design",
      "Reinforcement details",
      "Structural stability report",
    ],
  },
  {
    icon: Home,
    title: "Interior Design",
    shortDesc: "Premium interior spaces maximizing comfort and aesthetics.",
    overview: "We create interior spaces that reflect your personality while maximizing comfort and utility. From material selection to furniture layout, we handle every detail.",
    benefits: [
      "Personalized design themes",
      "Optimal space utilization",
      "Premium material selection",
      "Lighting and ambiance design",
      "Furniture and fixture planning",
    ],
    process: [
      "Client lifestyle analysis",
      "Concept development",
      "Material and color selection",
      "Detailed interior drawings",
      "3D visualization",
      "Execution supervision",
    ],
    deliverables: [
      "Interior layout plans",
      "Ceiling and lighting designs",
      "Material and finish schedules",
      "Furniture layouts",
      "3D interior renders",
    ],
  },
  {
    icon: Building,
    title: "Exterior Design",
    shortDesc: "Stunning elevations and façades creating lasting impressions.",
    overview: "The exterior of your building is its identity. We design stunning elevations and façades that create lasting impressions while ensuring durability and weather resistance.",
    benefits: [
      "Unique and modern façade designs",
      "Weather-resistant material selection",
      "Energy-efficient exterior solutions",
      "Landscaping integration",
      "Enhanced property value",
    ],
    process: [
      "Architectural style selection",
      "Elevation concept design",
      "Material and texture selection",
      "Detailed elevation drawings",
      "3D exterior visualization",
      "Construction guidance",
    ],
    deliverables: [
      "Elevation drawings",
      "3D exterior views",
      "Material specifications",
      "Color scheme proposals",
      "Landscaping plans",
    ],
  },
  {
    icon: Search,
    title: "Site Inspection",
    shortDesc: "Thorough quality checks ensuring construction standards.",
    overview: "Regular site inspections are crucial for quality construction. Our engineers visit sites at critical stages to ensure work adheres to design specifications and quality standards.",
    benefits: [
      "Regular quality monitoring",
      "Early identification of issues",
      "Compliance verification",
      "Material quality checks",
      "Progress documentation",
    ],
    process: [
      "Pre-construction site survey",
      "Foundation inspection",
      "Structural stage checks",
      "Finishing quality audit",
      "Final handover inspection",
      "Defect liability inspection",
    ],
    deliverables: [
      "Inspection reports",
      "Quality checklists",
      "Deviation reports",
      "Photographic documentation",
      "Recommendations",
    ],
  },
  {
    icon: HardHat,
    title: "Project Supervision",
    shortDesc: "End-to-end management from groundbreaking to handover.",
    overview: "Our project supervision services ensure that your construction project runs smoothly, on time, and within budget. We coordinate all stakeholders and monitor every phase.",
    benefits: [
      "Dedicated project manager",
      "Timeline adherence",
      "Budget control",
      "Contractor coordination",
      "Risk management",
    ],
    process: [
      "Project kickoff meeting",
      "Schedule preparation",
      "Daily/weekly site monitoring",
      "Progress reporting",
      "Quality assurance checks",
      "Final handover coordination",
    ],
    deliverables: [
      "Project schedules",
      "Progress reports",
      "Meeting minutes",
      "Quality audit reports",
      "Completion certificates",
    ],
  },
  {
    icon: Calculator,
    title: "BOQ & Estimation",
    shortDesc: "Accurate cost estimation for transparent budgeting.",
    overview: "Accurate Bill of Quantities and cost estimation is essential for transparent budgeting. We provide detailed breakdowns to help you plan your finances effectively.",
    benefits: [
      "Transparent cost breakdown",
      "Material quantity accuracy",
      "Budget optimization",
      "Tender preparation support",
      "Financial planning assistance",
    ],
    process: [
      "Drawing analysis",
      "Quantity takeoff",
      "Rate analysis",
      "BOQ preparation",
      "Cost estimation",
      "Final documentation",
    ],
    deliverables: [
      "Detailed BOQ",
      "Rate analysis sheets",
      "Cost summary reports",
      "Material schedules",
      "Tender documents",
    ],
  },
  {
    icon: MapPin,
    title: "Construction Consultancy",
    shortDesc: "Expert guidance on construction methodologies and compliance.",
    overview: "Our construction consultancy services provide expert guidance on construction methodologies, material selection, regulatory compliance, and best practices.",
    benefits: [
      "Regulatory compliance guidance",
      "Construction methodology advice",
      "Material selection expertise",
      "Contractor evaluation",
      "Technical problem solving",
    ],
    process: [
      "Initial project assessment",
      "Regulatory requirement analysis",
      "Construction strategy development",
      "Ongoing technical support",
      "Issue resolution",
      "Final compliance verification",
    ],
    deliverables: [
      "Consultancy reports",
      "Compliance checklists",
      "Technical recommendations",
      "Method statements",
      "Final project reports",
    ],
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A residential project typically takes 3-6 months for design and 8-18 months for construction. We provide detailed schedules during the planning phase."
  },
  {
    question: "Do you handle government approvals?",
    answer: "Yes, we provide complete documentation support for building plan approvals, NOCs, and other regulatory requirements. Our team is well-versed with local municipal procedures."
  },
  {
    question: "What areas do you serve?",
    answer: "While based in Bettiah, Bihar, we serve clients across all of India. We have successfully completed projects in Bihar, Uttar Pradesh, West Bengal, and other states."
  },
  {
    question: "How do you ensure construction quality?",
    answer: "We implement a multi-level quality assurance system including regular site inspections, material testing, third-party audits, and strict adherence to design specifications."
  },
  {
    question: "Can you work with our existing contractor?",
    answer: "Absolutely. We can collaborate with your chosen contractor, providing design, supervision, and quality control services while your contractor handles execution."
  },
];

function ServiceModal({ service, onClose }: { service: typeof services[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <service.icon size={20} className="text-primary-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy-900">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-500"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-semibold text-navy-900 mb-2">Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{service.overview}</p>
          </div>

          <div>
            <h4 className="font-semibold text-navy-900 mb-3">Key Benefits</h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={14} className="text-gold-500 mt-0.5 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy-900 mb-3">Our Process</h4>
            <ul className="space-y-2">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-500 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy-900 mb-3">Deliverables</h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={14} className="text-gold-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service, index, onLearnMore }: { service: typeof services[0]; index: number; onLearnMore: () => void }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        layout
        className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-primary-500/5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
              <service.icon size={24} className="text-primary-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
            <p className="text-slate-600 text-sm mb-6">{service.shortDesc}</p>

            <button
              onClick={onLearnMore}
              className="w-full py-3 bg-primary-500 text-white font-medium text-sm rounded-xl hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
        >
          <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
          <ChevronDown 
            size={20} 
            className={`text-primary-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-slate-600 leading-relaxed">
            {faq.answer}
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              Our Services
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive architecture and engineering solutions tailored to your unique project requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} onLearnMore={() => setSelectedService(service)} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-primary-500">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Contact us today for a free consultation and project assessment.
            </p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-lg">
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
