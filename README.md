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

## GitHub Pages

- Source: branch **main**, folder **/ (root)**
- Marker file: `.nojekyll` (plain HTML; no Jekyll processing)

### Visibility note

Public GitHub Pages (required so TikTok/Meta can fetch privacy, terms, and the redirect URI) typically needs a **public** repository on the free plan. If this repo is still **private**, set **Settings → General → Danger Zone → Change repository visibility → Public** before relying on the URLs above.

## Contact

**bwgregory** · [bwgregory@gmail.com](mailto:bwgregory@gmail.com)

## Security

Do not commit API secrets, client secrets, or access tokens to this repository. This site is static HTML/CSS only.
