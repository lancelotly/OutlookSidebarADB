// ==UserScript==
// @name         OutlookSidebarADB
// @version      240218
// @description  hide outlook sidebar ads
// @match        https://outlook.live.com/*
// @icon         https://outlook.live.com/mail/favicon.ico
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
  'use strict';

  // Define selectors more precisely and target specific elements
  var targets = [
    '#MainModule+.GssDD > div[style*="width:"]',
    '#MainModule > div > div > div[class*=css-] + div'
  ];

  // Create the style element and apply CSS rules
  var style = document.createElement('style');
  style.textContent = targets.map(selector => `${selector} { display: none !important; }`).join('\n');
  document.body.appendChild(style);

})();
