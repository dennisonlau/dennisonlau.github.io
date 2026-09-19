import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dennisonlau.github.io/",
    title: "Dennison Lau",
    description: "Book notes and reflections on ideas I am trying to understand.",
    author: "Dennison Lau",
    profile: "https://dennisonlau.github.io/about/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/London",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 4,
    scheduledPostMargin: 0,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/dennisonlau",
    },
    {
      name: "linkedin",
      url: "YOUR_LINKEDIN_PROFILE_URL",
    },
  ],
  shareLinks: [],
});
