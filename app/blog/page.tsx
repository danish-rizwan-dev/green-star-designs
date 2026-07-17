import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./posts";

export default function BlogPage() {
  return (
    <>
      <section className="relative py-32 bg-navy-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 section-padding max-w-7xl mx-auto text-center">
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expert insights on architecture, structural engineering, construction management, and design.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-primary-500/5 border border-slate-100 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
