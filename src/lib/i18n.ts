export type Lang = "en" | "zh";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.whatWeDo": "What We Do",
    "nav.service": "Service",
    "nav.project": "Project",
    "nav.blog": "Blog",
    "nav.novels": "Novels",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "ZD Tech Studio",
    "hero.subtitle": "Self-media + Games + Apps — Bilingual novels, web games & creative tools",
    "hero.tagline":
      "Web Games • Bilingual Novels • DApps • Roblox",
    "hero.contact": "Contact Now",
    "hero.viewGames": "View Games ↓",

    // Roblox Games
    "roblox.title": "🎮 Roblox Games",
    "roblox.subtitle": "Our flagship games on the Roblox platform.",
    "roblox.live": "● Live",
    "roblox.soon": "◌ Soon",
    "roblox.play": "Play on Roblox →",
    "roblox.comingSoon": "Coming Soon",

    // DApps
    "dapps.title": "🚀 DApps & Projects",
    "dapps.subtitle": "Decentralized applications built on Sui Network.",
    "dapps.visit": "Visit",
    "dapps.github": "GitHub",

    // Web Games
    "webgames.title": "🌐 Web Games",
    "webgames.subtitle": "Browser-based games for everyone to enjoy.",
    "webgames.playNow": "Play Now",

    // Open Source
    "opensource.title": "💡 Open Source",
    "opensource.subtitle": "Contributions to the community.",
    "opensource.project": "Project",
    "opensource.myPR": "My PR",

    // Newsletter
    "newsletter.title": "📬 Stay Updated",
    "newsletter.subtitle": "Get notified when we launch new games or projects.",
    "newsletter.placeholder": "Enter your email...",
    "newsletter.subscribe": "Subscribe",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.success": "Subscribed! We'll keep you posted.",
    "newsletter.duplicate": "You're already subscribed.",
    "newsletter.error": "Something went wrong. Try again later.",

    // Footer
    "footer.about": "ZD Tech",
    "footer.aboutDesc":
      "Independent game developer & Web3 builder. Creating experiences on Roblox and Sui blockchain.",
    "footer.games": "Games",
    "footer.projects": "Projects",
    "footer.connect": "Connect",
    "footer.copyright": "Copyright © 2026 ZD Tech",

    // What We Do
    "whatwedo.title": "What We Do",
    "whatwedo.subtitle":
      "We build decentralized applications, web3 games, and creative tools on cutting-edge blockchain technology.",
    "whatwedo.dappTitle": "DApp Development",
    "whatwedo.dappDesc":
      "Full-stack decentralized application development on Sui Network, from smart contracts to frontend interfaces.",
    "whatwedo.gameTitle": "Web3 Games",
    "whatwedo.gameDesc":
      "Browser-based and Roblox games with blockchain integration, NFT assets, and play-to-earn mechanics.",
    "whatwedo.consultTitle": "Technical Consulting",
    "whatwedo.consultDesc":
      "Architecture design, code review, and technical guidance for blockchain projects and teams.",

    // Service
    "service.title": "Our Services",
    "service.subtitle": "End-to-end solutions for your Web3 journey.",
    "service.s1Title": "Smart Contract Development",
    "service.s1Desc": "Secure, audited Move smart contracts on Sui Network.",
    "service.s2Title": "Frontend & UI/UX",
    "service.s2Desc":
      "Modern React-based interfaces with wallet integration and responsive design.",
    "service.s3Title": "Game Development",
    "service.s3Desc":
      "Browser games, Roblox experiences, and blockchain-powered game economies.",
    "service.s4Title": "Web & Mini Programs",
    "service.s4Desc":
      "Websites, WeChat mini programs, and official account development.",

    // Project
    "project.title": "Projects",
    "project.subtitle": "Explore our portfolio of games, DApps, tools, and creative works.",
    "project.comingSoon": "Coming Soon",
    "project.search": "Search projects...",
    "project.all": "All",
    "project.filter": "Filter",
    "project.category.game": "Games",
    "project.category.roblox": "Roblox Games",
    "project.category.webgame": "Web Games",
    "project.category.dapp": "DApps",
    "project.category.tool": "Tools",
    "project.category.article": "Articles",
    "project.category.novel": "Novels",
    "project.platform.roblox": "Roblox",
    "project.platform.web": "Web",
    "project.live": "● Live",
    "project.soon": "◌ Soon",
    "project.new": "NEW",
    "project.play": "Play →",
    "project.visit": "Visit →",
    "project.github": "GitHub →",
    "project.read": "Read →",
    "project.noResults": "No projects found. Try a different search or filter.",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Insights, tutorials, and updates from the team.",
    "blog.comingSoon": "Coming Soon",
    "blog.comingDesc": "We're working on some great content. Stay tuned!",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Have a project in mind? Let's talk.",
    "contact.email": "📧 Email",
    "contact.quickMsg": "💬 Quick Message",
    "contact.yourEmail": "Your email",
    "contact.yourMsg": "Your message...",
    "contact.send": "Send Message",
    "contact.sent": "Thanks! We'll get back to you soon.",

    // Roblox game descriptions
    "game.apexMindDesc":
      "A challenging mind-bending puzzle experience on Roblox.",
    "game.lobsterBumpDesc":
      "Bump, compete, and dominate in this fast-paced Roblox game.",
    "game.warlordSagaDesc":
      "An epic saga of warlords battling for supremacy. Coming soon.",
    "game.warlordHeroesDesc":
      "Three Kingdoms strategy game - Released with first level gameplay available. Experience the legendary stories of Chinese heroes.",
    "game.lobsterRunDesc":
      "A fun lobster parkour H5 game - run, jump, and dodge obstacles!",
    "game.footballDesc":
      "Football Shootout & Goalkeeper H5 Game - Shoot Accurately, Defend Ruthlessly!",
    "game.handBattleDesc": "A game where players can battle with their hands.",
    "game.saveManDesc":
      "Use the rescue claw to save trapped miners from the mine! Click to drop the claw and pull them up.",
    "game.miniSoccerDesc":
      "Mini Soccer is a game that allows players to play soccer in the metaverse.",
    "game.comingSoonDesc": "Coming soon. Stay tuned!",

    // DApp descriptions
    "dapp.ruokDesc":
      "A Decentralized Check-In Triggered Timed Transfer DApp On Sui Network",
    "dapp.write3Desc":
      "A platform for novel authors to upload novels on Sui blockchain.",

    // Open Source
    "os.suiBP": "Sui Best Practices",
    "os.suiBPDesc":
      "Contributed to the Sui Best Practices repository with code improvements and documentation",

    // DApps section projects
    "dapp.areYouOkay": "Are You Okay?",
    "dapp.miniSoccer": "Mini Soccer",
    "dapp.suiWrite3": "Sui Write3",
    "dapp.handBattle": "Hand Battle",

    // Articles
    "articles.title": "📝 Articles & Tutorials",
    "articles.subtitle": "Technical writings and blockchain tutorials.",
    "articles.read": "Read →",

    // Novels
    "novels.title": "📚 Creative Writing",
    "novels.subtitle": "Fiction and creative works.",
    "novels.read": "Read Novel →",

    // OPC Network
    "opc.title": "🌐 OPC Network",
    "opc.subtitle": "Open Person Company collaborative network projects.",
    "opc.visit": "GitHub →",

    // Stable Gateway
    "gateway.title": "🚉 Stable Gateway",
    "gateway.subtitle": "Recommended stable access points and tools.",
    "gateway.visit": "Visit →",
    "freeModel.title": "Free Model - AI API Gateway",
    "freeModel.desc": "Another stable AI API gateway option, providing access to various models at competitive rates.",

    // News
    "news.title": "📰 Latest News",
    "news.subtitle": "AI and tech industry highlights.",
  },

  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.whatWeDo": "关于我们",
    "nav.service": "服务",
    "nav.project": "项目",
    "nav.blog": "博客",
    "nav.novels": "小说",
    "nav.news": "新闻",
    "nav.contact": "联系",

    // Hero
    "hero.title": "ZD Tech 工作室",
    "hero.subtitle": "自媒体 + 游戏 + 应用 — 双语小说、网页游戏与创意工具",
    "hero.tagline": "网页游戏 • 双语小说 • DApp • Roblox",
    "hero.contact": "联系我们",
    "hero.viewGames": "查看游戏 ↓",

    // Roblox Games
    "roblox.title": "🎮 Roblox 游戏",
    "roblox.subtitle": "我们在 Roblox 平台上的旗舰游戏。",
    "roblox.live": "● 已上线",
    "roblox.soon": "◌ 即将上线",
    "roblox.play": "在 Roblox 上游玩 →",
    "roblox.comingSoon": "即将上线",

    // DApps
    "dapps.title": "🚀 DApp 和项目",
    "dapps.subtitle": "基于 Sui 网络构建的去中心化应用。",
    "dapps.visit": "访问",
    "dapps.github": "GitHub",

    // Web Games
    "webgames.title": "🌐 网页游戏",
    "webgames.subtitle": "基于浏览器的休闲游戏，随时随地畅玩。",
    "webgames.playNow": "立即开玩",

    // Open Source
    "opensource.title": "💡 开源贡献",
    "opensource.subtitle": "为社区做出的贡献。",
    "opensource.project": "项目",
    "opensource.myPR": "我的 PR",

    // Newsletter
    "newsletter.title": "📬 订阅更新",
    "newsletter.subtitle": "新游戏或项目上线时第一时间通知您。",
    "newsletter.placeholder": "输入您的邮箱...",
    "newsletter.subscribe": "订阅",
    "newsletter.subscribing": "订阅中...",
    "newsletter.success": "订阅成功！我们会及时通知您。",
    "newsletter.duplicate": "您已经订阅过了。",
    "newsletter.error": "出了点问题，请稍后再试。",

    // Footer
    "footer.about": "ZD Tech",
    "footer.aboutDesc":
      "独立游戏开发者与 Web3 建设者，在 Roblox 和 Sui 区块链上创造体验。",
    "footer.games": "游戏",
    "footer.projects": "项目",
    "footer.connect": "联系",
    "footer.copyright": "Copyright © 2026 ZD Tech",

    // What We Do
    "whatwedo.title": "我们做什么",
    "whatwedo.subtitle":
      "我们在前沿区块链技术上构建去中心化应用、Web3 游戏和创意工具。",
    "whatwedo.dappTitle": "DApp 开发",
    "whatwedo.dappDesc":
      "在 Sui 网络上进行全栈去中心化应用开发，从智能合约到前端界面。",
    "whatwedo.gameTitle": "Web3 游戏",
    "whatwedo.gameDesc":
      "基于浏览器和 Roblox 的游戏，集成区块链、NFT 资产和 Play-to-Earn 机制。",
    "whatwedo.consultTitle": "技术咨询",
    "whatwedo.consultDesc":
      "为区块链项目和团队提供架构设计、代码审查和技术指导。",

    // Service
    "service.title": "我们的服务",
    "service.subtitle": "为您的 Web3 之旅提供端到端解决方案。",
    "service.s1Title": "智能合约开发",
    "service.s1Desc": "在 Sui 网络上开发安全、经过审计的 Move 智能合约。",
    "service.s2Title": "前端与 UI/UX",
    "service.s2Desc": "基于 React 的现代界面，集成钱包功能和响应式设计。",
    "service.s3Title": "游戏开发",
    "service.s3Desc": "浏览器游戏、Roblox 体验和区块链驱动的游戏经济系统。",
    "service.s4Title": "网页与小程序",
    "service.s4Desc": "企业官网、微信小程序和公众号开发。",

    // Project
    "project.title": "项目展示",
    "project.subtitle": "探索我们的游戏、DApp、工具和创意作品集。",
    "project.comingSoon": "即将上线",
    "project.search": "搜索项目...",
    "project.all": "全部",
    "project.filter": "筛选",
    "project.category.game": "游戏",
    "project.category.roblox": "Roblox游戏",
    "project.category.webgame": "网页游戏",
    "project.category.dapp": "DApp",
    "project.category.tool": "工具",
    "project.category.article": "文章",
    "project.category.novel": "小说",
    "project.platform.roblox": "Roblox",
    "project.platform.web": "网页",
    "project.live": "● 已上线",
    "project.soon": "◌ 即将上线",
    "project.new": "新",
    "project.play": "立即游玩 →",
    "project.visit": "访问 →",
    "project.github": "GitHub →",
    "project.read": "阅读 →",
    "project.noResults": "未找到匹配的项目。请尝试其他搜索词或筛选条件。",

    // Blog
    "blog.title": "博客",
    "blog.subtitle": "团队的技术见解、教程和动态。",
    "blog.comingSoon": "即将上线",
    "blog.comingDesc": "我们正在准备精彩内容，敬请期待！",

    // Contact
    "contact.title": "联系我们",
    "contact.subtitle": "有项目想法？让我们聊聊。",
    "contact.email": "📧 邮箱",
    "contact.quickMsg": "💬 快速留言",
    "contact.yourEmail": "您的邮箱",
    "contact.yourMsg": "留言内容...",
    "contact.send": "发送",
    "contact.sent": "感谢！我们会尽快回复您。",

    // Roblox game descriptions
    "game.apexMindDesc": "在 Roblox 上挑战烧脑益智体验。",
    "game.lobsterBumpDesc": "碰撞、竞争、称霸，体验快节奏的 Roblox 游戏。",
    "game.warlordSagaDesc": "领主争霸的史诗传奇，即将上线。",
    "game.warlordHeroesDesc": "三国题材策略游戏 — 已发布，开放第一关卡基本玩法。体验中华英雄的传奇故事。",
    "game.lobsterRunDesc": "有趣的龙虾跑酷 H5 游戏 — 奔跑、跳跃、躲避障碍！",
    "game.footballDesc": "足球射门&守门 H5 游戏 — 射门要准，防守要狠！",
    "game.handBattleDesc": "用手势对战的趣味游戏。",
    "game.saveManDesc": "操控救援抓斗，从矿井中救出被困人员！点击释放抓斗，将他们拉上来。",
    "game.miniSoccerDesc": "在元宇宙中踢足球的游戏。",
    "game.comingSoonDesc": "即将上线，敬请期待！",

    // DApp descriptions
    "dapp.ruokDesc": "基于 Sui 网络的去中心化签到触发定时转账 DApp",
    "dapp.write3Desc": "基于 Sui 区块链的小说创作与上传平台。",

    // Open Source
    "os.suiBP": "Sui 最佳实践",
    "os.suiBPDesc": "为 Sui 最佳实践仓库贡献了代码改进和文档",

    // DApps section projects
    "dapp.areYouOkay": "Are You Okay?",
    "dapp.miniSoccer": "Mini Soccer",
    "dapp.suiWrite3": "Sui Write3",
    "dapp.handBattle": "Hand Battle",

    // Articles
    "articles.title": "📝 技术文章",
    "articles.subtitle": "技术分享与区块链教程。",
    "articles.read": "阅读 →",

    // Novels
    "novels.title": "📚 创作小说",
    "novels.subtitle": "原创小说与文学创作。",
    "novels.read": "阅读小说 →",

    // OPC Network
    "opc.title": "🌐 开源一人公司（OPC）协作网络",
    "opc.subtitle": "开源一人公司协作网络相关项目集合。",
    "opc.visit": "GitHub →",

    // Stable Gateway
    "gateway.title": "🚉 稳定的中转站",
    "gateway.subtitle": "推荐稳定可用的 AI 接入与中转工具。",
    "gateway.visit": "立即访问 →",
    "freeModel.title": "Free Model - AI API 中转站",
    "freeModel.desc": "另一个稳定可用的 AI API 中转站，提供多种模型的接入，价格优惠。",

    // News
    "news.title": "📰 最新动态",
    "news.subtitle": "AI 与科技行业每日速览。",
  },
};
