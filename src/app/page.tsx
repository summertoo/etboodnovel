"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { novels } from "@/data/novels";
import Link from "next/link";

export default function HomePage() {
  const { lang } = useLang();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="orange-container">
      <Navbar />

      {/* Hero Section */}
      <section className="orange-hero py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center fly-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold orange-title mb-4 md:mb-6">
            {t("双鱼小说", "ShuangYu Novels")}
          </h1>
          <p className="text-lg md:text-xl orange-subtitle max-w-2xl mx-auto mb-8 px-4">
            {t(
              "原创中英双语网络小说平台 — 穿越、武侠、短篇故事，精彩纷呈",
              "Original Chinese-English bilingual web novels — Transmigration, Wuxia, Short Stories, and more"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/novels" className="orange-button">
              {t("浏览全部小说", "Browse All Novels")}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Novels */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            {t("精选小说", "Featured Novels")}
          </h2>
          <p className="orange-subtitle mb-8">
            {t("点击进入阅读", "Click to start reading")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {novels.map((novel) => (
              <Link
                key={novel.slug}
                href={`/novels/${novel.slug}`}
                className="orange-card p-5 fly-in block hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-16 h-20 rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                    📖
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-800 truncate">
                      {lang === "zh" ? novel.title.zh : novel.title.en}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {novel.author} · {lang === "zh" ? novel.status === "ongoing" ? "连载中" : "已完结" : novel.status === "ongoing" ? "Ongoing" : "Completed"}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {novel.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full orange-tag"
                    >
                      {lang === "zh" ? tag.zh : tag.en}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="orange-footer py-8 px-4 text-center text-sm text-slate-500">
          <p>{t("© 2026 双鱼小说 — 中英双语原创小说阅读平台", "© 2026 ShuangYu Novels — Bilingual Original Novel Platform")}</p>
      </footer>
    </div>
  );
}
