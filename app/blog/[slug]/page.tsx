import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "../posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Green Star Designs`,
      description: post.excerpt,
      url: `https://greenstardesign.in/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    alternates: { canonical: `https://greenstardesign.in/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative py-32 bg-navy-900">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-900/90" />
          </div>
          <div className="relative z-10 section-padding max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-gold-500 text-navy-900 text-sm font-bold rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-light">
          <div className="section-padding max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="font-display text-2xl font-bold text-navy-900 mt-10 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="font-display text-xl font-bold text-navy-900 mt-8 mb-3">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-semibold text-navy-900">{line.replace(/\*\*/g, '')}</p>;
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="text-slate-700 ml-6 list-disc">{line.replace('- ', '')}</li>;
                }
                if (line.startsWith('1. ')) {
                  return <li key={i} className="text-slate-700 ml-6 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
                }
                if (line.trim() === '') {
                  return <div key={i} className="h-4" />;
                }
                return <p key={i} className="text-slate-700 leading-relaxed mb-4">{line}</p>;
              })}
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="section-padding max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-light rounded-2xl overflow-hidden shadow-lg shadow-primary-500/5 border border-slate-100 hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gold-600 font-semibold mb-1">{r.category}</p>
                    <h3 className="font-display font-bold text-navy-900 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary-500">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch with our team for expert architectural and engineering consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/25"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
