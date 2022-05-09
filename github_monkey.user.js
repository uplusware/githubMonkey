// ==UserScript==
// @name Github Monkey
// @namespace Uplusware
// @version 0.2
// @description Github Monkey offers the better UI/UE for Github.
// @author Uplusware
// @homepageURL https://github.com/uplusware/github_monkey
// @include https://github.com*
// @require https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @downloadURL https://github.com/uplusware/github_monkey/raw/main/github_monkey.user.js
// @updateURL https://github.com/uplusware/github_monkey/raw/main/github_monkey.user.js
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
        console.log("* Tips 2: More infor please refer to https://github.com/uplusware/github_monkey");
        console.log("-----------------------------------------------------------------------------------------------------------------------");
        var CONFIG_GITHUB_MONKEY_INTERVAL = 1000;

        var Github_Monkey = function () {
            //skip edit mode.
            if ($(document.body).prop("contenteditable") == "true") {
                return;
            }

            $($('div.Box-header > div > div.BtnGroup')[$('div.Box-header > div > div.BtnGroup').length - 1]).each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $('<button name="full_screen_viewer" type="button" class="btn btn-sm BtnGroup-item" FULL_SCREEN="false">Full Screen</button>').appendTo($(this));
                    return false;
                }
            });

            $('[name="full_screen_viewer"]').each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $(this).click(function(){
                        if($(this).attr('FULL_SCREEN') == "false"){
                            if($(this).attr('OLD_Z_INDEX') == undefined){
                                $(this).attr('OLD_Z_INDEX',$(this).parent().parent().parent().parent().attr('z-index'));
                            }
                            if($(this).attr('OLD_CSS_WIDTH') == undefined){
                                $(this).attr('OLD_CSS_WIDTH',$(this).parent().parent().parent().parent().css('width'));
                            }
                            $(this).parent().parent().parent().parent().removeClass('position-relative');
                            $(this).parent().parent().parent().parent().css({position: 'absolute', left: 0, top: 0, 'z-index': 65535}).animate({ width: window.document.body.clientWidth, left: 0, top: 0}, 200);
                            $(this).attr('FULL_SCREEN', 'true');
                            $(this).text('Restore Screen');

                            $(document).keydown(function(event){
                                if (event.keyCode == 27){
                                    $('[name="full_screen_viewer"]').click();
                                }
                            });
                        }
                        else if($(this).attr('FULL_SCREEN') == "true"){
                            $(this).parent().parent().parent().parent().addClass('position-relative');
                            $(this).parent().parent().parent().parent().css({ position: 'relative', 'width':$(this).attr('OLD_CSS_WIDTH')});
                            $(this).attr('FULL_SCREEN', 'false');
                            $(this).text('Full Screen');
                            $(document).off('keydown');
                        }
                    });
                }
            });

            $($('div.js-code-editor > div.file-header > div.file-actions')[$('div.js-code-editor > div.file-header > div.file-actions').length - 1]).each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $('<button name="full_screen_editor" type="button" class="btn btn-sm" FULL_SCREEN="false">Full Screen</button>').appendTo($(this));
                    return false;
                }
            });

            $('[name="full_screen_editor"]').each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $(this).click(function(){
                        if($(this).attr('FULL_SCREEN') == "false"){
                            if($(this).attr('OLD_Z_INDEX') == undefined){
                                $(this).attr('OLD_Z_INDEX',$(this).parent().parent().parent().parent().attr('z-index'));
                            }
                            if($(this).attr('OLD_CSS_WIDTH') == undefined){
                                $(this).attr('OLD_CSS_WIDTH',$(this).parent().parent().parent().parent().css('width'));
                            }
                            $(this).parent().parent().parent().parent().parent().removeClass('position-relative');
                            $(this).parent().parent().parent().parent().css({position: 'absolute', left: 0, top: 0, 'z-index': 65535}).animate({ width: window.document.body.clientWidth, left: 0, top: 0}, 200);
                            $(this).attr('FULL_SCREEN', 'true');
                            $(this).text('Restore Screen');

                            $(document).keydown(function(event){
                                if (event.keyCode == 27){
                                    $('[name="full_screen_editor"]').click();
                                }
                            });
                        }
                        else if($(this).attr('FULL_SCREEN') == "true"){
                            $(this).parent().parent().parent().parent().parent().addClass('position-relative');
                            $(this).parent().parent().parent().parent().css({ position: 'relative', 'width':$(this).attr('OLD_CSS_WIDTH')});
                            $(this).attr('FULL_SCREEN', 'false');
                            $(this).text('Full Screen');
                            $(document).off('keydown');
                        }
                    });


                }
            });

            if($("#partial-new-comment-form-actions").attr('github_monkey_says_hell0_html_tag') != 'true'){
                $("#partial-new-comment-form-actions").attr('github_monkey_says_hell0_html_tag', 'true');

                let helper_button = '<div class="bg-gray-light ml-1"><button type="submit" class="btn" id="HELPER_LGTM" title="Looks good to me"><img width="16" height="16" alt="Looks good to me" title="LGTM" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlkPSJzdmdfMSIgZmlsbD0iIzAwYmY1ZiIgZD0ibTI5LjQzNiwzMS4wMDAwMDFsLTIxLjk2OCwwYy0zLjg2OCwwIC03LjAxNiwzLjE0NCAtNy4wMTYsNy4wMTJsMCw0MS45NzZjMCwzLjg2OCAzLjE0OCw3LjAxMiA3LjAxNiw3LjAxMmwyMS45NjgsMGMzLjg2OCwwIDcuMDE2LC0zLjE0NCA3LjAxNiwtNy4wMTJsMCwtNDEuOTc2YzAsLTMuODY0IC0zLjE0OCwtNy4wMTIgLTcuMDE2LC03LjAxMnoiLz4KICA8cGF0aCBpZD0ic3ZnXzIiIGZpbGw9IiMwMGJmNWYiIGQ9Im05NS41NDgsNDQuMTQ0YzAsLTYuMzUyIC04LjUyNCwtMTAuMjEyIC0xMi4yNjQsLTEwLjIxMmwtMTYuODU2LDBjMi44NiwtMTIuNDYgLTAuNTk2LC0xOS41NzIgLTMuMDI4LC0yMi43ODhjLTIuNDA4LC0zLjE4IC01LjcyOCwtNS4wOCAtOC44ODQsLTUuMDhjLTIuNDUyLDAgLTQuNTY0LDEuMTU2IC01Ljc3MiwzLjE4NGMtMC4xODQsMC4zMDggLTAuMjg0LDAuNjY4IC0wLjI4NCwxLjAyOGwwLDEwLjc0NGMtMi40Miw2Ljk4NCAtNC43ODQsMTIuNDQ0IC04LDE2LjU4bDAsNDcuOTE2YzAuNzU2LDAuMjUyIDEuNDg0LDAuNDI0IDIuMDgsMC40MjRsMzYuOTA4LDBjMS43MzYsMCAzLjQyNCwtMC45MDQgNC45MTYsLTIuNTk2YzIuMDY0LC0yLjM2OCAzLjQ0NCwtNi4wMTYgMy40OTYsLTkuMDA4YzIuOTkyLC0yLjI0OCA0LjQxNiwtNi4zNTIgNC4xNTIsLTEyYzMuMjIsLTMuMzQ0IDMuMDIsLTguMDkyIDEuOTcyLC0xMS4wMjRjMS4zMTYsLTEuODggMS41NjQsLTUuMDY4IDEuNTY0LC03LjE2OHoiLz4KIDwvZz4KPC9zdmc+" /> LGTM</button></div>';
                $("#partial-new-comment-form-actions").children().html($("#partial-new-comment-form-actions").children().html() + helper_button);

                $("#HELPER_LGTM").click(function(){
                    $("#new_comment_field").val("LGTM");
                    $(":submit").each(function(){
                        if($(this).text().indexOf(" Comment") >= 0){
                            $(this).prop("disabled", false);
                        }
                    });
                });
            }

            if($('nav > ul.UnderlineNav-body').attr('github_monkey_says_hell0_html_tag') != 'true'){
                $('nav > ul.UnderlineNav-body').attr('github_monkey_says_hell0_html_tag', 'true');
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

            $(".d-block.comment-body.markdown-body.js-comment-body").each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    console.log($(this).children("p").html())
                    if($(this).children("p") && $(this).children("p").html()) {
                        let match1 = $(this).children("p").html().match(/((?<=[\s\>\.,])|(^))[Ll][Gg][Tt][Mm]((?=[\s\<\.,])|($))/g);
                        if(match1 && match1.length > 0){
                            $(this).children("p").html($(this).children("p").html().replace(/((?<=[\s\>\.,])|(^))[Ll][Gg][Tt][Mm]((?=[\s\<\.,])|($))/g, "<img width='64' height='64' alt='Looks good to me' title='LGTM' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9Ijk4IiB3aWR0aD0iOTgiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgoKIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBpZD0ic3ZnXzEiIGZpbGw9IiMwMGJmNWYiIGQ9Im0yOS40MzYsMzFsLTIxLjk2OCwwYy0zLjg2OCwwIC03LjAxNiwzLjE0NCAtNy4wMTYsNy4wMTJsMCw0MS45NzZjMCwzLjg2OCAzLjE0OCw3LjAxMiA3LjAxNiw3LjAxMmwyMS45NjgsMGMzLjg2OCwwIDcuMDE2LC0zLjE0NCA3LjAxNiwtNy4wMTJsMCwtNDEuOTc2YzAsLTMuODY0IC0zLjE0OCwtNy4wMTIgLTcuMDE2LC03LjAxMnoiLz4KICA8cGF0aCBpZD0ic3ZnXzIiIGZpbGw9IiMwMGJmNWYiIGQ9Im05NS41NDgsNDQuMTQ0YzAsLTYuMzUyIC04LjUyNCwtMTAuMjEyIC0xMi4yNjQsLTEwLjIxMmwtMTYuODU2LDBjMi44NiwtMTIuNDYgLTAuNTk2LC0xOS41NzIgLTMuMDI4LC0yMi43ODhjLTIuNDA4LC0zLjE4IC01LjcyOCwtNS4wOCAtOC44ODQsLTUuMDhjLTIuNDUyLDAgLTQuNTY0LDEuMTU2IC01Ljc3MiwzLjE4NGMtMC4xODQsMC4zMDggLTAuMjg0LDAuNjY4IC0wLjI4NCwxLjAyOGwwLDEwLjc0NGMtMi40Miw2Ljk4NCAtNC43ODQsMTIuNDQ0IC04LDE2LjU4bDAsNDcuOTE2YzAuNzU2LDAuMjUyIDEuNDg0LDAuNDI0IDIuMDgsMC40MjRsMzYuOTA4LDBjMS43MzYsMCAzLjQyNCwtMC45MDQgNC45MTYsLTIuNTk2YzIuMDY0LC0yLjM2OCAzLjQ0NCwtNi4wMTYgMy40OTYsLTkuMDA4YzIuOTkyLC0yLjI0OCA0LjQxNiwtNi4zNTIgNC4xNTIsLTEyYzMuMjIsLTMuMzQ0IDMuMDIsLTguMDkyIDEuOTcyLC0xMS4wMjRjMS4zMTYsLTEuODggMS41NjQsLTUuMDY4IDEuNTY0LC03LjE2OHoiLz4KICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zdHlsZT0ibm9ybWFsIiBzdHJva2U9Im51bGwiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjQyMDEzNzE5MzI2NDQxMSwwLDAsMC41NjkxNTQwNjU3NDk5MjUxLC0xMC4xNTkzODM3NzQwNjQwOSwxOC4wMjI5OTg4NzQ0MDg5OTgpICIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18zIiB5PSI3OC44NDM2NTkiIHg9IjgxLjAwNjc1OCIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjZmZmZmZmIj5MR1RNPC90ZXh0PgogPC9nPgo8L3N2Zz4' />"));
                        }
                    }
                }
            });

			$('li.js-commits-list-item > div > div.BtnGroup > clipboard-copy').each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $('<input class="mr-1 btn-outline tooltipped tooltipped-sw" type="checkbox" name="auto_diff_commits" value="' + $(this).val() + '" data-ga-click="commits diff, click, value:false" aria-label="Choose as the diff commit">').appendTo($(this).parent().parent())
                }
            });

            $('li.js-commits-list-item > div > div.BtnGroup > button > clipboard-copy').each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $('<input class="mr-1 btn-outline tooltipped tooltipped-sw" type="checkbox" name="auto_diff_commits" value="' + $(this).val() + '" data-ga-click="commits diff, click, value:false" aria-label="Choose as the diff commit">').appendTo($(this).parent().parent().parent())
                }
            });

            $('input[name="auto_diff_commits"]').each(function(){
                if($(this).attr('github_monkey_says_hell0_html_tag') != 'true'){
                    $(this).attr('github_monkey_says_hell0_html_tag', 'true');
                    $(this).click(function(){
                        var selected_count = 0;
                        var diff_alpha = ""
                        var diff_beta = "";
                        $('input[name="auto_diff_commits"]').each(function(){
                            if($(this).prop('checked') == true){
                                if(diff_alpha == ""){
                                    diff_alpha = $(this).val()
                                }
                                else if(diff_beta == ""){
                                    diff_beta = $(this).val()
                                }
                                selected_count++;
                            }
                        });
                        if(selected_count == 2){
                            var repo_url = $(this).parent().find('div.BtnGroup > a').attr('href').split('/', 3);
                            var diff_url = "/" + repo_url[1] + "/" + repo_url[2] + "/compare/" + diff_beta + "..." + diff_alpha;
                            window.open(diff_url, "_blank");
                        }
                        else if(selected_count > 2){
                            $(this).prop('checked', false);
                        }
                    });
                }
            });
        }

		Github_Monkey();
		setTimeout(function _handler_() {
			Github_Monkey();
			setTimeout(_handler_, CONFIG_GITHUB_MONKEY_INTERVAL);
		}, CONFIG_GITHUB_MONKEY_INTERVAL);
    });
});
})(window.jQuery.noConflict(true));
