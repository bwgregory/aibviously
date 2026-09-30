# aibviously

Minimal static [GitHub Pages](https://pages.github.com/) site for **@aibviously** / vid-producer OAuth and developer-console policy URLs (TikTok + Meta).

## Paste-ready URLs

Use these in TikTok and Meta developer app settings:

| Purpose | URL |
| --- | --- |
| **Connect (owner demo)** | `https://bwgregory.github.io/aibviously/connect/` |
| **Redirect URI** | `https://bwgregory.github.io/aibviously/callback/` |
| **Privacy Policy** | `https://bwgregory.github.io/aibviously/privacy/` |
| **Terms of Service** | `https://bwgregory.github.io/aibviously/terms/` |

Copy-paste list:

```
https://bwgregory.github.io/aibviously/connect/
https://bwgregory.github.io/aibviously/callback/
https://bwgregory.github.io/aibviously/privacy/
https://bwgregory.github.io/aibviously/terms/
```

## Site map

| Path | Purpose |
| --- | --- |
| `/` | Brief explanation of this helper site |
| `/connect/` | Owner-only **Connect TikTok** page for Login Kit / app-review demo |
| `/callback/` | OAuth redirect landing — confirms a `code` was received **without showing or logging it** |
| `/privacy/` | Privacy Policy |
| `/terms/` | Terms of Service |
| `/tiktok-developers-site-verification.html` | TikTok URL-prefix ownership (HTML + meta tag) |
| `/tiktokp75dbw33ALm0yWHKEszFPL7tuktG5Nme.txt` | TikTok URL-prefix ownership (plain signature body) |
| `/tiktokp75dbw33ALm0yWHKEszFPL7tuktG5Nme.html` | Same plain signature body (`.html` name; original TikTok download name was lost) |

## TikTok Login Kit (web) OAuth

Owner connect lives at `/connect/` and redirects to TikTok’s authorization page. Paste your **Client Key** into `connect/connect.js` (`CLIENT_KEY` TODO). Do **not** put the Client Secret in this repo.

### Authorization URL

```
https://www.tiktok.com/v2/auth/authorize/
```

Query parameters (form-urlencoded) TikTok expects for web Login Kit:

| Param | Required | Value |
| --- | --- | --- |
| `client_key` | yes | TikTok app Client Key |
| `redirect_uri` | yes | Must match a registered redirect URI — use `https://bwgregory.github.io/aibviously/callback/` |
| `scope` | yes | Comma-separated scopes approved for the app (e.g. `user.info.basic,video.upload`) |
| `response_type` | yes | Always `code` |
| `state` | yes | Random CSRF string; echoed back on the callback |

Example:

```
https://www.tiktok.com/v2/auth/authorize/?client_key=YOUR_CLIENT_KEY&redirect_uri=https%3A%2F%2Fbwgregory.github.io%2Faibviously%2Fcallback%2F&scope=user.info.basic%2Cvideo.upload&response_type=code&state=RANDOM_STATE
```

Docs: [Login Kit for Web](https://developers.tiktok.com/doc/login-kit-web).

### Callback query params

On success TikTok redirects to `redirect_uri` with `code`, `scopes`, and `state`. On failure it may include `error` and `error_description`. `/callback/` shows plain-language success/failure for the review demo and never displays the code.

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

Live paths once Pages is on:

- Connect: `https://bwgregory.github.io/aibviously/connect/`
- Callback: `https://bwgregory.github.io/aibviously/callback/`

## Contact

**bwgregory** · [bwgregory@gmail.com](mailto:bwgregory@gmail.com)

## Security

Do not commit API secrets, client secrets, or access tokens to this repository. Client Key may be pasted into `connect/connect.js` for the owner demo; Client Secret must stay on the server only.
