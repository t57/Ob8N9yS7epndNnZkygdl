// ==UserScript==
// @name         Facebook Event Link Fixer
// @namespace
// @version      0.1
// @description
// @author       t57
// @match        https://mbasic.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var counter = 0;
    var as = document.getElementsByTagName("a");

    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a.href.startsWith("fb://event/") {
            var suffix = a.href.substr( ("fb://event/").length );
            a.href = "https://mbasic.facebook.com/events/" + suffix;
            counter++;
        }
    }

    // If facebook ever fixes their website, this counter should let me know.
    console.log("Replaced "+counter+" links");
})();
