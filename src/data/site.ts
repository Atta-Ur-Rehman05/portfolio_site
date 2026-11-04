/** Set NEXT_PUBLIC_SITE_URL at build time when moving to another host. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://atta-ur-rehman-obsidian.mobilehaven.chatgpt.site"
).replace(/\/$/, "");
