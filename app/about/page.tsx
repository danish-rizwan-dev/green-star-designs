"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Target, Eye, Heart, Shield, Clock, CheckCircle2, Linkedin, Instagram, Facebook, GraduationCap, Briefcase, Building2, HardHat } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeader from "../components/SectionHeader";
import AnimatedCounter from "../components/AnimatedCounter";

const values = [
  { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards in every project we undertake." },
  { icon: Target, title: "Excellence", desc: "We strive for perfection in design, engineering, and execution." },
  { icon: Shield, title: "Safety First", desc: "Structural safety and compliance are non-negotiable priorities." },
  { icon: Clock, title: "Timeliness", desc: "We respect deadlines and deliver projects on schedule, every time." },
  { icon: Users, title: "Collaboration", desc: "We work closely with clients, ensuring their vision guides every decision." },
  { icon: Award, title: "Innovation", desc: "We embrace modern technologies and sustainable building practices." },
];

const timeline = [
  { year: "2016", title: "Company Founded", desc: "Green Star Designs established in Bettiah, Bihar with a vision to transform local construction standards." },
  { year: "2018", title: "First Major Project", desc: "Completed our first large-scale commercial project, establishing credibility in the region." },
  { year: "2020", title: "Team Expansion", desc: "Grew to 15+ professional engineers and designers, expanding service capabilities." },
  { year: "2022", title: "All India Service", desc: "Extended operations beyond Bihar, serving clients across multiple states in India." },
  { year: "2024", title: "500+ Projects", desc: "Crossed the milestone of 500 completed projects across residential, commercial, and institutional sectors." },
  { year: "2026", title: "Industry Leader", desc: "Recognized as a leading architecture and engineering consultancy in Eastern India." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 bg-navy-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="About Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 section-padding max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Designing Excellence. Building Trust. Since 2016.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                    alt="Our Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-display font-bold">500+</div>
                  <div className="text-sm">Projects Delivered</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="gold-line mb-6" />
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
                Who We Are
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Green Star Designs & Consultants Pvt. Ltd. is a full-service architecture and engineering 
                consultancy headquartered in Bettiah, Bihar. Founded in 2016, we have grown from a small 
                local practice to a trusted name serving clients across India.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our multidisciplinary team combines architectural creativity with engineering precision. 
                We handle projects of all scales — from individual homes to large commercial complexes — 
                with the same commitment to quality and excellence.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We believe that great architecture is not just about aesthetics; it&apos;s about creating 
                spaces that enhance lives, respect the environment, and stand the test of time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Licensed & Certified",
                  "ISO Standards Compliant",
                  "Green Building Certified",
                  "Government Approved",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-gold-500" />
                    <span className="text-sm font-medium text-navy-900">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary-500">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
                <Target size={40} className="text-gold-500 mb-6" />
                <h3 className="font-display text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To deliver exceptional architectural and engineering solutions that transform our clients&apos; 
                  visions into reality. We are committed to innovation, sustainability, and uncompromising 
                  quality in every project we undertake.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
                <Eye size={40} className="text-gold-500 mb-6" />
                <h3 className="font-display text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To be India&apos;s most trusted architecture and engineering consultancy, known for 
                  pioneering designs, structural excellence, and client-centric service. We aim to shape 
                  skylines and communities that inspire generations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every project we deliver."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-primary-500/5 border border-slate-100 
                           hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
                >
                  <value.icon size={32} className="text-primary-500 mb-4" />
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-navy-900">
        <div className="section-padding max-w-5xl mx-auto">
          <SectionHeader
            title="Our Journey"
            subtitle="A decade of growth, innovation, and excellence in architecture and engineering."
            light
          />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 to-primary-500 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-gold-500 items-center justify-center 
                                  shadow-lg shadow-gold-500/30 shrink-0">
                      <span className="font-display font-bold text-navy-900">{item.year}</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex-1">
                      <div className="md:hidden text-gold-500 font-display font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Director */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader
            title="Founder & Director"
            subtitle="Meet the visionary behind Green Star Designs & Consultants Pvt. Ltd."
          />

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/wasi-reza.jpg"
                    alt="Er. Wasi Reza - Founder & Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-display font-bold">7+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="gold-line mb-6" />
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-2">
                Er. Wasi Reza
              </h2>
              <p className="text-gold-500 font-semibold text-lg mb-6">
                M.Tech (Structural Engineering) — Founder & Director
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                With over seven years of career experience in Construction Project Engineering, 
                Construction Management, and Structural Design Engineering, Er. Wasi Reza founded 
                Green Star Designs & Consultants Pvt. Ltd. with a vision to transform the construction 
                landscape of Bihar and beyond.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Presently working as Project Manager — Civil Division since April 2020, he leads a 
                team of skilled professionals delivering end-to-end architectural and engineering 
                solutions. His expertise spans multi-site management, business development, structural 
                audit, and personnel acquisition & training.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href="https://www.instagram.com/greenstardesignbth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center 
                           hover:bg-pink-500 hover:text-white transition-all duration-300 text-pink-600"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/1Hv9DrnmoT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center 
                           hover:bg-blue-600 hover:text-white transition-all duration-300 text-blue-600"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/er-wasi-reza-888a1244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center 
                           hover:bg-blue-700 hover:text-white transition-all duration-300 text-blue-700"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Key Highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "M.Tech Structural Engineering — SRM IST Chennai" },
                  { icon: Briefcase, text: "Project Manager at Green Star Designs since 2020" },
                  { icon: Building2, text: "Design & detailing of multi-storied buildings using ETAB" },
                  { icon: HardHat, text: "Structural audit & valuation for Land & Building" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 
                                         shadow-md shadow-primary-500/5 border border-slate-100">
                    <item.icon size={20} className="text-primary-500 shrink-0" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Full Bio */}
          <ScrollReveal className="mt-16">
            <div className="bg-white rounded-2xl p-10 shadow-lg shadow-primary-500/5 border border-slate-100">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">Professional Profile</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-gold-500" />
                    Core Expertise
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Project management & site supervision",
                      "Structural design & analysis using ETAB",
                      "Seismic analysis of multi-storied buildings",
                      "Quality testing of construction materials",
                      "Mix design verification for all work",
                      "Repair & damage assessment of structures",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <GraduationCap size={18} className="text-gold-500" />
                    Education & Affiliations
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "M.Tech in Structural Engineering — SRM IST Chennai (2015–2017)",
                      "B.Tech in Civil Engineering — First Class (2011–2015)",
                      "Senior Affiliate Member of ASCE (American Society of Civil Engineers) since 2011",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gold-500">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter target={500} suffix="+" label="Projects Completed" />
            <AnimatedCounter target={100} suffix="+" label="Happy Clients" />
            <AnimatedCounter target={15} suffix="+" label="Team Members" />
            <AnimatedCounter target={10} suffix="+" label="Years of Service" />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
              Professional Certifications
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
              We maintain the highest professional standards with certifications and registrations 
              from leading industry bodies.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Registered Architects", desc: "Council of Architecture (COA) Registered" },
              { title: "Structural Engineers", desc: "Institution of Engineers (India) Certified" },
              { title: "Quality Certified", desc: "ISO 9001:2015 Quality Management" },
            ].map((cert, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-primary-500/5 border border-slate-100">
                  <Award size={40} className="text-primary-500 mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2">{cert.title}</h3>
                  <p className="text-slate-600 text-sm">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
