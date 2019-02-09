// ==UserScript==
// @name         Twitter Mobile t.co Link Fix
// @namespace
// @version      0.1
// @description
// @author       t57
// @match        https://mobile.twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function newMap() {
        // Objects are hashmaps, see https://stackoverflow.com/questions/368280/javascript-hashmap-equivalent
        return {
            put: function(key, val) { this["#"+key] = val; },
            get: function(key) { return this["#"+key]; },
        };
    }

    var href2data = newMap();
    var as = document.getElementsByTagName("a");

    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a.getAttribute("data-url") != null) {
            href2data.put(a.href, a.getAttribute("data-url"));
        }
    }

    var counter = 0;

    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        var dataurl = href2data.get(a.href);
        if (dataurl) {
            a.href = dataurl;
            counter++;
        }
    }

    console.log("Replaced "+counter+" shortened links");
})();
