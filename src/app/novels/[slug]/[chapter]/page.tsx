"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { getNovelBySlug } from "@/data/novels";
import { notFound } from "next/navigation";
import type { ChapterContent } from "@/data/chapters";

interface ChapterData extends ChapterContent {
  novelTitle: { zh: string; en: string };
  chapterTitle: { zh: string; en: string };
  chapterNumber: number;
  totalChapters: number;
  prevChapter: number | null;
  nextChapter: number | null;
}

export default function ChapterPage() {
  const { slug, chapter } = useParams<{ slug: string; chapter: string }>();
  const { lang } = useLang();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);
  const [data, setData] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [bilingualMode, setBilingualMode] = useState(true);
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");

  const novel = getNovelBySlug(slug);

  useEffect(() => {
    if (!novel) {
      setLoading(false);
      return;
    }
    const chapterNum = parseInt(chapter, 10);
    const chMeta = novel.chapters.find((c) => c.number === chapterNum);
    if (!chMeta) {
      setLoading(false);
      return;
    }

    const prevCh = chapterNum > 1 ? chapterNum - 1 : null;
    const nextCh = chapterNum < novel.totalChapters ? chapterNum + 1 : null;

    fetch(`/api/novels/${slug}/${chapterNum}`)
      .then((res) => res.json())
      .then((json: ChapterContent) => {
        setData({
          ...json,
          novelTitle: novel.title,
          chapterTitle: chMeta.title,
          chapterNumber: chapterNum,
          totalChapters: novel.totalChapters,
          prevChapter: prevCh,
          nextChapter: nextCh,
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [slug, chapter, novel]);

  if (!novel) {
    notFound();
  }

  if (loading) {
    return (
      <div className="orange-container min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="flex items-center gap-2 text-orange-600">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>{t("加载中...", "Loading...")}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    notFound();
  }

  const displayContent = lang === "zh" ? data.zh : data.en;

  const fontSizeClasses = {
    small: "text-base",
    medium: "text-lg",
    large: "text-xl",
  };

  return (
    <div className="orange-container min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-6 md:py-10">
        {/* Back link */}
        <Link
          href={`/novels/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 mb-6 font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("返回小说详情", "Back to Novel")}
        </Link>

        {/* Chapter header */}
        <div className="mb-8 fly-in">
          <p className="text-sm text-slate-500 mb-1">
            {lang === "zh" ? data.novelTitle.zh : data.novelTitle.en}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold orange-title">
            {lang === "zh" ? data.chapterTitle.zh : data.chapterTitle.en}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="text-xs text-slate-400">
              {t("第", "Ch.")}
              {data.chapterNumber} / {data.totalChapters}
            </span>
            
            {/* 字体大小控制 */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              {(["small", "medium", "large"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    fontSize === size
                      ? "bg-white text-orange-600 shadow-sm"
                      : "text-slate-500 hover:text-orange-600"
                  }`}
                >
                  {size === "small" ? "A" : size === "medium" ? "A+" : "A++"}
                </button>
              ))}
            </div>

            <button
              onClick={() => setBilingualMode(!bilingualMode)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                bilingualMode
                  ? "bg-orange-100 border-orange-300 text-orange-700"
                  : "bg-slate-50 border-slate-200 text-slate-500"
              }`}
            >
              {bilingualMode
                ? t("双语模式", "Bilingual")
                : t("单语模式", "Single Lang")}
            </button>
          </div>
        </div>

        {/* Chapter content */}
        <div className={`reader-mode fly-in ${fontSizeClasses[fontSize]}`}>
          {bilingualMode ? (
            /* Bilingual mode: side by side */
            <div className="space-y-4">
              {data.zh.map((para, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 py-3 border-b border-orange-100">
                  <p className="text-slate-800 leading-[1.9] md:w-1/2 md:text-right">
                    {para}
                  </p>
                  <p className="text-slate-500 leading-[1.9] italic md:w-1/2">
                    {data.en[i] || ""}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            /* Single language mode */
            displayContent.map((para, i) => (
              <p
                key={i}
                className="text-slate-800 leading-[1.9] mb-6"
              >
                {para}
              </p>
            ))
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-orange-100">
          {data.prevChapter ? (
            <Link
              href={`/novels/${slug}/${data.prevChapter}`}
              className="orange-button-small inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("上一章", "Previous")}
            </Link>
          ) : (
            <span />
          )}

          {data.nextChapter ? (
            <Link
              href={`/novels/${slug}/${data.nextChapter}`}
              className="orange-button-small inline-flex items-center gap-1.5"
            >
              {t("下一章", "Next")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>

      <footer className="orange-footer py-8 px-4 text-center text-sm text-slate-500">
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
