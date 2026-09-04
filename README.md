# andre-uhl.de

Personal site for André Uhl — VP Technology & Architecture, Schneider Electric.

Static HTML. No build step, no framework, no dependencies. What is in this repo is
what gets served.

## Files

| | |
|---|---|
| `index.html` | The site. English and German, switched client-side. |
| `impressum.html` | Imprint (§ 5 DDG). |
| `datenschutz.html` | Privacy policy (Art. 13 GDPR). |
| `style.css` | Shared stylesheet for all three pages. |
| `legal.js` | Theme + language toggle for the legal pages. |
| `fonts/` | IBM Plex, self-hosted (SIL OFL 1.1). |
| `.htaccess` | Apache rules. Inert on Deploy Now; kept for classic hosting. |

## Design notes

- **No third-party requests.** Typefaces are self-hosted rather than loaded from
  Google Fonts, which would transmit every visitor's IP to Google — a GDPR problem
  for a German site.
- **No cookies.** `localStorage` holds only the visitor's own language and theme
  choices, exempt from consent under § 25 (2) no. 2 TDDDG.
- The consent notice is informational. To turn it into a real consent gate, set
  `ANALYTICS_ENABLED = true` in `index.html` and check
  `window.auConsent.analytics` before loading any analytics.
- All motion is behind `prefers-reduced-motion`.

## Outstanding

`impressum.html` and `datenschutz.html` contain placeholders marked
`class="fill"` — street and postcode — that must be filled before the site is
legally complete.
