import type { Site, SocialObjects, OG_Type } from "./types";

export const SITE: Site = {
    website: "https://img-cn.vercel.app/",
    author: "等闲（原作者：liruifengv）",
    title: "Daily Poetry Images",
    desc: "每天一句古诗词，利用 Bing DALL-E-3 生成 AI 图片",
};

export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://github.com/liruifengv",
        linkTitle: `liruifengv's Github`,
        active: true,
    },
];

export const OG: OG_Type = {
    emojiType: "twemoji",
    // ogImage: "astropaper-og.jpg",
};
