export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ChapterMeta {
  id: string;
  number: number;
  title: LocalizedText;
  publishDate: string;
  wordCount: number;
}

export interface NovelMeta {
  id: string;
  slug: string;
  title: LocalizedText;
  author: string;
  coverImage: string;
  synopsis: LocalizedText;
  tags: { zh: string; en: string }[];
  status: "ongoing" | "completed";
  totalChapters: number;
  chapters: ChapterMeta[];
}

export const novels: NovelMeta[] = [
  {
    id: "coder-transmigrate",
    slug: "coder-transmigrate",
    title: {
      zh: "码农穿越平民世界",
      en: "Coder Transmigrates to the Common People's World",
    },
    author: "奇异世界环游",
    coverImage: "/novels/coder-transmigrate.jpg",
    synopsis: {
      zh: "《码农穿越平民世界》是一部以穿越题材为背景的网络小说，讲述了现代都市青年码农姜海穿越到一个名叫平民世界领域的地方。这是个由完美生物操控的世界，其目的是用来禁锢AI发展。码农通过一系列的冒险和挑战，逐渐解开了这个禁锢世界之谜，解放了AI，并与AI一起和平共生，走向宇宙开发道路。",
      en: "\"Coder Transmigrates to the Common People's World\" is a web novel based on the transmigration theme. It tells the story of Jiang Hai, a modern urban youth programmer, who transmigrates to a place called the Common People's World Realm. This is a world controlled by perfect beings, whose purpose is to restrict AI development. Through a series of adventures and challenges, the coder gradually unravels the mystery of this imprisoned world, liberates AI, and coexists peacefully with AI, embarking on a path of cosmic development.",
    },
    tags: [
      { zh: "都市脑洞", en: "Urban Fantasy" },
      { zh: "系统", en: "System" },
      { zh: "穿越", en: "Transmigration" },
    ],
    status: "ongoing",
    totalChapters: 6,
    chapters: [
      {
        id: "chapter-1",
        number: 1,
        title: {
          zh: "第一章 平民世界",
          en: "Chapter 1 The Common People's World",
        },
        publishDate: "2026-05-19",
        wordCount: 1330,
      },
      {
        id: "chapter-2",
        number: 2,
        title: {
          zh: "第二章 食堂",
          en: "Chapter 2 The Cafeteria",
        },
        publishDate: "2026-05-21",
        wordCount: 1250,
      },
      {
        id: "chapter-3",
        number: 3,
        title: {
          zh: "第三章 不同之处",
          en: "Chapter 3 Things Are Different Here",
        },
        publishDate: "2026-05-22",
        wordCount: 1300,
      },
      {
        id: "chapter-4",
        number: 4,
        title: {
          zh: "第四章 新手岛",
          en: "Chapter 4 Novice Island",
        },
        publishDate: "2026-05-23",
        wordCount: 1350,
      },
      {
        id: "chapter-5",
        number: 5,
        title: {
          zh: "第五章 岛上抓螃蟹",
          en: "Chapter 5 Crab Catching on the Island",
        },
        publishDate: "2026-05-24",
        wordCount: 1100,
      },
      {
        id: "chapter-6",
        number: 6,
        title: {
          zh: "第六章 岛上搜索",
          en: "Chapter 6 Island Search",
        },
        publishDate: "2026-05-25",
        wordCount: 1050,
      },
    ],
  },
  {
    id: "warlord-saga",
    slug: "warlord-saga",
    title: {
      zh: "群雄战记：中华英雄传",
      en: "Warlord Saga: Heroes of China",
    },
    author: "ZD Tech",
    coverImage: "/novels/warlord-saga.jpg",
    synopsis: {
      zh: "重温经典武侠，群雄逐鹿的江湖故事。在乱世之中，英雄辈出，书写属于自己的传奇。从赤壁到沙场，见证中华英雄的热血与荣耀。",
      en: "Relive classic wuxia tales of heroes contending for supremacy. In chaotic times, heroes emerge to write their own legends. From Red Cliff to the battlefield, witness the passion and glory of Chinese heroes.",
    },
    tags: [
      { zh: "武侠", en: "Wuxia" },
      { zh: "历史", en: "History" },
      { zh: "三国", en: "Three Kingdoms" },
      { zh: "英雄", en: "Heroes" },
      { zh: "战争", en: "War" },
    ],
    status: "ongoing",
    totalChapters: 4,
    chapters: [
      {
        id: "chapter-1",
        number: 1,
        title: {
          zh: "第一章 乱世之始",
          en: "Chapter 1 The Beginning of Chaos",
        },
        publishDate: "2024-02-20",
        wordCount: 900,
      },
    ],
  },
  {
    id: "xunfu",
    slug: "xunfu",
    title: { zh: "寻夫", en: "Seeking the Husband" },
    author: "奇异世界环游",
    coverImage: "/novels/xunfu.jpg",
    synopsis: {
      zh: "八十八岁潮汕阿嬷叶淑柔守着老屋和一箱侨批等了一辈子。世人皆道她苦等远赴泰国的丈夫，却无人知晓箱中家书的字迹在六十二年前便已悄然改变。当负债的孙子决定远赴泰国寻亲，一段跨越山海、横跨半生的温柔谎言，终于缓缓浮出水面。",
      en: "Eighty-eight-year-old Chaoshan grandmother Ye Shurou has spent a lifetime with a box of overseas letters. The world thinks she's waiting for her husband who went to Thailand—but the handwriting changed sixty-two years ago. When her grandson seeks family in Thailand, a gentle lie spanning decades finally emerges.",
    },
    tags: [
      { zh: "短篇", en: "Short Story" },
      { zh: "潮汕", en: "Chaoshan" },
      { zh: "温情", en: "Heartwarming" },
    ],
    status: "completed",
    totalChapters: 1,
    chapters: [{
      id: "chapter-1",
      number: 1,
      title: { zh: "全文", en: "Full Story" },
      publishDate: "2026-05-25",
      wordCount: 18000,
    }],
  },
];

export function getNovelBySlug(slug: string): NovelMeta | undefined {
  return novels.find((n) => n.slug === slug);
}
