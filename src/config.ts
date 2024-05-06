import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Gabs Ferreira",
  desc: "Site show feito pelo Gabs e galerinha das internets",
  title: "Gabs Ferreira",
  ogImage: "Background.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "pt", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-BR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/gabsferreira",
    linkTitle: `Me segue no Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/o_gabsferreira",
    linkTitle: `Me segue no Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabsferreira/",
    linkTitle: `Me segue no LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/o_gabsferreira",
    linkTitle: `Me segue no Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.com/ogabsferreira",
    linkTitle: `Assista minhas lives no Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/gabsferreira",
    linkTitle: `Me siga no YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@o_gabsferreira",
    linkTitle: `Me segue no TikTok`,
    active: true,
  },
  {
    name: "CodePen",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.gg/7r4WhA7q",
    linkTitle: `Participe do meu servidor no Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/gabsferreira",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
