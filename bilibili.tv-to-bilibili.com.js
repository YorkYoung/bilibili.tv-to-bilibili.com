// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    https://github.com/YorkYoung/bilibili.tv-to-bilibili.com
// @version      0.1
// @description  UserScript to change bilibili.tv to bilibili.com
// @author       YorkYoung
// @match        http://www.bilibili.tv/*
// @grant        none
// ==/UserScript==

document.body.addEventListener('click', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match('http:\/\/www.bilibili.tv') ) {
        targ.href = targ.href.replace('://www.bilibili.tv', '://www.bilibili.com');
    }
});
