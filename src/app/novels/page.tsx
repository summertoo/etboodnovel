"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { novels } from "@/data/novels";
import Link from "next/link";

export default function NovelsPage() {
  const { lang } = useLang();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="ocean-container min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold ocean-title mb-2 fly-in">
          {t("全部小说", "All Novels")}
        </h1>
        <p className="ocean-subtitle mb-10 fly-in">
          {t(
            "探索我们的原创小说库，中英双语同步阅读",
            "Explore our original novel library — read in Chinese and English side by side"
          )}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {novels.map((novel, idx) => (
            <Link
              key={novel.slug}
              href={`/novels/${novel.slug}`}
              className="ocean-card p-5 md:p-6 fly-in block hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-5">
                {/* Cover placeholder */}
                <div className="w-full md:w-36 h-44 md:h-52 rounded-xl bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex items-center justify-center text-5xl shrink-0 shadow-inner">
                  📖
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                      {lang === "zh" ? novel.title.zh : novel.title.en}
                    </h2>
                    <span
                      className={`shrink-0 text-xs px-3 py-1 rounded-full font-medium ${
                        novel.status === "ongoing"
                          ? "status-ongoing"
                          : "status-completed"
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

                  <p className="text-sm text-slate-500 mb-3">
                    {novel.author} · {novel.totalChapters}{" "}
                    {lang === "zh" ? "章" : "chapters"}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
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
            </Link>
          ))}
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
