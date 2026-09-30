/**
 * TikTok Login Kit (web) — owner-only connect for @aibviously app review demo.
 *
 * Authorization endpoint:
 *   https://www.tiktok.com/v2/auth/authorize/
 *
 * Required query params (application/x-www-form-urlencoded):
 *   client_key, redirect_uri, scope, response_type=code, state
 *
 * Docs: https://developers.tiktok.com/doc/login-kit-web
 */

// ---------------------------------------------------------------------------
// TODO (Brian): paste TikTok Client Key below. Do NOT commit Client Secret.
// Client Key is public-ish (used in the browser redirect); Secret stays server-side.
// ---------------------------------------------------------------------------
var CLIENT_KEY = "TODO_PASTE_TIKTOK_CLIENT_KEY";

// Must match a Redirect URI registered in TikTok Login Kit product settings.
var REDIRECT_URI = "https://bwgregory.github.io/aibviously/callback/";

// Comma-separated scopes approved for this app in the TikTok developer portal.
// Adjust to match what you requested (e.g. video.upload / video.publish).
var SCOPE = "user.info.basic,video.upload";

var AUTH_BASE = "https://www.tiktok.com/v2/auth/authorize/";

function randomState() {
  var bytes = new Uint8Array(16);
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (var i = 0; i < bytes.length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  var out = "";
  for (var j = 0; j < bytes.length; j++) {
    out += ("0" + bytes[j].toString(16)).slice(-2);
  }
  return out;
}

function buildAuthorizeUrl() {
  var params = new URLSearchParams();
  params.set("client_key", CLIENT_KEY);
  params.set("redirect_uri", REDIRECT_URI);
  params.set("scope", SCOPE);
  params.set("response_type", "code");
  params.set("state", randomState());
  return AUTH_BASE + "?" + params.toString();
}

function startConnect() {
  if (!CLIENT_KEY || CLIENT_KEY.indexOf("TODO_") === 0) {
    window.alert(
      "Client Key not set yet.\n\nOpen connect/connect.js and replace TODO_PASTE_TIKTOK_CLIENT_KEY with your TikTok Client Key."
    );
    return;
  }
  window.location.assign(buildAuthorizeUrl());
}

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("connect-tiktok");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      startConnect();
    });
  }
});
