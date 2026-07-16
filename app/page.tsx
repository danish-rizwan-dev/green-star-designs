"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronRight, 
  Ruler, 
  Building2, 
  Home, 
  Building, 
  Search, 
  HardHat, 
  Calculator, 
  MapPin, 
  CheckCircle2,
  Star,
  Quote,
  Phone,
  Clock,
  Calendar,
  Shield
} from "lucide-react";
import AnimatedCounter from "./components/AnimatedCounter";
import ScrollReveal from "./components/ScrollReveal";
import SectionHeader from "./components/SectionHeader";
import TextReveal from "./components/TextReveal";

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/apartmentBackgroundvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/85" />
      </div>

      {/* Floating Stats */}
      <div className="absolute top-32 right-8 hidden xl:block space-y-4">
        {[
          { value: 100, suffix: "+", label: "Satisfied Clients" },
          { value: 2000, suffix: "+", label: "Structural Designs" },
          { value: 500, suffix: "+", label: "Projects Completed" },
          { value: 15, suffix: "+", label: "Expert Engineers" },
          { value: 10, suffix: "+", label: "Years Experience" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
            className="glass-dark rounded-xl p-4 min-w-[180px]"
          >
            <div className="text-2xl font-display font-bold text-gold-500">{stat.value}{stat.suffix}</div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/20 to-gold-500/20 text-gold-400 text-[10px] sm:text-sm font-display font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase border border-gold-500/30 shadow-lg shadow-gold-500/10">
            ✦ Premium Architectural & Structural Solutions ✦
          </span>
        </motion.div>

        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]"
          >
            Designing Dreams
            <br className="hidden sm:block" />
            <span className="text-gold-500">Into Reality</span>
          </motion.h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display text-sm sm:text-xl md:text-2xl text-gold-400 max-w-3xl mx-auto mb-4 leading-relaxed tracking-wide"
          >
            Modern Design — Strong Structure — Engineering Excellence
          </motion.p>
        </TextReveal>

        <TextReveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 mb-3">
              <span className="font-display text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                We <span className="text-gold-500">Design</span>
              </span>
              <span className="text-gold-500/40 text-lg sm:text-2xl md:text-3xl font-light hidden sm:inline">✦</span>
              <span className="font-display text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                We <span className="text-gold-500">Develop</span>
              </span>
              <span className="text-gold-500/40 text-lg sm:text-2xl md:text-3xl font-light hidden sm:inline">✦</span>
              <span className="font-display text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                We <span className="text-gold-500">Create</span>
              </span>
            </div>
            <span className="text-white/60 text-xs sm:text-base md:text-lg font-light tracking-wide">
              Premium spaces with innovation and engineering excellence.
            </span>
          </motion.div>
        </TextReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/projects" className="btn-gold inline-flex items-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
            Get Consultation
          </Link>
        </motion.div>

        {/* Mobile Stats */}
        <div className="xl:hidden mt-8 grid grid-cols-3 gap-3 max-w-sm mx-auto">
          {[
            { value: "100+", label: "Clients" },
            { value: "2000+", label: "Designs" },
            { value: "10+", label: "Years" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="glass-dark rounded-xl py-3 px-2"
            >
              <div className="text-lg font-display font-bold text-gold-500">{stat.value}</div>
              <div className="text-[10px] text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section className="py-24 bg-light">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Premium Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary-500 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-4xl font-display font-bold">10+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="gold-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Building Excellence Since Day One
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Green Star Designs & Consultants Pvt. Ltd. is a premier architecture and engineering consultancy 
              firm based in Bettiah, Bihar. We specialize in transforming visionary concepts into meticulously 
              crafted structures that stand the test of time.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our team of 15+ professional engineers and designers brings together decades of combined experience 
              in architectural design, structural engineering, and construction management. We believe that every 
              project deserves the highest standards of quality, safety, and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Licensed & Certified",
                "Quality Assurance",
                "On-Time Delivery",
                "Cost-Effective Solutions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-navy-900">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-flex items-center gap-2 group">
              Learn More About Us
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Expertise Section
function ExpertiseSection() {
  const services = [
    { icon: Ruler, title: "Architectural Design", desc: "Innovative architectural solutions that blend aesthetics with functionality for residential and commercial projects." },
    { icon: Building2, title: "Structural Design", desc: "Robust structural analysis and design ensuring safety, stability, and compliance with all building codes." },
    { icon: Home, title: "Interior Design", desc: "Premium interior spaces that reflect your personality while maximizing comfort and utility." },
    { icon: Building, title: "Exterior Design", desc: "Stunning exterior elevations and façade designs that create lasting first impressions." },
    { icon: HardHat, title: "Civil Engineering Consultancy", desc: "Comprehensive civil engineering solutions from planning to execution with expert guidance." },
    { icon: Search, title: "3D Elevation Design", desc: "Realistic 3D elevation models that bring your architectural vision to life before construction." },
    { icon: MapPin, title: "Residential Planning", desc: "Thoughtfully planned residential spaces optimized for comfort, functionality, and modern living." },
    { icon: Building, title: "Commercial Building Design", desc: "Professional commercial building designs tailored for business efficiency and aesthetic appeal." },
    { icon: Calculator, title: "Construction Consultancy", desc: "Expert guidance on construction methodologies, material selection, and regulatory compliance." },
    { icon: HardHat, title: "Modern Home Design", desc: "Contemporary home designs that blend modern aesthetics with practical, sustainable living solutions." },
  ];

  return (
    <section className="py-24 bg-navy-900">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Our Expertise"
          subtitle="Comprehensive architecture and engineering services tailored to bring your vision to life with precision and excellence."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6 
                              group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                  <service.icon size={24} className="text-gold-500 group-hover:text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Timeline Section
function TimelineSection() {
  const steps = [
    { title: "Planning", desc: "Initial consultation, site analysis, and project feasibility study" },
    { title: "Design", desc: "Architectural drawings, structural plans, and 3D visualization" },
    { title: "Site Inspection", desc: "Regular quality checks, material verification, and progress monitoring" },
    { title: "Construction", desc: "Supervised execution with adherence to design specifications" },
    { title: "Final Delivery", desc: "Quality assurance, handover documentation, and client satisfaction" },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Site Inspection & Project Supervision"
          subtitle="Our systematic approach ensures quality construction, adherence to design specifications, structural safety, and timely project completion."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-gold-500 to-primary-500 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={`flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-primary-500/5 border border-slate-100 
                                  hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center 
                                    font-bold text-lg mb-4 lg:mx-0 mx-auto">
                        {i + 1}
                      </div>
                      <h3 className="font-display text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-gold-500 items-center justify-center 
                                shadow-lg shadow-gold-500/30 z-10 shrink-0">
                    <CheckCircle2 size={20} className="text-navy-900" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const features = [
    { icon: HardHat, title: "Experienced Engineers", desc: "15+ certified professionals with decades of combined expertise" },
    { icon: Calendar, title: "Professional Project Management", desc: "Structured workflows ensuring timely delivery and budget control" },
    { icon: Ruler, title: "Modern Design Solutions", desc: "Cutting-edge architectural concepts with sustainable practices" },
    { icon: Building2, title: "Structural Safety", desc: "Rigorous analysis and compliance with international standards" },
    { icon: CheckCircle2, title: "Quality Assurance", desc: "Multi-level inspection protocols for flawless execution" },
    { icon: Calculator, title: "Cost Effective Planning", desc: "Optimized resource allocation without compromising quality" },
    { icon: Clock, title: "On-Time Delivery", desc: "Proven track record of meeting project deadlines" },
    { icon: Phone, title: "Dedicated Support", desc: "24/7 client communication and post-project assistance" },
  ];

  return (
    <section className="py-24 bg-primary-500">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Why Choose Us"
          subtitle="We combine technical expertise with creative vision to deliver projects that exceed expectations."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 
                         hover:bg-white/20 transition-all duration-300"
              >
                 <feature.icon size={28} className="text-gold-500 mb-4" />
                <h3 className="font-display text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    { 
      image: "/buildings/sayamkunjcomplex2.png",
      name: "Sayam Kunj Complex", 
      category: "Residential", 
      location: "Bettiah, Bihar",
      desc: "A premium residential complex with modern amenities and sustainable design."
    },
    { 
      image: "/buildings/ZakirComplex.jpg",
      name: "Zakir Complex", 
      category: "Commercial", 
      location: "Bettiah, Bihar",
      desc: "Landmark commercial complex with modern architecture and premium spaces."
    },
    { 
      image: "/buildings/building3.png",
      name: "Green Valley School", 
      category: "Institutional", 
      location: "Muzaffarpur, Bihar",
      desc: "State-of-the-art educational facility designed for modern learning."
    },
    { 
      image: "/buildings/sayamkunjcomplex.png",
      name: "Sayam Kunj Complex Phase II", 
      category: "Apartment", 
      location: "Bettiah, Bihar",
      desc: "Premium residential complex with community spaces and modern aesthetics."
    },
    { 
      image: "/buildings/buildng5.png",
      name: "Heritage Villa", 
      category: "Villa", 
      location: "Darbhanga, Bihar",
      desc: "Traditional architecture blended with modern comforts."
    },
    { 
      image: "/buildings/structureimage2.png",
      name: "Industrial Park Phase I", 
      category: "Industrial", 
      location: "Bihta, Bihar",
      desc: "50,000 sq ft industrial facility with optimized logistics and safety infrastructure."
    },
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Villa", "Apartment"];

  return (
    <section className="py-24 bg-light">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Explore our portfolio of premium residential, commercial, and institutional projects across India."
        />

        {/* Category Filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                i === 0 
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25" 
                  : "bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-500 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-primary-500/5 
                         hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn-primary inline-flex items-center gap-2 group">
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      location: "Bettiah, Bihar",
      text: "Green Star Designs transformed our dream home into reality. Their site supervision was exceptional — every detail was monitored with precision. The structural consultancy ensured our 3-story building is safe and beautiful.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      location: "Patna, Bihar",
      text: "We hired them for our commercial complex project. Their project management skills are outstanding. They delivered on time, within budget, and the quality exceeded our expectations. Highly recommended for any construction project.",
      rating: 5,
    },
    {
      name: "Dr. Anand Mishra",
      role: "School Principal",
      location: "Muzaffarpur, Bihar",
      text: "The institutional building they designed for our school is a masterpiece. From architectural planning to final execution, their team demonstrated professionalism and expertise. The BOQ estimation was accurate and transparent.",
      rating: 5,
    },
    {
      name: "Sanjay Gupta",
      role: "Real Estate Developer",
      location: "Darbhanga, Bihar",
      text: "As a developer, I need reliable partners. Green Star Designs has been our go-to consultancy for 5 projects now. Their structural engineering expertise and construction quality control are unmatched in the region.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-navy-900">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Client Testimonials"
          subtitle="Hear from our satisfied clients about their experience working with Green Star Designs."
          light
        />

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 transition-all duration-500"
              >
                <Quote size={32} className="text-gold-500/50 mb-4" />
                <p className="text-white/80 leading-relaxed mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 
                                flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Company Pillars
function PillarsSection() {
  const pillars = [
    {
      title: "Project Green Roofs",
      desc: "Promoting sustainable architecture with eco-friendly green roofing solutions that enhance energy efficiency and environmental harmony.",
      icon: Building2,
    },
    {
      title: "Accessible and Equitable Properties",
      desc: "Designing inclusive spaces that are accessible to all, ensuring equitable access to premium architectural solutions.",
      icon: Home,
    },
    {
      title: "Advancing Ethical Practices",
      desc: "Upholding the highest standards of integrity, transparency, and professional ethics in every project we undertake.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="section-padding max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            GREEN STAR DESIGNS
          </h2>
          <p className="text-gold-500 font-semibold text-lg mb-12">
            &amp; CONSULTANTS PVT. LTD.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-primary-500/5 border border-slate-100 
                         hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-primary-500 rounded-2xl p-10 text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              WE DESIGN &nbsp; WE CREATE &nbsp; WE DEVELOP
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Building Modern Spaces with Innovation &amp; Engineering Excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/projects" className="btn-gold inline-flex items-center gap-2">
                Read More
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Construction Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-500/90" />
      </div>

      <div className="relative z-10 section-padding max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Your Dream Project Together
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re planning a home, commercial building, or large-scale development, 
            our team is ready to guide you from design to completion.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-lg px-10 py-5">
            <Calendar size={20} />
            Request Site Visit
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Stats Banner
function StatsBanner() {
  return (
    <section className="py-16 bg-gold-500">
      <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <AnimatedCounter target={100} suffix="+" label="Satisfied Clients" />
          <AnimatedCounter target={2000} suffix="+" label="Structural Designs" />
          <AnimatedCounter target={500} suffix="+" label="Projects Completed" />
          <AnimatedCounter target={15} suffix="+" label="Expert Engineers" />
          <AnimatedCounter target={10} suffix="+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}

// Main Home Page
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <AboutSection />
      <ExpertiseSection />
      <TimelineSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PillarsSection />
      <CTASection />
    </>
  );
}
