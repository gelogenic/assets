    function checkObj(obj)
    {
        if(!obj)
            return false;
        var x = 0,
            y = 0,
            fraction = 0.8,
            w = obj.width,
            h = obj.height,
            r, //right
            b, //bottom 
            visibleX, visibleY, visible,
            parent;
            if(!h)
                h = 200;
            if(!w)
                w = 320;
  
        parent = obj;
        while (parent && parent !== document.body) {
          x += parent.offsetLeft;
          y += parent.offsetTop;
          parent = parent.offsetParent;
        }
  
        r = x + parseInt(w);
        b = y + parseInt(h);
  
  
        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
  
  
        visible = visibleX * visibleY / (w * h);
        visible = visibleY / h;
  
        if (visible > fraction) {
          return true;//playVideo();
        } else {
          return false;//pauseVideo();
  
        }
      
  
    };

$(document).ready(function () {

// Shooter instructions for doc prep
  jQuery('.shooter_game_base .field-name-field-campaign-cta2').css('display', 'none');

  jQuery('.shooter_game_base .field-name-field-social-image').css('display', 'none');

  jQuery('node-hp-campaign2.shooter_game_desktop content a').css('display', 'none');
  jQuery('.node-hp-campaign2.shooter_game_desktop div.content a').on('click', function(event) {
    jQuery('.node-hp-campaign2.shooter_game_desktop div.content a').css('display', 'none');
    jQuery('.node-hp-campaign2.shooter_game_desktop .field-name-field-flip-flop-stage1').css('display','block');
  });


  jQuery(document).on('gameOver', function(event) {
    jQuery('button#cboxClose').click();
//    jQuery('.node-hp-campaign2.shooter_game_desktop div.content a').css('display', 'block');
 //   jQuery('.node-hp-campaign2.shooter_game_desktop .field-name-field-flip-flop-stage1').css('display','none');
});




        //actions for watch selection
                $('.watch_options a').on('click', function(e) {
                        var $this = $(this);
                        $('.watch_options a.selected').removeClass('selected')
                        $this.addClass('selected');
                        // e.preventDefault();
                });
                //actions for listen selection
                $('.listen_options a').on('click', function(e) {
                        var $this = $(this);
                        $('.listen_options a.selected').removeClass('selected')
                        $this.addClass('selected');
                        // e.preventDefault();
                });
                //actions for form submit
                $('#reason-form-submit').on('click', function(e) {
                        $('.reasons_quiz_form').fadeOut();
                        $('#reason-success').fadeIn();
                        if ($('.watch_options a').hasClass('selected') && $('.listen_options a').hasClass('selected')) {
                                if ($('.reasons_quiz_form #comedy').hasClass('selected') && $('.reasons_quiz_form #rock').hasClass('selected')) {
                                        $('#success-content').html('I don&rsquo;t smoke because gum disease isn&rsquo;t part of my game&nbsp;plan.');
                                } else if ($('.reasons_quiz_form #comedy').hasClass('selected') && $('.reasons_quiz_form #rap').hasClass('selected')) {
                                        $('#success-content').html('I don&rsquo;t smoke because I can&rsquo;t freestyle with a&nbsp;cough.');
                                } else if ($('.reasons_quiz_form #action').hasClass('selected') && $('.reasons_quiz_form #rock').hasClass('selected')) {
                                        $('#success-content').html('I don&rsquo;t smoke because rebels need full-sized&nbsp;lungs.');
                                } else if ($('.reasons_quiz_form #action').hasClass('selected') && $('.reasons_quiz_form #rap').hasClass('selected')) {
                                        $('#success-content').html('I don&rsquo;t smoke because yellow&nbsp;teeth would kill my&nbsp;game.');
                                }
                        } else {
                                $('#success-content').html('I don&rsquo;t smoke because I want to live on the edge, not on the sidelines.');
                        }
                        e.preventDefault();
                });

  // Handle opening and closing of Sources Drawer.
  $('.sources-button').click(function(){
	  $('#sd-content').slideToggle('slow');
      if ($('.sources-button').hasClass("source_open")) {
		/* START TEMP CHANGE FOR WAVE2 LAUNCH - SOURCES IN SITE ELEMENT -RE 06022015 */ 
		//    $('#block-fcb-hoops-sources-drawer .view-sources').slideToggle('slow');
		$('.sources-button').removeClass("source_open");
		//$('#home-sources').addClass('home-sources');
		$('.sources-button').attr("aria-expanded","false");
		// For analytics ?
		$('.sources-button').attr("id","home-sources");
    } else {
		//      $('#block-fcb-hoops-sources-drawer .view-sources').slideToggle('slow');
		/* END TEMP CHANGE FOR WAVE2 LAUNCH - SOURCES IN SITE ELEMENT */ 
        $('.sources-button').addClass("source_open");
	    //$('#home-sources').addClass('home-sources-open');
	    $('.sources-button').attr("aria-expanded","true");
		// For analytics ?
		$('.sources-button').attr("id","home-sources-open");
    }
  });
  $('#SocialMediaLinks.mobile').parent('.content').click(function(){
    if ($('#SocialMediaLink').hasClass('open')) {
      $('#SocialMediaLinks.mobile').css('position', 'absolute').animate({left: 0});
      $('#SocialMediaLinks.mobile').removeClass('open');
    } else {
      $('#SocialMediaLinks.mobile').addClass('open');
      $('#SocialMediaLinks.mobile').css('position', 'absolute').animate({left: -250});
    }
  });

  // Handle opening and closing of mobile share drawer.
//  var drawer_open = false;
//  $('#hotdog').click(function() {
//    jQuery('#hotdog_menu').parent().css({left: '-1', position: 'absolute'});
//    if (drawer_open) {
//      jQuery('#hotdog_menu').parent().animate({left: '-150', position: 'absolute'});
//    } else {
//      jQuery('#hotdog_menu').parent().animate({left: '0', position: 'absolute'});
//    }
//  });
  // Handle opening and closing of mobile share drawer

// mobile/tablet social media icons expand/collapse
var socialLinks = function() {
	// toggle class 'compact' to expand/collapse social media links
    $("#header-social-icons-container").toggleClass( "compact" );
    // if it has the compact class it's currently closed, so open the menu
	if ($("#header-social-icons-container").hasClass("compact")){
		// not actually changing the aria-label here, but this ensures that Chrome announces changes in the aria-expanded attribute
		$("#header-social-icon-button").attr("aria-label", "social media links");
		// aria-expanded for button
		$('#header-social-icon-button').attr("aria-expanded", "false");
		// unhide the social media links container
		$('#social-icon-list-container').attr("aria-hidden","true");
	}
	// otherwise it doesn't have the 'compact' class and is open, so close the menu
	else {
		// not actually changing the aria-label here, but this ensures that Chrome announces changes in the aria-expanded attribute
		$("#header-social-icon-button").attr("aria-label", "social media links");
		// aria-expanded for button
		$('#header-social-icon-button').attr("aria-expanded", "true");
		// hide the social media links container
		$('#social-icon-list-container').attr("aria-hidden","false");
	}
    return false;
};
// run socialLinks function on click of button
$('#header-social-icon-button').click(function(){
	socialLinks();
});
// run socialLinks function on click outside of social media links menu
$('.masking-background').click(function(){
	socialLinks();
});
/* this is actually unnecessary as <button> presses with the enter/spacebar keys are considered clicks
// ... or on enter key press of button
$("#header-social-icon-button").keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
		socialLinks();
    }
});
*/

    /* Flat HTML Quiz Javascript */  
    var totalQuestions = $('.question-container').size();

    var currentQuestion = 0;
    $questions = $('.question-container');
    // using CSS to hide instead so there's no flashing of quiz content before being hidden
    //$questions.hide();
    $($questions.get(currentQuestion)).fadeIn( 10 );

    $('.q h2').attr("tabindex", "0");

    var nextQuestion = function() {
        $($questions.get(currentQuestion)).fadeOut( 10, function(){
            currentQuestion = currentQuestion + 1;
            if(currentQuestion == totalQuestions){
               $("#congrats").show();
            } else {
                $($questions.get(currentQuestion)).show();
                // set focus using a timeout function to fix IE bug
                setTimeout(function() {;
                    $('.question-container h2:visible').focus();
                }, 10)
            }
        });
    };

    $('.next-q').click(function(){
        nextQuestion();
    });

    $('.q fieldset input').click(function (){
        var iVal = $(this).val();  
        $(this).parents(".q").find("button").attr("value", iVal);
    });
    
    // on submit
    $('.question-submit').click(function () {
        // question container
        var parentContainer = $(this).parents(".q");
        var i = parentContainer.find("input:checked");

        if (! i.length){
            nextQuestion();
        }
        // if the user answered the question correctly...
        else if (i.hasClass("correct")){
            // show them the answer
            $(this).parents(".question-container").find(".correct").show().find(".quiz-response").focus();
        } 
        // if the user answered incorrectly
        else {
            // show them the right answer
            $(this).parents(".question-container").find(".incorrect").show().find(".quiz-response").focus();
        }   
        
        // hide the question
        parentContainer.hide();
    }); 

    /* ##### 508 tab through ################################################## */

    $('.field-name-home-page-feature-img-hover, .field-name-home-page-feature-vid-hover div a').first().attr("tabindex", "-1");

    $('.field-name-home-page-feature-img-hover a, .field-name-home-page-feature-vid-hover a').focus(function () {

        if ($(window).width() >= 629) {
            $(this).parents('.field-name-home-page-feature-img-hover, .field-name-home-page-feature-vid-hover').removeClass('front-page-feature-hover-off');
            $(this).parents('.field-name-home-page-feature-img-hover, .field-name-home-page-feature-vid-hover').addClass('front-page-feature-hover-on');
        }
    });

    $('.field-name-home-page-feature-img-hover a, .field-name-home-page-feature-vid-hover a').blur(function () {

        if ($(window).width() >= 629) {
            $(this).parents('.field-name-home-page-feature-img-hover, .field-name-home-page-feature-vid-hover').removeClass('front-page-feature-hover-on');
            $(this).parents('.field-name-home-page-feature-img-hover, .field-name-home-page-feature-vid-hover').addClass('front-page-feature-hover-off');

        }
    });

    // Tab through - Feature with border
    $('.pane-content .feature a').focus(function () {
        $(this).parents('body.landing-page .feature li').addClass('feature-hover-on');
    });
    $('.pane-content .feature a').blur(function () {
        $('body.landing-page .feature li').addClass('feature-hover-off');
    });

    // ##### 508 Tab Through for Main Menu - BEGINS ##################################################

    // When not part of the .menu, clear .open-sub-menu and .close-sub-menu 
    $('#logo > .logoWrapper > a').focus(function () {
        $('.menu .sub-nav').removeClass('open-sub-menu').removeClass('close-sub-menu');

        return false;
    });

    // On focus
    $('.menu > li > a').focus(function () {

        // Start by looking for 2nd level nav
        if ($(this).parent('li').parent('ul').hasClass('sub-nav')) {
            // Add a navigation flag for where you are
            $(this).parent('li').parent('.sub-nav').addClass('nav-flag');
        }
        // If not 2nd level nav, then it must be 1st level nav
        else {
            // Add open-sub-menu and navigation flag
            $(this).parent('li').find('.sub-nav').addClass('nav-flag');
            if ($(this).hasClass('active-trail')) {
                $(this).parent('li').find('.nav-flag').remove('open-sub-menu');
            } else {
                $(this).parent('li').find('.nav-flag').addClass('open-sub-menu');
            }

            // If not navigation flag, then remove open-sub-menu
            $('ul').not('.nav-flag').removeClass('open-sub-menu');
            // If I am on active-trail, then remove close-sub-menu
            if ($(this).hasClass('active-trail')) {
                $('.active-trail > .sub-nav').removeClass('close-sub-menu');
            }
            // Otherwise, add close-sub-menu
            else {
                $('.active-trail > .sub-nav').addClass('close-sub-menu');
            }
        }

        return false;
    });
    // When not on focus
   $('.menu > li > a').blur(function () {
        // Remove navigation flag
        $('.sub-nav').removeClass('nav-flag');
        // When leaving the last item on the .menu, clear .open-sub-menu and .close-sub-menu
        if  ($(this).hasClass('last')) {
            if ($(this).parent('li').parent('ul').parent('li').hasClass('last')) {
                $('.menu .sub-nav').removeClass('open-sub-menu').removeClass('close-sub-menu');
            }
        }
        return false;
    });
    // ##### 508 Tab Through for Main Menu - END ##################################################

    // Add "active-trail" to missing parents when "active" (bug in Drupal?)
    $('.menu > li > a.active').addClass('active-trail');
    /* ##### Top Nav - add class to submenu################## */
    $('ul.menu > li > ul.menu').addClass('sub-nav'); //add the class to the main menu sub nav
    $('.menu > li > a.active').addClass('expanded');
    $('.menu > li > a.hover').addClass('expanded');
    $('.menu > li > a.active').removeClass('collapsed');
    $('.menu > li > a.active').parent('li').addClass('active-trail');
    $('.menu > li > a.active').parents('li.expanded').addClass('active-trail');
    $('.menu > li > a.active').parents('li.expanded').children('a').addClass('active-trail');
    $('.menu > li > a.active').parents('li.expanded').children('a').addClass('expanded');

    // Set display for item with "active-trail" class
    $('.menu > li > a.active-trail').addClass('expanded');
    $('.menu > li > a.active-trail').removeClass('collapsed');
    //$('.menu > li > a.active-trail').parent().find('> ul').css('display', 'block');
    //$('.menu > li > a.active-trail').parent().find('> ul').attr('aria-expanded', 'true'); // set aria-expanded = true if expanded
    //$('.block-menu > div > .menu > li > a.active-trail').attr('aria-expanded', 'true'); // set aria-expanded = true if expanded

    // Set "prev-trail" if "active-trail" exists
    $('ul.menu > li > a.active-trail').parent().prev().find('a').addClass('prev-trail');
    $('ul.menu > li > ul.menu > li > a.active-trail').parent().prev().find('a').addClass('prev-trail');

    // Trigger menu when clicked (hovered ) -changed from "clicked" to "hover"
    //this is for the the main header items
    $('.block-menu > div > .menu > li').hover(function () {
        $('.menu a').removeClass('prev-trail'); // reset by removing all prev-trail class
        return false;
    }, function() {
        $('.menu a').removeClass('prev-trail'); // reset by removing all prev-trail class
    });

    /* Hides previous element's right border on hover for secondary nav */
    $('.menu > li > ul > li > a').hover(
        function () {
            $(this).parent().prev('li').children('a').addClass('hover-neighbor');
        },
        function () {
            $(this).parent().prev('li').children('a').removeClass('hover-neighbor');
        }
    );

    /* start show hide for infographics */

    $('.show-more').click(function () {
        $(this).parent().parent().prev().find('> div > div').show();
        $(this).parent().parent().prev().find('> div > div > p > button').show();
        $(this).css("display", "none");
    });

    $('.show-less').click(function () {
        $(this).parent().parent().prev().hide();
        $(this).css("display", "none");
        $(this).parents().eq(3).next().find(' > p > button').show();
    });

    $(window).bind('resize', function () {

        if ($('.landing-callout').is(':visible')) {
            $('.landing-callout').attr("aria-hidden", "false");
        } else {
            $('.landing-callout').attr("aria-hidden", "true");
        }

        if ($(this).width() >= 629) {
            $('.attachment-after > div > div').show();
            $('.show-more').css("display", "none");
            $('.show-less').css("display", "none");
            $('.landing-menu-block').attr("aria-hidden", "false");
        } else {
            $('.attachment-after > div > div').hide();
            $('.show-more').css("display", "block");
            $('.landing-menu-block').attr("aria-hidden", "true");
        }
    });
    /* end show hide for infographics */

	/* TAB FOR DOSSIER */
	$(function() {
		$(".single-element").attr('tabindex', '0');
	});

    $('.single-element').on('click', function(evt) {
        var $this = $(this);
        // If the clicked element does NOT have the hover class, first remove it from any other element, then add it to this element */
        if (!$this.hasClass('dossier-hover')) {
            $('.single-element').removeClass('dossier-hover')
            $this.addClass('dossier-hover');
        }
    });

    $(document).on('click', function(evt) {
        $('.single-element').removeClass('dossier-hover');
    });

    /* 508 fix to popup*/
    $('.popup-element-origin').attr("data-role", "popup");


    $('.node-basic-page > div').append($('#block-block-1'));
    $('.pane-custom.pane-1').prev().remove();

    /* wrap vote and share tools into a div*/
    $(".field-name-rate-widget, .field-name-share").wrapAll("<div class='rate-share-block clearfix'></div>");
    $(".node-basic-page > div > .rate-widget-1").wrap("<div class='rate-share-block clearfix'></div>");
    $("div.panel-panel > div > .pane-block.pane-nodeblock-190").wrap("<div class='rate-share-block clearfix'></div>");
    //$(".inside > .pane-block.pane-nodeblock-209").wrap("<div class='rate-share-block clearfix'></div>");
    $(".inside > #block-nodeblock-209").wrap("<div class='rate-share-block clearfix'></div>");
    $('#block-nodeblock-209 > h2').remove();


    $('.node-basic-page').append($('#block-block-4'));
    $('.node-basic-page').append($('#block-block-5'));

    $('.node-basic-page > #block-block-4').wrap("<div class='rate-share-block clearfix'></div>");
    $('.node-basic-page > #block-block-5').wrap("<div class='rate-share-block clearfix'></div>");

    $('.rate-share-block').append($('.field-name-share'));
    $('.rate-share-block').append($('#block-block-1'));
    $('.inside > .rate-share-block').append($('.pane-custom.pane-1'));
    $('.rate-share-block').append($('.pane-custom.pane-1'));

    $('.rate-share-block').append($('#block-block-4'));
    $('.rate-share-block').append($('#block-block-5'));


     // removing this method of Twitter Web Intent sharing javscript because it causes 
    //both a popup window AND the current page to navigate to a new URL. See below code for new implementation.
    /*start Twitter share for individual infographic node*/
    //window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));
    /*end Twitter share for individual infographic node*/

    // Code from Twitter to create popup window for all Twitter Web Intent URLs.
    (function() {
    if (window.__twitterIntentHandler) return;
    var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
        windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
        width = 550,
        height = 420,
        winHeight = screen.height,
        winWidth = screen.width;
    
    function handleIntent(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            m, left, top;
    
        while (target && target.nodeName.toLowerCase() !== 'a') {
        target = target.parentNode;
        }
    
        if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
        m = target.href.match(intentRegex);
        if (m) {
            left = Math.round((winWidth / 2) - (width / 2));
            top = 0;
    
            if (winHeight > height) {
            top = Math.round((winHeight / 2) - (height / 2));
            }
    
            window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                            ',height=' + height + ',left=' + left + ',top=' + top);
            e.returnValue = false;
            e.preventDefault && e.preventDefault();
        }
        }
    }
    
    if (document.addEventListener) {
        document.addEventListener('click', handleIntent, false);
    } else if (document.attachEvent) {
        document.attachEvent('onclick', handleIntent);
    }
    window.__twitterIntentHandler = true;
    }());
    // End Twitter Web Intents popup code
	
    /* remove unordered list from search results page on noresults*/
    $('div > ul#noresults').remove();



    /* Hooked quiz javascript (for Google analytics) */
    // for each radio input, add it's gtm_attrib attribute (the question) to the button element for Google analytics to capture
    $('#webform-client-form-3 .form-radios input').each(function() {
        // set questionAttr variable as the value of the gtm_attrib of that particular question
        var questionAttr = "data-" + $(this).attr("gtm_attrib");
        // ... and add that attribute to the submit button
        $("#webform-client-form-3 input[type='submit']").attr(questionAttr, "blank");
    });


    // on click of input, populate the value of that input into it's associated question attribute
    $('#webform-client-form-3 .form-radios input').click(function() {
       // set questionAttr variable as the value of the gtm_attrib of that particular question
        var questionAttr = "data-" + $(this).attr("gtm_attrib");
        // set answerAttr variable as the value of the clicked radio button (either "yes" or "no")
        var answerAttr = $(this).attr("value");
        // update the appropriate question attribute with the users answer
        $("#webform-client-form-3 input[type='submit']").attr(questionAttr, answerAttr);
    });

    // disable hooked quiz submit button on page load
    $('#webform-client-form-3 input[type="submit"]').attr("disabled", true);

    // add ARIA to form to announce changes in content (for when the confirmation message appears)
    $('#block-views-quiz-block').attr('aria-live','polite');
    $('#webform-client-form-3 input[type="submit"]').attr("aria-controls","block-views-quiz-block");

    // Checking to see if the hooked quiz questions have all been answered
    var hookedCompletionCheck = function() {
        // look at each hooked quiz radio button
        $('.webform-component-radios input').each(function () {
            // if it's checked...    
            if ($(this).is(':checked')) {
                // add the 'ans' class
                $(this).parent().parent().parent().addClass('ans');
            }
        });
        var numItems = $('.ans').length;
        if (numItems == 10) {
            $('#webform-client-form-3 input[type="submit"]').attr("disabled", false);
        }
    };
    // run hookedCompletionCheck function on document load
    hookedCompletionCheck();

    // run hookedCompletionCheck function on click of each hooked radio button
    $('#webform-client-form-3 input[type="radio"]').click(function () {
        hookedCompletionCheck();
    });


    /* show answer on submit */
    $('#webform-client-form-3 input[type="submit"]').click(function ( event ) {
        /* don't submit the form */
        event.preventDefault();
        /* hide everything inside the form except the answer */
        $('#webform-client-form-3 .form-item').hide().attr("aria-hidden","true");
        $('#webform-client-form-3 .webform-component-fieldset').hide().attr("aria-hidden","true");
        $('#webform-client-form-3 .form-actions').hide().attr("aria-hidden","true");
        $('#webform-component-confirmation-message').show().attr("aria-hidden","false");
        $('.webform-component--confirmation').show().attr("aria-hidden","false");
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    //highlight sources

    var sourcePath = $(location).attr('hash');
    var sourceId = $(location).attr('hash'); //split("#").pop();
    //$(sourceId).parent().parent().parent().addClass('highlighted');
    $(sourceId).parents('.views-row').addClass('highlighted');

    //end highlight

    //home page featured content 
    $("div.front-page-feature ul span.slide").attr("aria-hidden", "true");
    $("div.front-page-feature > ul > span.slide > li > div.views-field-position").attr("aria-hidden", "true");
    var spans = $("div.front-page-feature ul span.slide").get().sort(function () {
        return Math.round(Math.random()) - 0.5; //random so we get the right +/- combo
    }).slice(0, 1)
    $(spans).css("display", "block");
    $(spans).addClass("selected");
    $(spans).attr("aria-hidden", "false");

    $('div.front-page-feature > ul > span.selected > li.first').insertBefore('div.front-page-feature > ul > span.selected > li.second');

    // end of featured 

    //set Aria tags 

    if ($('.landing-menu-block').is(':visible')) {
        $('.landing-menu-block').attr("aria-hidden", "false");
    } else {
        $('.landing-menu-block').attr("aria-hidden", "true");

    }
    if ($('.landing-callout').is(':visible')) {
        $('.landing-callout').attr("aria-hidden", "false");
    } else {
        $('.landing-callout').attr("aria-hidden", "true");
    }

    $('#block-views-nodequeue_2-block-ajax-content').parent().css("padding-top", "1px");
});

