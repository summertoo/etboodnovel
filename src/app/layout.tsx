import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";

export const metadata: Metadata = {
  title: {
    default: "双鱼小说 - 中英双语原创小说阅读",
    template: "%s | 双鱼小说",
  },
  description: "原创网络小说，中英双语阅读体验。穿越、武侠、短篇故事，各种精彩故事等你来读。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}