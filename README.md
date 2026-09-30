# aibviously

Minimal static [GitHub Pages](https://pages.github.com/) site for **@aibviously** / vid-producer OAuth and developer-console policy URLs (TikTok + Meta).

## Paste-ready URLs

Use these in TikTok and Meta developer app settings:

| Purpose | URL |
| --- | --- |
| **Redirect URI** | `https://bwgregory.github.io/aibviously/callback/` |
| **Privacy Policy** | `https://bwgregory.github.io/aibviously/privacy/` |
| **Terms of Service** | `https://bwgregory.github.io/aibviously/terms/` |

Copy-paste list:

```
https://bwgregory.github.io/aibviously/callback/
https://bwgregory.github.io/aibviously/privacy/
https://bwgregory.github.io/aibviously/terms/
```

## Site map

| Path | Purpose |
| --- | --- |
| `/` | Brief explanation of this helper site |
| `/callback/` | OAuth redirect landing — confirms a `code` was received **without showing or logging it** |
| `/privacy/` | Privacy Policy |
| `/terms/` | Terms of Service |
| `/tiktok-developers-site-verification.html` | TikTok URL-prefix ownership (HTML + meta tag) |
| `/tiktokp75dbw33ALm0yWHKEszFPL7tuktG5Nme.txt` | TikTok URL-prefix ownership (plain signature body) |
| `/tiktokp75dbw33ALm0yWHKEszFPL7tuktG5Nme.html` | Same plain signature body (`.html` name; original TikTok download name was lost) |

## TikTok URL-prefix verification

Token (do not invent another): `p75dbw33ALm0yWHKEszFPL7tuktG5Nme`

Artifacts served under `https://bwgregory.github.io/aibviously/`:

- Homepage meta: `<meta name="tiktok-developers-site-verification" content="p75dbw33ALm0yWHKEszFPL7tuktG5Nme" />`
- https://bwgregory.github.io/aibviously/tiktok-developers-site-verification.html
- https://bwgregory.github.io/aibviously/tiktokp75dbw33ALm0yWHKEszFPL7tuktG5Nme.txt
- https://bwgregory.github.io/aibviously/tiktokp75dbw33ALm0yWHKEszFPL7tuktG5Nme.html

In TikTok → URL properties → Verify against prefix **`https://bwgregory.github.io/aibviously/`**.

## GitHub Pages

- Source: branch **main**, folder **/ (root)**
- Marker file: `.nojekyll` (plain HTML; no Jekyll processing)
- Repo is **public**. Pages still needs an admin click if `has_pages` is false.

### Brian: enable Pages (required once)

Agents cannot flip Pages via API (needs repo admin). Enable before TikTok/Meta can load the URLs:

1. GitHub → **Settings → Pages**
2. Build and deployment → Source: **Deploy from a branch**
3. Branch: **main** · Folder: **/ (root)** · **Save**

Site root after Pages is live: `https://bwgregory.github.io/aibviously/`

## Contact

**bwgregory** · [bwgregory@gmail.com](mailto:bwgregory@gmail.com)

## Security

Do not commit API secrets, client secrets, or access tokens to this repository. This site is static HTML/CSS only.
