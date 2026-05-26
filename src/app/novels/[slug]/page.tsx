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
    <div className="cyber-container min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Novel Header */}
        <div className="cyber-card p-6 md:p-8 mb-8 fly-in">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Cover */}
            <div className="w-full md:w-48 h-56 md:h-64 rounded-lg bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 flex items-center justify-center text-6xl shrink-0">
              📖
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {lang === "zh" ? novel.title.zh : novel.title.en}
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                {novel.author}
              </p>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 ${
                  novel.status === "ongoing"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-gray-100 text-gray-600 border border-gray-200"
                }`}
              >
                {t(
                  novel.status === "ongoing" ? "连载中" : "已完结",
                  novel.status === "ongoing" ? "Ongoing" : "Completed"
                )}
              </span>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
              </p>

              <div className="flex flex-wrap gap-2">
                {novel.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200"
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {t("章节列表", "Chapter List")}{" "}
            <span className="text-sm font-normal text-gray-500">
              ({novel.totalChapters}{" "}
              {t("章", novel.totalChapters > 1 ? "chapters" : "chapter")})
            </span>
          </h2>

          <div className="space-y-2">
            {novel.chapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/novels/${novel.slug}/${ch.number}`}
                className="cyber-card p-4 flex items-center justify-between hover:-translate-y-0.5 transition-transform block"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-pink-100 flex items-center justify-center text-sm font-bold text-amber-700 shrink-0">
                    {ch.number}
                  </span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      {lang === "zh" ? ch.title.zh : ch.title.en}
                    </p>
                    <p className="text-xs text-gray-400">
                      {ch.publishDate} · {ch.wordCount}{" "}
                      {t("字", "words")}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-amber-600 hover:text-amber-700 font-medium shrink-0">
                  {t("阅读 →", "Read →")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="cyber-footer py-8 px-4 text-center text-sm text-gray-500">
        <p>
          {t(
            "© 2026 奇异小说 — 中英双语原创小说阅读平台",
            "© 2026 Fantasy Novels — Bilingual Original Novel Platform"
          )}
        </p>
      </footer>
    </div>
  );
}
