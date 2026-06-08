import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { guides, shopConfig } from "@/lib/shopData";

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — Aqua2 Lab`,
    description: guide.excerpt,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <main className="bg-white min-h-screen">
      {/* Top bar */}
      <div className="bg-[#0D2B3E] text-white py-3 px-6 text-xs text-center">
        🇺🇸 <strong>New Store Opening in Alabama, USA</strong> — Stay Tuned! &nbsp;
        <a
          href={`https://wa.me/${shopConfig.whatsapp}?text=Notify+me+about+your+Alabama+store!`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-300 hover:text-white"
        >
          Get Notified
        </a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/shop"
            className="flex items-center gap-2 text-slate-500 hover:text-[#0D2B3E] text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Aqua2 Lab
          </Link>
          <a
            href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I+read+your+guide+on+${encodeURIComponent(guide.title)}+and+have+a+question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#25D366] border border-[#25D366] px-3 py-2 rounded-full hover:bg-[#25D366] hover:text-white transition-all"
          >
            <MessageCircle size={13} />
            Ask on WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B3E]/80 via-[#0D2B3E]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-8">
          <span className="inline-block text-[0.6rem] font-black tracking-widest uppercase text-white bg-cyan-600 px-3 py-1.5 rounded-full mb-4">
            {guide.category}
          </span>
          <h1 className="text-white font-black text-2xl md:text-4xl leading-tight">
            {guide.title}
          </h1>
          <div className="flex items-center gap-2 mt-3 text-white/60 text-xs">
            <Clock size={12} />
            {guide.readTime}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-14">
        {/* Intro */}
        <p className="text-slate-600 text-lg font-light leading-relaxed mb-12 border-l-4 border-cyan-400 pl-5">
          {guide.intro}
        </p>

        {/* Sections */}
        <div className="space-y-14">
          {guide.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-black text-[#0D2B3E] mb-4 flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-lg">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <div className="prose prose-slate max-w-none">
                {section.body.split("\n\n").map((para, pIdx) => {
                  // Render bold markdown (**text**)
                  const parts = para.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={pIdx} className="text-slate-600 text-base leading-relaxed mb-4">
                      {parts.map((part, i) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={i} className="font-bold text-[#0D2B3E]">
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>
              {section.tips && section.tips.length > 0 && (
                <div className="mt-5 bg-cyan-50 border border-cyan-100 rounded-2xl p-6">
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-cyan-600 mb-4">
                    💧 Quick Tips
                  </p>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 shrink-0 mt-0.5 text-xs font-bold">
                          {tIdx + 1}
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-14 bg-[#0D2B3E] rounded-3xl p-8 md:p-10">
          <p className="text-xs font-black tracking-[0.3em] uppercase text-cyan-400 mb-4">
            Final Thoughts
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-8">
            {guide.conclusion}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I+read+your+guide+on+${encodeURIComponent(guide.title)}+and+I'd+like+to+discuss+a+project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#20bb5a] transition-all"
            >
              <MessageCircle size={16} />
              Discuss on WhatsApp
            </a>
            <Link
              href="/shop"
              className="flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* More guides */}
        {otherGuides.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-black text-[#0D2B3E] mb-7">
              More Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/shop/guides/${g.slug}`}
                  className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all"
                >
                  <div className="relative h-32">
                    <Image
                      src={g.image}
                      alt={g.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[0.6rem] font-bold text-cyan-600 uppercase tracking-widest mb-1">
                      {g.category}
                    </p>
                    <h4 className="text-[#0D2B3E] font-bold text-sm leading-snug">
                      {g.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-2">{g.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