/* fix to line break introduced when adding a source*/
$('.popup-element').wrap("<span class='source-wrapper sup' aria-hidden='true'/>");
$('.source-wrapper').prev().css("display", "inline");


(function (m) {


    jQuery(document).ready(function ($) {
        // START ACCORDIONS

        jQuery('h2.pane-title .accordion').attr('title', 'Minimize section');


        jQuery('h2.pane-title .accordion').toggle(function () {
            $(this).parents('.pane-title').next('.pane-content').slideToggle('normal');
            $(this).find('span.accordionArrow').addClass('closed');
            $(this).attr('title', 'Expand section');
            return false;
        }, function () {
            $(this).parents('.pane-title').next('.pane-content').slideToggle('normal');
            $(this).find('span.accordionArrow').removeClass('closed');
            $(this).attr('title', 'Minimize section');
            return false;
        });

        jQuery('h2.pane-title .accordion').keypress(function (e) {
            var keycode = (e.keyCode ? e.keyCode : e.which);
            if (keycode == '13') {
                $(this).parents('.pane-title').next('.pane-content').slideToggle('normal');
                $(this).find('span.accordionArrow').toggleClass('closed');
                return false;
            }
        });

        jQuery('.moreShareButton').click(function () {
            $('.additionalShareOptions').toggle();
            $('.additionalShareOptions').toggleClass('shareExpand');
            return false;
        });

        jQuery('.topNavMenuButton a').click(function () {
            $('#topNavigation').toggle();
            return false;
        });

        // Top nav search button for on click
        $('.search-collapsed').attr('aria-expanded', 'false');
        $('.search-expanded').attr('aria-expanded', 'true');

        jQuery('.topNavSearchButton a').click(function () {
            $('#gsearch_inner').toggle();
            // Change to expanded
            if ($(this).hasClass('search-collapsed')) {
                $(this).addClass('search-expanded');
                $(this).removeClass('search-collapsed');
                $(this).attr('aria-expanded', 'true');
                // Set search icon image
                $(this).find('img#search-icon').attr('src', '/assets/img/search-icon-close_a.png');
                // Set search field ARIA
                $('#gsearch_inner').attr('aria-expanded', 'true');
                $('#gsearch_inner input#searchbox').focus();
            } else {
                $(this).addClass('search-collapsed');
                $(this).removeClass('search-expanded');
                $(this).attr('aria-expanded', 'false');
                // Set search icon image
                $(this).find('img#search-icon').attr('src', '/assets/img/search_icon.png');
                // Set search field ARIA
                $('#gsearch_inner').attr('aria-expanded', 'false');
            }
            return false;
        });

        // Top nav search button for on focus
        jQuery('.topNavSearchButton a').on('focus', function () {
            if ($('#gsearch_inner').css('display') == 'block') {
                $('#gsearch_inner').attr('aria-expanded', 'true');
            } else {
                $('#gsearch_inner').attr('aria-expanded', 'false');
            }
        });
        // END ACCORDIONS //
    });
})(jQuery);

