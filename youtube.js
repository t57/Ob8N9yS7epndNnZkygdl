// ==UserScript==
// @name         Youtube
// @namespace
// @version      0.2
// @description  Turn off annotations
// @author       t57
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    function turnOffAnnotations() {
        var menuitems = document.getElementsByClassName("ytp-menuitem-label");
        if (menuitems.length < 1) return "Number of menuitems is too small";
        var elt = menuitems[1];
        if (elt.innerText !== "Annotations") return "menu text was wrong";
        var realButton = elt.parentElement;
        // If annotations are on, toggle them.
        if (realButton.getAttribute("aria-checked") === "true") realButton.click();
        return; // no err
    }

    var err = turnOffAnnotations();
    if (err) console.log("Couldn't turn off annotations: "+err);
    
    
    //// This part I haven't looked at in a while
    // I don't think I can cache the result, I don't think it updates.
    //var _skipBtnParent;
    // Doesn't work on unskippable ads. Plz fix. It also doesn't mute.
/*
    function onSkipBtnUpdate(x) {
        var skipBtnParent = document.getElementsByClassName("videoAdUiSkipButton");
        var skipBtn = skipBtnParent[0];
        var skipBtnText = skipBtn.children[0].innerText;
        if (skipBtnText === "Skip Ad") skipBtn.click();
    }

    function initialSetup() {
        var skipBtnParent = document.getElementsByClassName("videoAdUiSkipButton");
        // Keep trying until the button shows up on the page.
        if (skipBtnParent.children.length == 0) {
            window.setTimeout(initialSetup, 1000);
            return;
        }
        var observer = new MutationObserver(onSkipBtnUpdate);
        var config = { attributes: true, childList: true, characterData: true };
        observer.observe(skipBtnParent, config);
    }

    initialSetup();
    // document.getElementsByClassName("ytp-mute-button")
    */
})();
