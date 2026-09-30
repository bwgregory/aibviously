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

### Brian: enable public access (required)

This agent pushed the site to `main` but **could not** flip visibility or enable Pages (needs repo admin). Do both before TikTok/Meta can load the URLs:

1. **Make the repo Public**  
   GitHub → **Settings → General → Danger Zone → Change repository visibility → Public**  
   (Free-plan public Pages generally requires a public repo.)

2. **Enable Pages**  
   GitHub → **Settings → Pages**  
   - Build and deployment → Source: **Deploy from a branch**  
   - Branch: **main**  
   - Folder: **/ (root)**  
   - Save

Site root after Pages is live: `https://bwgregory.github.io/aibviously/`

## Contact

**bwgregory** · [bwgregory@gmail.com](mailto:bwgregory@gmail.com)

## Security

Do not commit API secrets, client secrets, or access tokens to this repository. This site is static HTML/CSS only.
