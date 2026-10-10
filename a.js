// payload.js — hanya untuk PoC
console.log('[CSP-BYPASS] Script executed. Origin:', document.domain);
document.title = 'XSS-BYPASSED';
window.__xss_poc = true;