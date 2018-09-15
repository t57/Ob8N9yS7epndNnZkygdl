// ==UserScript==
// @name         Bing Remove Bottom Bar
// @namespace
// @version      0.1
// @description
// @author       t57
// @match        https://www.bing.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("hp_bottomCell").style.display = "None";
})();