/*Set Default Text in Form Fields to Disappear/Reappear on Focus In/Out*/
(function ($) {
    /**
     * The following variables may be adjusted
     */
    var active_color = '#000'; // Colour of user provided text
    var inactive_color = '#999'; // Colour of default text

    /*
     * No need to modify anything below this line
     */

    $(document).ready(function () {
        $("input.form-text").css("color", inactive_color);
        var default_values = new Array();
        $("input.form-text").focus(function () {
            if (!default_values[this.id]) {
                default_values[this.id] = this.value;
            }
            if (this.value == default_values[this.id]) {
                this.value = '';
                this.style.color = active_color;
            }
            $(this).blur(function () {
                if (this.value == '') {
                    this.style.color = inactive_color;
                    this.value = default_values[this.id];
                }
            });
        });
    });
})(jQuery);


(function ($) {
    jQuery(document).ready(function ($) {

        $('body:not(.list-view) h3.field-content a').on('focus', function () {
            $(this).parents().next('.views-field-body').css('display', 'block');
        });

        $('body:not(.list-view) h3.field-content a').on('blur', function () {
            $(this).parents().next('.views-field-body').css('display', 'none');
        });

        $('body:not(.list-view) li.cards').on('mouseover', function () {
            $(this).find('.views-field-body').css('display', 'block');
        });

        $('body:not(.list-view) li.cards').on('mouseout', function () {
            $(this).find('.views-field-body').css('display', 'none');
        });

        $(".form-item-search-block-form input.form-text").focus(function () {
            if ($(this).attr("value") == "Drupal Search") {
                $(this).attr("value", "");
            }
        });
     
        $("#gsearch #searchbox").attr("value", "Search").focus(function () {
            if ($(this).attr("value") == "Search")
                $(this).attr("value", "");
        });

        if($("input[name=search_keys]").attr("value", "Search")) {
            $("input[name=search_keys]").val('');
        }
        
    });

    // a global month names array
    var gsMonthNames = new Array(
        'January','February','March','April','May','June','July','August','September','October','November','December'
    );

    // a global day names array
    var gsDayNames = new Array(
        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
    );

    // the date format prototype
    Date.prototype.format = function (f) {
        if (!this.valueOf())
            return '&nbsp;';

        var d = this;

        return f.replace(/(yyyy|mmmm|mmm|mm|dddd|ddd|dd|hh|nn|ss|a\/p)/gi,
            function ($1) {
                switch ($1.toLowerCase()) {
                case 'yyyy':
                    return d.getFullYear();
                case 'mmmm':
                    return gsMonthNames[d.getMonth()];
                case 'mmm':
                    return gsMonthNames[d.getMonth()].substr(0, 3);
                case 'dd':
                    return d.getDate();
                case 'dddd':
                    return gsDayNames[d.getDay()];
                case 'ddd':
                    return gsDayNames[d.getDay()].substr(0, 3);
                }
            }
        );
    }
    
})(jQuery);

