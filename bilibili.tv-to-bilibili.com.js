// ==UserScript==
// @name         bilibili.tv to bilibili.com
// @namespace    https://github.com/YorkYoung/bilibili.tv-to-bilibili.com/
// @downloadURL  https://github.com/YorkYoung/bilibili.tv-to-bilibili.com/blob/master/bilibili.tv-to-bilibili.com.js
// @version      1.1
// @encoding     utf-8
// @description  UserScript to change bilibili.tv to bilibili.com
// @author       YorkYoung
// @license      GPL version 3
// @include      /^.*\.bilibili\.(tv|com|cn)\/(video\/|search)?.*$/
// @grant        none
// ==/UserScript==

document.body.addEventListener('click', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match('bilibili.tv') ) {
        targ.href = targ.href.replace('bilibili.tv', 'bilibili.com');
    }
});
