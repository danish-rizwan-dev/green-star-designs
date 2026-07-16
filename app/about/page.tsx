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
  { year: "2024", title: "Projects", desc: "Crossed the milestone of 500 completed projects across residential, commercial, and institutional sectors." },
  { year: "2026", title: "Industry Leader", desc: "Recognized as a leading architecture and engineering consultancy in Eastern India." },
];

export default function AboutPage() {
  return (
    <>


      {/* Board of Director */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/structuresvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <SectionHeader
            title="Board of Director"
            subtitle="Meet the leadership team behind Green Star Designs & Consultants Pvt. Ltd."
          />

          {/* Er. Wasi Reza */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/wasi-reza.jpg"
                    alt="Er. Wasi Reza - Board of Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-display font-bold">10+</div>
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
                Board of Director — M.Tech (Structural Engineering)
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Wasi Reza, member of the board of directors from the firm&apos;s inception. 
                Being a member of ASCE and a graduate with Masters in Structural Engineering, 
                his 10 years of rich and versatile experience in planning, designing, and execution 
                creates the opportunity for the company&apos;s adverse growth. His experience in 
                Military projects is the key asset for the growth in the designs and consultancy 
                sectors of construction.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {[
                  { icon: Award, text: "Registered Engineer – Urban Development & Housing Department" },
                  { icon: Building2, text: "Civil & Structural Design Engineer" },
                  { icon: Award, text: "Sr. Affiliated Member of ASCE America" },
                  { icon: Award, text: "CSCE (Canada)" },
                  { icon: Award, text: "IAENG (Hong Kong)" },
                  { icon: Award, text: "DJFRVO (India)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 
                                         shadow-md shadow-primary-500/5 border border-slate-100">
                    <item.icon size={18} className="text-primary-500 shrink-0" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "M.Tech (Structural Engineering)" },
                  { icon: GraduationCap, text: "B.Tech (Civil Engineering)" },
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

          {/* Er. Razida */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/erRazida.png"
                    alt="Er. Razida - Board of Director"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="gold-line mb-6" />
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-2">
                Er. Razida
              </h2>
              <p className="text-gold-500 font-semibold text-lg mb-6">
                Board of Director — B.Tech (Civil Engineering), MBA (Finance)
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Er. Razida is a skilled professional specializing in Civil 2D Planning, architectural 
                drafting, and finance-related consultancy services. With a strong focus on precision, 
                creativity, and practical solutions, she delivers well-planned residential and commercial 
                designs tailored to client needs.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                From detailed 2D floor planning to financial guidance and project support, 
                Er. Razida is committed to providing reliable, professional, and client-focused 
                services with modern design standards and efficient planning solutions.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {[
                  { icon: Award, text: "Registered Engineer – Urban Development & Housing Department" },
                  { icon: Building2, text: "Civil Engineer" },
                  { icon: Award, text: "Sr. Affiliated Member of ASCE America" },
                  { icon: Award, text: "CSCE (Canada)" },
                  { icon: Award, text: "IAENG (Hong Kong)" },
                  { icon: Award, text: "DJFRVO (India)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 
                                         shadow-md shadow-primary-500/5 border border-slate-100">
                    <item.icon size={18} className="text-primary-500 shrink-0" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "MBA (Finance)" },
                  { icon: GraduationCap, text: "B.Tech (Civil Engineering)" },
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
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-primary-500">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader
            title="Our Team"
            subtitle="Meet our experienced professionals dedicated to delivering excellence."
            light
          />

          {/* Himanshu Poddar & Priyadarshi Kunal */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 
                         hover:bg-white/20 transition-all duration-500"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/himanshuPoddar.png"
                    alt="Himanshu Poddar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">Himanshu Poddar</h3>
                  <p className="text-gold-400 font-semibold text-sm mb-4">Engineer Profile — M.Tech (Structural Engineering)</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    On the boards since the inception, Himanshu Poddar is a graduate with masters in 
                    Structural engineering. A member of ASCE and over 10 years&apos; experience in planning 
                    and estimations in addition to site experiences, strengthens the GSDC&apos;s integrity. 
                    His experience in Military projects is the key asset for the growth in the designs 
                    and consultancy sectors of construction.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "M.Tech (Structural Engineering)",
                      "B.Tech (Civil Engineering)",
                    ].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 
                         hover:bg-white/20 transition-all duration-500"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/priyadarshikunal.png"
                    alt="Priyadarshi Kunal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">Priyadarshi Kunal</h3>
                  <p className="text-gold-400 font-semibold text-sm mb-4">Engineer Profile — B.Tech (Civil Engineering)</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    An alumnus of SRM University, Priyadarshi Kunal has been in the board of directors 
                    since the inception of GSDC. With a B.Tech in Civil Engineering, Specialization in 
                    Structural Engineering, member of ASCE and an experience of more than 10 years, 
                    he brings on board his unique visions to address any projects in construction sector. 
                    The experiences from military projects and abroad adds to special management practices 
                    and global approach to the diversified construction assets.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "B.Tech (Civil Engineering)",
                      "Specialization in Structural Engineering",
                    ].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Board of Advisories */}
      <section className="py-24 bg-navy-900">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader
            title="Board of Advisories"
            subtitle="Our experienced advisors bringing diverse expertise across construction, MEP services, and finance."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Md. Rizwanullah",
                role: "Diploma in Civil Engineer",
                exp: "17 Years",
                field: "Construction",
                initial: "MR",
              },
              {
                name: "Noorul Hoda",
                role: "B.Sc in Electrical Engineering",
                exp: "34 Years",
                field: "MEP Services",
                initial: "NH",
              },
              {
                name: "Mouli Reddy",
                role: "B.Tech in Mechanical Engineering",
                exp: "3 Years",
                field: "MEP Services",
                initial: "MR",
              },
              {
                name: "Namrata Solanki",
                role: "B.Tech in Civil Engineering",
                exp: "3 Years",
                field: "Finance and Marketing",
                initial: "NS",
              },
            ].map((advisor, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 
                           hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6
                                border-2 border-gold-500/50">
                    <span className="font-display text-2xl font-bold text-gold-400">{advisor.initial}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{advisor.name}</h3>
                  <p className="text-gold-400 text-sm mb-3">{advisor.role}</p>
                  <div className="space-y-1">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                      Experience: {advisor.exp}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs mt-2">{advisor.field}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
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
                    src="/newlogo.png"
                    alt="Green Star Designs & Consultants"
                    fill
                    className="object-contain p-8"
                  />
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
                                  shadow-lg shadow-gold-500/30 shrink-0 relative z-10">
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

      {/* Statistics */}
      <section className="py-16 bg-gold-500">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
