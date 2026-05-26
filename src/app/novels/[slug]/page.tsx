"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { getNovelBySlug } from "@/data/novels";
import { notFound } from "next/navigation";

export default function NovelDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const novel = getNovelBySlug(slug);

  if (!novel) {
    notFound();
  }

  return (
    <div className="ocean-container min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Novel Header */}
        <div className="ocean-card p-5 md:p-8 mb-6 md:mb-8 fly-in">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            {/* Cover */}
            <div className="w-full md:w-44 h-52 md:h-60 rounded-xl bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex items-center justify-center text-6xl shrink-0 shadow-inner">
              📖
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {lang === "zh" ? novel.title.zh : novel.title.en}
              </h1>
              <p className="text-sm text-slate-500 mb-3">
                {novel.author}
              </p>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 ${
                  novel.status === "ongoing"
                    ? "status-ongoing"
                    : "status-completed"
                }`}
              >
                {t(
                  novel.status === "ongoing" ? "连载中" : "已完结",
                  novel.status === "ongoing" ? "Ongoing" : "Completed"
                )}
              </span>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
              </p>

              <div className="flex flex-wrap gap-2">
                {novel.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full ocean-tag"
                  >
                    {lang === "zh" ? tag.zh : tag.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="fly-in">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            {t("章节列表", "Chapter List")}{" "}
            <span className="text-sm font-normal text-slate-500">
              ({novel.totalChapters}{" "}
              {t("章", novel.totalChapters > 1 ? "chapters" : "chapter")})
            </span>
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            {novel.chapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/novels/${novel.slug}/${ch.number}`}
                className="ocean-card p-4 flex items-center justify-between hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-10 h-10 rounded-full chapter-number flex items-center justify-center text-sm font-bold shrink-0">
                    {ch.number}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 text-sm truncate">
                      {lang === "zh" ? ch.title.zh : ch.title.en}
                    </p>
                    <p className="text-xs text-slate-400">
                      {ch.publishDate} · {ch.wordCount}{" "}
                      {t("字", "words")}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-sky-600 hover:text-sky-700 font-medium shrink-0 ml-2">
                  {t("阅读 →", "Read →")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="ocean-footer py-8 px-4 text-center text-sm text-slate-500">
        <p>
          {t(
            "© 2026 双鱼小说 — 中英双语原创小说阅读平台",
            "© 2026 Fantasy Novels — Bilingual Original Novel Platform"
          )}
        </p>
      </footer>
    </div>
  );
}
