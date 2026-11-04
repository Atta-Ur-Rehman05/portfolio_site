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
let assets = 0;
const expectedOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    "https://portfolio-site-lilac-eight-30.vercel.app",
).origin;
function verifyAsset(url, route) {
  const relative = decodeURIComponent(url.split(/[?#]/)[0]).replace(/^\//, "");
  const file = path.resolve(root, relative);
  assert(file.startsWith(root + path.sep), `${route}: asset outside export`);
  assert(
    fs.existsSync(file) && fs.statSync(file).isFile(),
    `${route}: missing asset ${url}`,
  );
  assets++;
  return file;
}
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
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
  assert.equal(
    new URL(canonical).origin,
    expectedOrigin,
    `${route}: incorrect canonical origin`,
  );
  assert.equal(
    new URL(canonical).pathname,
    route,
    `${route}: incorrect canonical path`,
  );
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(
    ids.length,
    new Set(ids).size,
    `${route}: duplicate element IDs`,
  );
  for (const [tag] of html.matchAll(/<img\s[^>]*>/g)) {
    assert.match(
      tag,
      /\salt="[^"]*"/,
      `${route}: image missing alternative text`,
    );
    assert.match(
      tag,
      /\swidth="\d+"/,
      `${route}: image missing reserved width`,
    );
    assert.match(
      tag,
      /\sheight="\d+"/,
      `${route}: image missing reserved height`,
    );
  }
  for (const [, src] of html.matchAll(/\ssrc="(\/[^\"]+)"/g))
    verifyAsset(src, route);
  for (const [, json] of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    assert.equal(
      JSON.parse(json)["@type"],
      "Person",
      `${route}: invalid person metadata`,
    );
  }
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
    if (target && !pages.has(destination)) {
      const assetFile = verifyAsset(target, route);
      if (/\.pdf$/i.test(target)) {
        assert.equal(
          fs.readFileSync(assetFile).subarray(0, 5).toString(),
          "%PDF-",
          `${route}: invalid PDF download`,
        );
      }
      continue;
    }
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
assert(
  fs
    .readFileSync(path.join(root, "sitemap.xml"), "utf8")
    .includes(expectedOrigin),
  "Incorrect sitemap origin",
);
console.log(
  `Verified ${routes.length} exported routes, ${links} links, ${assets} asset references, section anchors, image attributes, unique IDs, canonical URLs, structured data, and sitemap.`,
);
