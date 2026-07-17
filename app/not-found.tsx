import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#C8A27A_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 section-padding max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-navy-700 to-navy-800 border-2 border-gold-500/40 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gold-500/10">
          <span className="font-display text-4xl font-bold text-gold-500">GS</span>
        </div>

        <div className="gold-line mx-auto mb-6" />

        <h1 className="font-display text-8xl md:text-9xl font-bold text-gold-500 mb-4">
          404
        </h1>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-gold inline-flex items-center gap-2 group"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/contact"
            className="btn-outline inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
