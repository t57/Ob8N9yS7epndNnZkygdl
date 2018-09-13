// ==UserScript==
// @name         Bandcamp Floating Player
// @downloadURL  https://github.com/t57/Ob8N9yS7epndNnZkygdl/blob/master/bandcamp.js
// @namespace
// @version      0.1
// @description
// @author       t57
// @match        https://*.businesscasual.biz/album/*
// @match        https://*.bandcamp.com/album/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // [1] [5]
    function findBgColor() {
        var sheets = document.styleSheets;
        for (var i = 0; i < sheets.length; i++) {
            try { var rules = sheets[i].cssRules; }
            catch (err) { continue; }
            for (var j = 0; j < rules.length; j++) {
                if (rules[j].selectorText == "#pgBd") {
                    return rules[j].style.backgroundColor;
                }
            }
        }
        return "rgb(256, 256, 256)";
    }

    // [2] [6]
    function adjustColor(color) {
        //function adjust(x) { return x < Math.sqrt(128) ? x + 2 : x - 2; }
        //function adjust2(x) { return x < 128 ? x + 4 : x - 4; }
        function adjust3(x) { return x - Math.floor((x-128)/5); }
        //function square(x) { return x * x; }

        var rgbArray = Function("rgb=Array;return "+color)();
        //rgbArray = rgbArray.map(Math.sqrt).map(adjust).map(square).map(Math.floor);
        rgbArray = rgbArray.map(adjust3);

        return "rgb("+rgbArray[0]+", "+rgbArray[1]+", "+rgbArray[2]+")";
    }

    // [3]
    var bgColor = findBgColor();
    var adjustedColor = adjustColor(bgColor);

    var player = document.getElementsByClassName("inline_player")[0];

    var style = {
        backgroundColor: adjustedColor,
        border: "20px solid "+adjustedColor,
        borderRadius: "5px",
        position: "fixed",
        bottom: "0px",
        right: "20px",
        zIndex: "316",
        maxWidth: "500px",
    }

    // [4]
    for (var property in style) player.style[property] = style[property];

    /** Notes:
    1. https://stackoverflow.com/questions/324486/how-do-you-read-css-rule-values-with-javascript/27527462#27527462
    2. I can't find a reference for why I do the sqrt transform, but I saw something about how you're supposed to do that one time.
    3. #222 also looks nice on black.
    4. https://stackoverflow.com/questions/8312459/iterate-through-object-properties
    5. Since I want something that would contrast with white or black, should I return rgb(128, 128, 128) here?
    6. Consider removing old code.  Also, this needs work when color is #000. Consider eliminating "Array()" call, GM hates it. Manual extract "r, g, b", place in array.
    **/
})();
