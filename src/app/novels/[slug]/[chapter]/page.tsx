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
      <div className="cyber-container min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <p className="text-gray-500">{t("加载中...", "Loading...")}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    notFound();
  }

  const displayContent = lang === "zh" ? data.zh : data.en;

  return (
    <div className="cyber-container min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Back link */}
        <Link
          href={`/novels/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 mb-6"
        >
          ← {t("返回小说详情", "Back to Novel")}
        </Link>

        {/* Chapter header */}
        <div className="mb-8 fly-in">
          <p className="text-sm text-gray-500 mb-1">
            {lang === "zh" ? data.novelTitle.zh : data.novelTitle.en}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold cyber-title">
            {lang === "zh" ? data.chapterTitle.zh : data.chapterTitle.en}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-gray-400">
              {t("第", "Ch.")}
              {data.chapterNumber} / {data.totalChapters}
            </span>
            <button
              onClick={() => setBilingualMode(!bilingualMode)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                bilingualMode
                  ? "bg-amber-50 border-amber-300 text-amber-700"
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
            >
              {bilingualMode
                ? t("双语模式", "Bilingual")
                : t("单语模式", "Single Lang")}
            </button>
          </div>
        </div>

        {/* Chapter content */}
        <div className="space-y-5 fly-in">
          {bilingualMode && lang === "zh" ? (
            /* Bilingual mode: show both, zh first */
            data.zh.map((para, i) => (
              <div key={i} className="border-l-2 border-amber-200 pl-4">
                <p className="text-base leading-relaxed text-gray-800 mb-2">
                  {para}
                </p>
                {data.en[i] && (
                  <p className="text-sm leading-relaxed text-gray-500 italic">
                    {data.en[i]}
                  </p>
                )}
              </div>
            ))
          ) : bilingualMode && lang === "en" ? (
            /* Bilingual mode: show both, en first */
            data.en.map((para, i) => (
              <div key={i} className="border-l-2 border-amber-200 pl-4">
                <p className="text-base leading-relaxed text-gray-800 mb-2">
                  {para}
                </p>
                {data.zh[i] && (
                  <p className="text-sm leading-relaxed text-gray-500">
                    {data.zh[i]}
                  </p>
                )}
              </div>
            ))
          ) : (
            /* Single language mode */
            displayContent.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-gray-800"
              >
                {para}
              </p>
            ))
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-amber-100">
          {data.prevChapter ? (
            <Link
              href={`/novels/${slug}/${data.prevChapter}`}
              className="cyber-button-small inline-flex items-center gap-1"
            >
              ← {t("上一章", "Previous")}
            </Link>
          ) : (
            <span />
          )}

          {data.nextChapter ? (
            <Link
              href={`/novels/${slug}/${data.nextChapter}`}
              className="cyber-button-small inline-flex items-center gap-1"
            >
              {t("下一章", "Next")} →
            </Link>
          ) : (
            <span />
          )}
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
