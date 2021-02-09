// ==UserScript==
// @name         Wikipedia Random Browse
// @version      1
// @author       t57
// @match        https://en.wikipedia.org/wiki/*
// @grant        none
// @nocompat     Chrome
// ==/UserScript==

window.addEventListener('load', function() {

var arr,end,idx,elt;
arr = Array.from(document.getElementsByClassName('mw-parser-output')[0].children);
end = arr.findIndex(x => x.className.includes('toc'));
end = end > 0 ? end : arr.length;
arr = arr.slice(0, end);
arr = arr.filter(x => x.nodeName == 'P');
arr = arr.map(x => Array.from(x.getElementsByTagName('a')));
arr = [].concat.apply([], arr); // flatten
arr = arr.filter(x => !(x.href.includes('#')));
arr = arr.filter(x => !(x.href.includes('wiki/Help')));
idx = Math.floor(arr.length * Math.random(arr.length));
elt = arr[idx];
setTimeout((x => elt.style.border = '2px solid red'), 1000);
setTimeout((x => elt.click()), 2000);

}, false);