// function formWatch() {
//                 //actions for watch selection
//                 $('.watch_options a').on('click', function(e) {
//                         var $this = $(this);
//                         $('.watch_options a.selected').removeClass('selected')
//                         $this.addClass('selected');
//                         e.preventDefault();
//                 });
//                 //actions for listen selection
//                 $('.listen_options a').on('click', function(e) {
//                         var $this = $(this);
//                         $('.listen_options a.selected').removeClass('selected')
//                         $this.addClass('selected');
//                         e.preventDefault();
//                 });
//                 //actions for form submit
//                 $('#reason-form-submit').on('click', function(e) {
//                         $('.reasons_quiz_form').fadeOut();
//                         $('#reason-success').fadeIn();
//                         if ($('.watch_options a').hasClass('selected') && $('.listen_options a').hasClass('selected')) {
//                                 if ($('.reasons_quiz_form #comedy').hasClass('selected') && $('.reasons_quiz_form #rock').hasClass('selected')) {
//                                         $('#success-content').html('I don&rsquo;t smoke because gum disease isn&rsquo;t part of my game&nbsp;plan.');
//                                 } else if ($('.reasons_quiz_form #comedy').hasClass('selected') && $('.reasons_quiz_form #rap').hasClass('selected')) {
//                                         $('#success-content').html('I don&rsquo;t smoke because I can&rsquo;t freestyle with a&nbsp;cough.');
//                                 } else if ($('.reasons_quiz_form #action').hasClass('selected') && $('.reasons_quiz_form #rock').hasClass('selected')) {
//                                         $('#success-content').html('I don&rsquo;t smoke because rebels need full-sized&nbsp;lungs.');
//                                 } else if ($('.reasons_quiz_form #action').hasClass('selected') && $('.reasons_quiz_form #rap').hasClass('selected')) {
//                                         $('#success-content').html('I don&rsquo;t smoke because yellow&nbsp;teeth would kill my&nbsp;game.');
//                                 }
//                         } else {
//                                 $('#success-content').html('I don&rsquo;t smoke because I want to live on the edge, not on the sidelines.');
//                         }
//                         e.preventDefault();
//                 });
//         }
// jQuery(document).ready(function($) {
//                         formWatch();
//                 });
