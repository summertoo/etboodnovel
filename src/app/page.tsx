"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { novels } from "@/data/novels";
import Link from "next/link";

const features = [
  { icon: "🌐", key: "Bilingual" },
  { icon: "📱", key: "MobileFirst" },
  { icon: "🎨", key: "CyberStyle" },
];

const featureLabels: Record<string, { zh: string; en: string }> = {
  Bilingual: { zh: "中英双语同步阅读", en: "Bilingual Side-by-Side" },
  MobileFirst: { zh: "移动端优先体验", en: "Mobile-First Experience" },
  CyberStyle: { zh: "赛博朋克风格", en: "Cyber Theme Design" },
};

export default function HomePage() {
  const { lang } = useLang();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="cyber-container">
      <Navbar />

      {/* Hero Section */}
      <section className="cyber-hero py-20 px-4">
        <div className="max-w-5xl mx-auto text-center fly-in">
          <h1 className="text-4xl md:text-6xl font-bold cyber-title mb-6">
            {t("奇异小说", "Fantasy Novels")}
          </h1>
          <p className="text-lg md:text-xl cyber-subtitle max-w-2xl mx-auto mb-8">
            {t(
              "原创中英双语网络小说平台 — 穿越、武侠、短篇故事，精彩纷呈",
              "Original Chinese-English bilingual web novels — Transmigration, Wuxia, Short Stories, and more"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/novels" className="cyber-button-small">
              {t("浏览全部小说", "Browse All Novels")}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((f) => {
            const label = featureLabels[f.key];
            return (
              <div
                key={f.key}
                className="cyber-card p-6 text-center fly-in"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {lang === "zh" ? label.zh : label.en}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Novels */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {t("精选小说", "Featured Novels")}
          </h2>
          <p className="cyber-subtitle mb-8">
            {t("点击进入阅读", "Click to start reading")}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novels.map((novel) => (
              <Link
                key={novel.slug}
                href={`/novels/${novel.slug}`}
                className="cyber-card p-5 fly-in block hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-amber-100 to-pink-100 flex items-center justify-center text-2xl shrink-0">
                    📖
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-800 truncate">
                      {lang === "zh" ? novel.title.zh : novel.title.en}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {novel.author} · {lang === "zh" ? novel.status === "ongoing" ? "连载中" : "已完结" : novel.status === "ongoing" ? "Ongoing" : "Completed"}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {novel.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200"
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
      <footer className="cyber-footer py-8 px-4 text-center text-sm text-gray-500">
        <p>{t("© 2026 奇异小说 — 中英双语原创小说阅读平台", "© 2026 Fantasy Novels — Bilingual Original Novel Platform")}</p>
      </footer>
    </div>
  );
}
