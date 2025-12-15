import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const site = "http://localhost:4321";

  const pages = [
    "/en",
    "/el"
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
