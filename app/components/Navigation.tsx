"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Home, Info, LayoutDashboard, Briefcase, MessageSquare, ArrowRight, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-500 text-white text-sm section-padding h-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden">
            <a href="tel:+917358331731" className="flex items-center gap-1 hover:text-gold-400 transition-colors shrink-0">
              <Phone size={12} className="sm:size-[14px]" />
              <span className="text-[10px] sm:text-sm truncate">+91 7358331731</span>
            </a>
            <span className="text-white/30 hidden xs:inline">|</span>
            <a href="mailto:greenstardesignbth@gmail.com" className="flex items-center gap-1 hover:text-gold-400 transition-colors shrink-0 min-w-0">
              <Mail size={12} className="sm:size-[14px]" />
              <span className="text-[10px] sm:text-sm truncate">greenstardesignbth@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block font-display text-gold-300 text-xs lg:text-sm tracking-[0.2em] uppercase truncate drop-shadow-sm">
            ✦ We Design ✦ We Create ✦ We Develop ✦
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg shadow-primary-500/5 transition-all duration-500 ${
          isScrolled ? "top-0" : "top-10"
        }`}
      >
        <div className="section-padding">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Green Star Designs & Consultants"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center">
                <div className="font-display text-lg font-bold leading-tight text-primary-500 transition-colors">
                  Green Star
                </div>
                <p className="text-[9px] tracking-widest uppercase text-gold-600">Designs & Consultants</p>
                <p className="text-[8px] tracking-widest uppercase text-gold-600">Pvt. Ltd.</p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-navy-900 transition-colors hover:text-gold-500 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-6 py-2.5 bg-gold-500 text-navy-900 font-semibold text-sm rounded-lg 
                         hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Get Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-navy-900 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="bg-primary-500 p-6 relative">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="Green Star Designs"
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">Green Star</h3>
                      <p className="text-xs text-gold-400">Designs & Consultants</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex-1 py-6 px-4 overflow-y-auto">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 px-4 mb-2 font-semibold">Navigation</p>
                    {[
                      { href: "/", icon: Home, label: "Home" },
                      { href: "/about", icon: Info, label: "About Us" },
                      { href: "/services", icon: LayoutDashboard, label: "Services" },
                      { href: "/projects", icon: Briefcase, label: "Projects" },
                      { href: "/blog", icon: MessageSquare, label: "Blog" },
                      { href: "/contact", icon: MessageSquare, label: "Contact" },
                    ].map(({ href, icon: Icon, label }, index) => (
                      <motion.div
                        key={href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <Link
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-navy-900 hover:bg-gold-50 hover:text-gold-700 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                            <Icon size={18} className="text-primary-500 group-hover:text-gold-600" />
                          </div>
                          <span className="font-medium text-sm flex-1">{label}</span>
                          <ArrowRight size={16} className="text-slate-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 pt-6 border-t border-slate-100 px-4">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-3 font-semibold">Contact</p>
                    <div className="space-y-3">
                      <a href="tel:+917358331731" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary-500 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                          <Phone size={14} className="text-primary-500" />
                        </div>
                        +91 7358331731
                      </a>
                      <a href="mailto:greenstardesignbth@gmail.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary-500 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                          <Mail size={14} className="text-primary-500" />
                        </div>
                        greenstardesignbth@gmail.com
                      </a>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                          <MapPin size={14} className="text-primary-500" />
                        </div>
                        Bettiah, Bihar
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsConsultationOpen(true);
                    }}
                    className="w-full py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/25 mb-3"
                  >
                    <MessageSquare size={18} />
                    Get Consultation
                  </motion.button>
                  <div className="flex justify-center gap-3">
                    <a href="https://www.instagram.com/greenstardesignbth" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all text-slate-500">
                      <Instagram size={16} />
                    </a>
                    <a href="https://www.facebook.com/share/193gmkW4fu/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-500">
                      <Facebook size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/er-wasi-reza-888a1244/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all text-slate-500">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
}
