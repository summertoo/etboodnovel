"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { novels } from "@/data/novels";
import Link from "next/link";

export default function NovelsPage() {
  const { lang } = useLang();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="cyber-container min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold cyber-title mb-2 fly-in">
          {t("全部小说", "All Novels")}
        </h1>
        <p className="cyber-subtitle mb-10 fly-in">
          {t(
            "探索我们的原创小说库，中英双语同步阅读",
            "Explore our original novel library — read in Chinese and English side by side"
          )}
        </p>

        <div className="flex flex-col gap-6">
          {novels.map((novel, idx) => (
            <Link
              key={novel.slug}
              href={`/novels/${novel.slug}`}
              className="cyber-card p-6 fly-in block hover:-translate-y-1 transition-transform"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Cover placeholder */}
                <div className="w-full md:w-40 h-48 md:h-56 rounded-lg bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 flex items-center justify-center text-5xl shrink-0">
                  📖
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      {lang === "zh" ? novel.title.zh : novel.title.en}
                    </h2>
                    <span
                      className={`shrink-0 text-xs px-3 py-1 rounded-full font-medium ${
                        novel.status === "ongoing"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-gray-100 text-gray-600 border border-gray-200"
                      }`}
                    >
                      {lang === "zh"
                        ? novel.status === "ongoing"
                          ? "连载中"
                          : "已完结"
                        : novel.status === "ongoing"
                          ? "Ongoing"
                          : "Completed"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">
                    {novel.author} · {novel.totalChapters}{" "}
                    {lang === "zh" ? "章" : "chapters"}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
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
            </Link>
          ))}
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
