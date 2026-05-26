# 奇异小说 — Fantasy Novels

中英双语原创小说阅读平台。从 [ZD Tech Studio](https://etboodonline.vercel.app) 分离出来的独立小说项目。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## 本地开发

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

## 当前小说

- **码农穿越平民世界 (Coder Transmigrates to the Common People's World)** — 连载中
- **群雄战记：中华英雄传 (Warlord Saga: Heroes of China)** — 连载中
- **驯服 (Xunfu)** — 连载中

## 数据结构

- `src/data/novels.ts` — 小说元数据
- `src/data/chapters/` — 各章节内容（JSON 格式，包含中英双语）

## 分离说明

该项目原为 [etboodonline](https://github.com/summertoo/etboodonline) 的一部分，于 2026-05-26 分离为独立项目。
