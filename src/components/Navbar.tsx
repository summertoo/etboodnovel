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
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-[var(--cyber-border)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <span className="font-bold text-lg cyber-title">
              {mounted ? (lang === "zh" ? "奇异小说" : "Fantasy Novels") : "奇异小说"}
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[var(--cyber-primary)] font-semibold"
                    : "text-[var(--cyber-muted)] hover:text-[var(--cyber-primary)]"
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
              className="text-xs px-3 py-1.5 rounded-full border border-[var(--cyber-border)] hover:bg-gray-50 transition-colors"
            >
              {lang === "zh" ? "EN" : "中"}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
