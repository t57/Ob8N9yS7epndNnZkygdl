// ==UserScript==
// @name         Youtube Auto Mute & "Skip Ad"
// @namespace
// @version      0.1
// @description  Doesn't work on unskippable ads. Plz fix. It also doesn't mute.
// @author       t57
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // I don't think I can cache the result, I don't think it updates.
    //var _skipBtnParent;

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
})();
