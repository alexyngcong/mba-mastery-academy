/* ============================================================================
   build.js — regenerate the single self-contained index.html
   ----------------------------------------------------------------------------
   The course is edited as separate, easy-to-read source files in /assets.
   This script inlines them into ONE local-first index.html that works fully
   offline by just double-clicking it (no server, no internet, no folders).

   Run it after editing anything in /assets:
       node build.js
   ========================================================================= */

const fs = require("fs");
const path = require("path");

const here = __dirname;
const css        = fs.readFileSync(path.join(here, "assets/styles.css"), "utf8");
const curriculum = fs.readFileSync(path.join(here, "assets/curriculum.js"), "utf8");
const appjs      = fs.readFileSync(path.join(here, "assets/app.js"), "utf8");

// Safety: an inlined script must never contain a literal closing </script> tag.
[["curriculum.js", curriculum], ["app.js", appjs]].forEach(([name, src]) => {
  if (/<\/script/i.test(src)) {
    throw new Error(`Cannot inline ${name}: it contains a </script> sequence that would break the HTML.`);
  }
});

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MBA Mastery Academy — Master of Business Management</title>
  <meta name="description" content="An executive-grade, self-paced Master of Business Management program for managers and senior leaders — strategy, finance, marketing, operations, people, analytics, AI and governance, built for 2026 and beyond." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>" />
  <style>
${css}
  </style>
</head>
<body>

  <header class="topbar">
    <div class="logo" onclick="MBA.go('')">
      <span class="badge">🎓</span>
      <span>MBA Mastery Academy</span>
    </div>
    <div class="spacer"></div>
    <button class="nav-pill" data-nav="home" onclick="MBA.go('')">🏠 <span id="navHome">Home</span></button>
    <button class="nav-pill" data-nav="plan" onclick="MBA.go('plan')">🗓️ <span id="navPlan">Study Plan</span></button>
    <button class="nav-pill" data-nav="shortcuts" onclick="MBA.go('shortcuts')">🧰 <span id="navShortcuts">Toolkit</span></button>
    <button class="nav-pill" data-nav="certificate" onclick="MBA.go('certificate')">🏆 <span id="navCert">Certificate</span></button>
    <label class="searchbox" title="Search lessons, frameworks & concepts">
      🔍 <input id="search" type="text" placeholder="Search lessons, frameworks or concepts…" autocomplete="off" />
    </label>
  </header>

  <main class="wrap" id="app"><!-- screens render here --></main>

  <!-- Everything is inlined so this single file works fully offline, on its own. -->
  <script>
${curriculum}
  </script>
  <script>
${appjs}
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(here, "index.html"), html);
console.log(`✓ Built standalone index.html (${(html.length / 1024).toFixed(1)} KB) — open it directly in any browser.`);
