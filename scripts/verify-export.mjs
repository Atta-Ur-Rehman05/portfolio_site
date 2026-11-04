import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = path.resolve("out");
const routes = [
  "/",
  "/projects",
  "/projects/intellex",
  "/projects/fastapi-journey",
  "/projects/rag-journey",
  "/projects/dsa-journey",
];
const pages = new Map(
  routes.map((route) => [
    route,
    fs.readFileSync(
      path.join(root, route === "/" ? "index.html" : `${route.slice(1)}.html`),
      "utf8",
    ),
  ]),
);
let links = 0;
for (const [route, html] of pages) {
  assert.equal(
    [...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length,
    1,
    `${route}: expected one h1`,
  );
  assert.match(html, /<html[^>]+lang="en"/, `${route}: missing language`);
  assert.match(
    html,
    /<meta name="description" content="[^"]+"/,
    `${route}: missing description`,
  );
  assert.match(html, /id="main-content"/, `${route}: missing skip-link target`);
  assert.match(html, /<link rel="canonical"/, `${route}: missing canonical`);
  assert(
    !html.includes("cdn.tailwindcss.com"),
    `${route}: runtime Tailwind CDN found`,
  );
  assert(
    !html.includes("fonts.googleapis.com"),
    `${route}: external font request found`,
  );
  for (const [, href] of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    links++;
    if (/^(https?:|mailto:)/.test(href)) continue;
    const [target, fragment] = href.split("#");
    const destination = target || route;
    assert(pages.has(destination), `${route}: invalid internal route ${href}`);
    if (fragment)
      assert(
        pages.get(destination).includes(`id="${fragment}"`),
        `${route}: missing anchor ${href}`,
      );
  }
}
assert(
  pages.get("/projects/intellex").includes("In Development"),
  "Intellex must show its status",
);
assert(fs.existsSync(path.join(root, "sitemap.xml")), "Missing sitemap");
assert(fs.existsSync(path.join(root, "robots.txt")), "Missing robots");
console.log(
  `Verified ${routes.length} exported routes, ${links} links, section anchors, basic semantic structure, metadata, and local font delivery.`,
);
