// ==UserScript==
// @name         Bing Fixer
// @namespace
// @version      0.2
// @description
// @author       t57
// @match        https://www.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var elt;
    
    // Remove bottom bar from main page
    elt = document.getElementById("hp_bottomCell");
    if (elt) elt.style.display = "None";
    
    // Remove arbitrary width constraint
    elt = document.getElementById("hp_container");
    if (elt) elt.style.minWidth = "0px";
})();
