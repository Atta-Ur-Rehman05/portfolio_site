/** Set NEXT_PUBLIC_SITE_URL at build time when moving to another host. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-site-lilac-eight-30.vercel.app"
).replace(/\/$/, "");
