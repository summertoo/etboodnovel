"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangProvider";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", labelZh: "首页", labelEn: "Home" },
    { href: "/novels", labelZh: "小说", labelEn: "Novels" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-[var(--ocean-border)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">📖</span>
            <span className="font-bold text-lg ocean-title transition-transform group-hover:scale-105">
              {mounted ? (lang === "zh" ? "双鱼小说" : "ShuangYu Novels") : "双鱼小说"}
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-sky-100 text-sky-700"
                    : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                }`}
              >
                {mounted
                  ? lang === "zh"
                    ? link.labelZh
                    : link.labelEn
                  : link.labelZh}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleLang}
              className="text-xs px-4 py-2 rounded-full border border-[var(--ocean-border)] bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors font-medium"
            >
              {lang === "zh" ? "EN" : "中"}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
