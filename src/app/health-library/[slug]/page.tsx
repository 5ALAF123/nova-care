import { articles } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const art = articles.find((a) => a.slug === slug);
  if (!art) return { title: "Article not found" };
  return { title: `${art.title} — Nova Care`, description: art.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#fcfcf9]">
      <div className="mx-auto max-w-[1280px] px-6 py-6">
        <Link href="/health-library" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0f1e3a]">
          <ArrowLeft className="h-4 w-4" /> Health Library
        </Link>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-10 grid lg:grid-cols-[1.7fr_0.8fr] gap-8">
        <article className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="h-[360px] overflow-hidden">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 font-semibold">{article.category}</span>
              <span className="inline-flex items-center gap-1 text-slate-500"><Clock3 className="h-3.5 w-3.5" /> {article.readTime}</span>
              <span className="inline-flex items-center gap-1 text-slate-500"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
              <span className="inline-flex items-center gap-1 text-slate-500"><User className="h-3.5 w-3.5" /> {article.author}</span>
            </div>
            <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#0f1e3a] leading-tight">{article.title}</h1>
            <p className="mt-3 text-sm text-slate-500">{article.excerpt}</p>

            <div className="mt-6 prose prose-slate max-w-none prose-sm">
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{article.content}</div>
            </div>

            <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-4 text-xs text-amber-800">
              <strong>Disclaimer:</strong> This article is for general information and portfolio demonstration only. It is not medical advice. If you have health concerns, please consult a qualified healthcare professional or contact Nova Care.
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="text-xs text-slate-500">Share this article</div>
              <button className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-[#0f1e3a] text-white p-6 sticky top-[84px]">
            <h3 className="font-semibold">Need care?</h3>
            <p className="mt-1 text-sm text-white/70">Book a consultation with a Nova Care specialist. Online or in-person.</p>
            <Link href="/book-appointment" className="mt-4 block">
              <Button variant="secondary" className="w-full rounded-full">Book an Appointment</Button>
            </Link>
            <div className="mt-3 text-xs text-white/50 text-center">Available 7 days • Instant confirmation</div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h3 className="font-semibold text-[#0f1e3a]">Related articles</h3>
            <div className="mt-4 space-y-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/health-library/${r.slug}`} className="flex gap-3 group">
                  <img src={r.image} alt={r.title} className="h-16 w-20 rounded-xl object-cover shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-cyan-600">{r.category}</div>
                    <div className="text-sm font-medium text-[#0f1e3a] group-hover:text-[#0f2a5a] leading-snug line-clamp-2">{r.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
