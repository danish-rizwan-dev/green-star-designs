"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, AlertTriangle,
  CheckCircle2, Facebook, Instagram, Linkedin
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeader from "../components/SectionHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["05 Chhawani", "Bettiah, Bihar 845438"],
      color: "bg-primary-500",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 7358331731"],
      color: "bg-gold-500",
      link: "tel:+917358331731",
    },
    {
      icon: Mail,
      title: "Email Address",
       details: ["greenstardesignbth@gmail.com"],
      color: "bg-primary-500",
       link: "mailto:greenstardesignbth@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      color: "bg-gold-500",
    },
  ];

  const projectTypes = [
    "Residential Home",
    "Commercial Building",
    "Industrial Facility",
    "Institutional Building",
    "Interior Design",
    "Renovation",
    "Other",
  ];

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
              Contact Us
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team for a free consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-primary-500/5 border border-slate-100 
                           hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mb-6`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-slate-600 text-sm">
                      {info.link ? (
                        <a href={info.link} className="hover:text-primary-500 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-navy-900">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <div className="gold-line mb-6" />
                <h2 className="font-display text-4xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-white/70 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white 
                                 placeholder-white/40 focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white 
                                 placeholder-white/40 focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white 
                                 placeholder-white/40 focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white 
                                 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                      >
                        <option value="" className="text-navy-900">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="text-navy-900">{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white 
                               placeholder-white/40 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white 
                               placeholder-white/40 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gold-500 text-navy-900 font-bold rounded-xl 
                             hover:bg-gold-400 transition-all duration-300 
                             flex items-center justify-center gap-2 shadow-lg shadow-gold-500/25"
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-xl"
                    >
                      <CheckCircle2 size={20} />
                      Thank you! We will contact you shortly.
                    </motion.div>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Map & Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d790.1754631649876!2d84.50046684448634!3d26.816699297771326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936f39fba3e3d1%3A0xd21ffd8c976806f5!2sGREEN%20STAR%20DESIGNS%20%26%20CONSULTANTS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sus!4v1783710545411!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="aspect-video w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Green Star Designs - Corporate Office"
                  />
                </div>

                {/* Quick CTAs */}
                <div className="grid gap-4">
                  <a
                    href="https://wa.me/917358331731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-green-500/20 border border-green-500/30 rounded-xl p-6 
                             hover:bg-green-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                        Chat on WhatsApp
                      </h3>
                      <p className="text-white/60 text-sm">Quick response for urgent queries</p>
                    </div>
                  </a>

                  <a
                    href="tel:+917358331731"
                    className="flex items-center gap-4 bg-red-500/20 border border-red-500/30 rounded-xl p-6 
                             hover:bg-red-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0">
                      <AlertTriangle size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                        Emergency Consultation
                      </h3>
                      <p className="text-white/60 text-sm">24/7 support for urgent structural issues</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { Icon: Facebook, href: "https://www.facebook.com/share/1Hv9DrnmoT/" },
                      { Icon: Instagram, href: "https://www.instagram.com/greenstardesignbth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                      { Icon: Linkedin, href: "https://www.linkedin.com/in/er-wasi-reza-888a1244/" },
                    ].map(({ Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center 
                                 hover:bg-gold-500 hover:text-navy-900 text-white transition-all duration-300"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
              Service Area
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
              Based in Bettiah, Bihar, we proudly serve clients across all of India. 
              Our team is equipped to handle projects in any location with the same commitment to excellence.
            </p>
          </ScrollReveal>

          <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg shadow-primary-500/5 border border-slate-100 max-w-3xl mx-auto">
            <h3 className="font-display text-xl font-bold text-navy-900 mb-4">Branch Offices</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Khagaria", "Kota", "Kerala", "Delhi"].map((city, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="bg-primary-50 rounded-xl p-4 text-center
                                hover:bg-primary-100 transition-all duration-300">
                    <MapPin size={16} className="text-primary-500 mx-auto mb-2" />
                    <span className="text-sm font-medium text-navy-900">{city}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Bihar",
              "Uttar Pradesh",
              "West Bengal",
              "Jharkhand",
              "Delhi NCR",
              "Madhya Pradesh",
              "Rajasthan",
              "All India",
            ].map((state, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-4 shadow-md shadow-primary-500/5 border border-slate-100
                              hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300">
                  <MapPin size={16} className="text-primary-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-navy-900">{state}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
