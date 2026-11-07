import type { SiteConfig } from "./types";

/**
 * ★★★ 全站唯一配置文件 ★★★
 * 套用本模板：改完本文件 → 提交 → 在仓库发一篇 issue 即完成部署。
 * 每个模块的说明见 types.ts 与 README「配置速查表」。
 */
const site: SiteConfig = {
  site: {
    url: "https://iamx688110.github.io/",
    title: "Iamx的博客",
    subtitle: "发现世界上所有美好的事物，分享有趣的东西",
    description: "Iamx 的个人博客",
    lang: "zh-CN",
  },
  author: {
    name: "Iamx",
    avatar: "https://b.kafan.cn/001/33/65/84_avatar_big.jpg",
    email: "3349038071@qq.com",
    bio: "哈哈哈",
  },
  nav: [
    { label: "首页", href: "/" },
    { label: "标签", href: "/tags/" },
    { label: "关于", href: "/about/" },
  ],
  footer: {
    text: "转载请注明出处",
    links: [
      { label: "GitHub", href: "https://github.com/Iamx688110" },
      { label: "RSS", href: "/rss.xml" },
    ],
  },
  issues: {
    aboutLabel: "about",
    excludeLabels: [],
    archivedLabel: "归档",
  },
  about: {
    // 技能光谱：value 0-100，随时增删维度（3-8 轴皆可渲染）
    skillAxes: [
      { label: "开发", value: 82 },
      { label: "网络", value: 93 },
      { label: "AI", value: 88 },
      { label: "研究", value: 74 },
      { label: "修行", value: 90 },
    ],
    contacts: [
      { label: "GitHub", href: "https://github.com/Iamx688110", note: "@Imx688110" },
      { label: "邮箱", href: "mailto:3349038071@qq.com", note: "3349038071@qq.com" },
    ],
  },
  features: {
    comments: { provider: "utterances", repo: "Iamx688110/Iamx688110.github.io" },
    search: true,
    counter: "vercount",
    analytics: {
      // Cloudflare Web Analytics：CF 控制台 → 你的域名 → Web Analytics → 手动安装，复制 cfwml-token 填入
      cloudflare: "",
      // Umami Cloud（免费档）：cloud.umami.is → Add website → 拿到 script.js 地址与 data-website-id
      // umami: { src: "https://cloud.umami.is/script.js", websiteId: "xxxxxxxx-xxxx" },
      clarity: "na4qnk47pl",
    },
    rss: true,
  },
  theme: {
    defaultMode: "auto",
  },
};

export default site;
