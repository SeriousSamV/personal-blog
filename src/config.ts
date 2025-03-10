export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Paul Samuel Vishesh",
  profile: "https://satnaing.dev/",
  desc: "A personal blog and portfolio site showcasing my professional work, projects, and thoughts. This repository contains the complete source code for my personal website where I share my experiences, skills, and creative endeavors.",
  title: "Paul Samuel Vishesh",
  ogImage: "https://avatars.githubusercontent.com/u/2021323",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/SeriousSamV/personal-blog/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;
