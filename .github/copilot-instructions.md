<!-- Copilot instructions for AI coding agents working on this repo -->

# Project Snapshot

+ Small, static website for "FitZone Gym" (pure client-side HTML/CSS/JS).
+ Key files: `index.html`, `about.html`, `services.html`, `service-details.html`, `contact.html`, `login.html`, `register.html`.
+ Assets: `js/validation.js` and `CSS/style.css` (note folder name casing; HTML references `css/style.css`).

# Big Picture (what an agent should know)

+ There is no backend or build system: everything runs in the browser. Changes are visible by opening the HTML files in a browser or serving the folder over HTTP.
+ Navigation is static: links are plain anchor tags between HTML files (e.g. `<a href="services.html">Programs</a>` in `index.html`).
+ Client-side form handling is centralized in `js/validation.js` and relies on DOM `id` globals (e.g. `contactForm`, `name`, `email`, `message`) rather than explicit `document.querySelector` calls.

# Files & Patterns to Reference

+ `js/validation.js` — main place for client-side validation. It is loaded with `defer` in pages that need it.
   + Pattern: checks element presence with `if (contactForm) { ... }` and uses `id`-named globals created by the browser.
   + Example behavior: on submit, sets text on `#error`, `#loginError`, `#registerError` elements.
+ `CSS/style.css` — global styles for layout, form inputs, and errors.
+ `contact.html`, `login.html`, `register.html` — show how forms are structured and which IDs are expected by `validation.js` (e.g. `id="contactForm"`, `id="loginForm"`, `id="registerForm"`).

# Project-specific notes and conventions

+ Case sensitivity: HTML uses `css/style.css` (lowercase) while the repo folder is `CSS/` (uppercase). On Windows this is fine, but it will break on case-sensitive filesystems. Prefer `css/` lowercase when adding files.
+ DOM globals: the codebase relies on browser-created globals for elements that have `id` attributes. When modifying or refactoring `js/validation.js`, either preserve this pattern or replace it consistently with explicit DOM queries (`document.getElementById`/`querySelector`).
+ Script loading: JS is included with `defer` in page head. Keep `defer` so the DOM is available when the script runs.

# How to run & test (developer workflows)

+ Quick (no server): double-click an HTML file in Explorer or open it in the browser.
+ Recommended (serves relative links consistently): from the repository root (PowerShell), run:
```
python -m http.server 8000
```
  then open `http://localhost:8000/`.
+ Alternative: use VS Code Live Server extension or `npx http-server` / `npx serve`.

# Common edits and examples

+ Add a new page: create `newpage.html`, add navigation link in `index.html` and update other nav anchors as needed.
+ Update validation: to change the contact success message, edit `js/validation.js` and modify the `error.textContent = "Message sent successfully"` string.
+ Convert to explicit DOM queries (example snippet to replace globals):
```
const contactForm = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
```

# Integration & external dependencies

+ There are no external APIs or server-side integrations in this repo.
+ No package.json or build tooling present. Introducing tooling should include a README update and minimal scripts for local dev.

# Guidance for AI edits

+ Be conservative: change only files related to the task (avoid bulk reformatting).
+ If you change element IDs, update `js/validation.js` and any HTML references together.
+ Prefer adding explicit DOM queries when refactoring to make code robust across environments (browsers that don't expose `id` globals).
+ If you introduce a dev server or build step, include a short `README.md` snippet with commands to run and test.

# If anything is unclear

+ Ask the human: preferred folder-casing (`CSS/` vs `css/`), desired validation behavior (simulate or integrate backend), and whether to introduce a dev toolchain.
