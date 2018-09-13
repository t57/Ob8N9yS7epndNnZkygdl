// ==UserScript==
// @name         Bandcamp Floating Player
// @namespace
// @version      0.2
// @description
// @author       t57
// @match        https://*.businesscasual.biz/album/*
// @match        https://*.bandcamp.com/album/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // [1]
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

    // [2]
    function shiftColor(color) {
        var numbersStart = color.indexOf("(") + 1;
        var numbersEnd = color.indexOf(")");
        var numbers = color.substr(numbersStart, numbersEnd - numbersStart);

        var rgbArray = Function("return ["+numbers+"]")();
        
        function shift(x) { return x - Math.floor((x-128)/5); }
        rgbArray = rgbArray.map(shift);

        return "rgb("+rgbArray[0]+", "+rgbArray[1]+", "+rgbArray[2]+")";
    }

    var bgColor = findBgColor();
    var newColor = shiftColor(bgColor);

    var player = document.getElementsByClassName("inline_player")[0];

    var style = {
        backgroundColor: newColor,
        border: "20px solid "+newColor,
        borderRadius: "5px",
        position: "fixed",
        bottom: "0px",
        right: "20px",
        zIndex: "316",
        maxWidth: "500px",
    }

    // [3]
    for (var property in style) player.style[property] = style[property];

    /** Notes:
    1. https://stackoverflow.com/questions/324486/how-do-you-read-css-rule-values-with-javascript/27527462#27527462
    2. Make this work with "#00FF00" style colors?
    3. https://stackoverflow.com/questions/8312459/iterate-through-object-properties
    **/
})();
