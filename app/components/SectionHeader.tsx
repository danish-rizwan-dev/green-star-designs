"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`inline-flex flex-col ${centered ? "items-center" : "items-start"} gap-3`}>
        <div className="gold-line" />
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-navy-900"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-2xl ${light ? "text-white/70" : "text-slate-600"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
