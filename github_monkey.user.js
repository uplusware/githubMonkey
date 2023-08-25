// ==UserScript==
// @name Github Monkey
// @namespace Uplusware
// @version 0.3
// @description Github Monkey offers the better UI/UE for Github.
// @author Uplusware
// @homepageURL https://github.com/uplusware/githubMonkey
// @match https://github.com/*
// @require https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @downloadURL https://github.com/uplusware/githubMonkey/raw/main/github_monkey.user.js
// @updateURL https://github.com/uplusware/githubMonkey/raw/main/github_monkey.user.js
// @grant GM_openInTab
// ==/UserScript==
'use strict';
(function ($, undefined) {
$(function () {
    $(document).ready(function () {
        console.log("################################################################################################################################");
        console.log("# Github Monkey loaded! It offers the better UI/UE for Github                                                                  #");
        console.log("################################################################################################################################");
        console.log("* Tips 1: Current refresh interval: " + CONFIG_GITHUB_MONKEY_INTERVAL + "ms.");
        console.log("          If it leads to web performance issue after apply this script,");
        console.log("          please increase the value of(var CONFIG_GITHUB_MONKEY_INTERVAL = 1000) to a greater one,");
        console.log("          such as 2000(var CONFIG_GITHUB_MONKEY_INTERVAL = 1000).");
        console.log("* Tips 2: More infor please refer to https://github.com/uplusware/githubMonkey");
        console.log("-----------------------------------------------------------------------------------------------------------------------");
        var CONFIG_GITHUB_MONKEY_INTERVAL = 1000;

        var Github_Monkey = function () {
            //skip edit mode.
            if ($(document.body).prop("contenteditable") == "true") {
                return;
            }

            if($('nav > ul.UnderlineNav-body').attr('githubmonkeysayshell0elementvisited') != 'true'){
                $('nav > ul.UnderlineNav-body').attr('githubmonkeysayshell0elementvisited', 'true');
                $('nav > ul.UnderlineNav-body > li > a.UnderlineNav-item').each(function(){
                    let m1 = $(this).attr("href").match(/\/pulls$/g);
                    if(m1 && m1.length > 0){
                        $('<li class="d-flex"><a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="i2pull-requests-tab" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-selected-links="repo_pulls checks ' + $(this).attr("href") + '/' + $('head > meta[name="user-login"]').attr('content') +'" href="' + $(this).attr("href") + '/' + $('head > meta[name="user-login"]').attr('content') +'"><svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg><span data-content="My Pull requests">My Pull requests</span></a></li>').insertAfter($(this).parent());
                    }
                });
            }

            let m2 = window.location.href.match(/\/pulls\/[a-z0-9\-]+$/g);
            if(m2 && m2.length > 0){
                $('nav > ul.UnderlineNav-body > li > a.UnderlineNav-item').each(function(){
                    let m3 = $(this).attr("href").match(/\/pulls\/[a-z0-9\-]+$/g);
                    if(m3 && m3.length > 0) {
                        $(this).addClass("selected");
                        $(this).attr("aria-current", "page");
                    }
                    else {
                        $(this).removeClass("selected");
                        $(this).removeAttr("aria-current");
                    }
                });
            }

            let m4 = window.location.href.match(/\/pulls$/g);
            if(m4 && m4.length > 0){
                $('nav > ul.UnderlineNav-body > li > a.UnderlineNav-item').each(function(){
                    let m5 = $(this).attr("href").match(/\/pulls\/[a-z0-9\-]+$/g);
                    if(m5 && m5.length > 0) {
                        $(this).removeClass("selected");
                        $(this).removeAttr("aria-current");
                    }
                });
            }

            let m6 = window.location.href.match(/\/pull\/[0-9]+$/g);
            if(m6 && m6.length > 0){
                $('nav > ul.UnderlineNav-body > li > a.UnderlineNav-item').each(function(){
                     $(this).removeClass("selected");
                     $(this).removeAttr("aria-current");
                });
            }
        }

		Github_Monkey();
		setTimeout(function _handler_() {
			Github_Monkey();
			setTimeout(_handler_, CONFIG_GITHUB_MONKEY_INTERVAL);
		}, CONFIG_GITHUB_MONKEY_INTERVAL);
    });
});
})(window.jQuery.noConflict(true));
