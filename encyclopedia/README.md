# Known Aliens

Open `dist/index.html` in a modern browser. No installation or build is required.

## Deploy from GitHub to Cloudflare Pages

Connect this repository in Cloudflare Pages using **Import an existing Git repository**. Grant Cloudflare access to this private repository, then use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Root directory | Repository root (leave blank) |
| Build command | `exit 0` |
| Build output directory | `dist` |

No environment variables or dependency installation are required. Later pushes to `main` trigger a new deployment. Cloudflare hosting does not change the app's browser-local storage behavior.

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

The encyclopedia includes 12 brief attributed summaries, original AlienINT image URLs, search, sorting, bookmarks, editable species records, image uploads, and JSON export/import. Personal additions and edits use browser localStorage; they do not sync between devices. Export regularly for backups.

Species records support appearance, claimed origin, behavior, encounter stories, related species, evidence status, source links, and research notes. Unresearched fields are explicitly marked as undocumented.

Images are remotely hosted by AlienINT; unavailable images show a fallback. The complete source article is linked rather than reproduced.

For local HTTP serving, use any static file server with `dist` as its root. Deploy the contents of `dist` to any static hosting provider.

## Sourced research update — 2026-10-05

All 12 species now have an attributed research section. `dist/research.js` keeps 14 unique references (the original AlienINT source and 13 additional references) in one registry. Paragraph citations reuse registry entries. Each source records its type, review method, and limitations. Adamski's landing page replaces the less useful foundation homepage. Adamski, Cori, and ORACC were checked through indexed text when direct retrieval failed; this is visible in their review notes. Book descriptions were reviewed, not complete books. Source verification does not verify extraterrestrial claims.

Research remains separate from personal notes so existing browser edits cannot erase the new citations. Search includes research text and known aliases. New entries, renamed entries, and imported backups reject duplicate names and known aliases, ignoring case, spacing, and punctuation. Existing browser data is preserved on load rather than silently deleted. Nordics and Pleiadians remain distinct traditions. Bookmarks are deduplicated during validation.

Run `node check.cjs` to check record and source uniqueness, citation coverage, duplicate-name and alias rejection, backup behavior, and safe link handling. Browser visual QA and deployment are not verified in this environment; the previous hosting repository connection stalled.
