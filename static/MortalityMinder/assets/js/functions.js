/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  Background INSERT
	2.  HEADER AFFIX
	3.	AJAX MAILCHIMP
	4.  AJAX CAMPAIGN MONITOR 
	5.  OWL CAROUSEL
	6.  SCROLL TO
	7.  NAV SPLIT
	8.  WOW ANIMATED
	9.  PORTFOLIO FLITER
	10. YOUTUBE BACKGROUND
	11. COLOR SWITCHER
*/
(function($) {
    "use strict";

    /* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");
    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

   

    

   
    /* ------------------  SCROLL TO ------------------ */

    var $Ascroll = $('a[data-scroll="scrollTo"]');
    $Ascroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    /* ------------------ NAV SPLIT ------------------ */
	
    var $section = $('.section'),
        $bodyScroll = $('.body-scroll');
    if ($bodyScroll.length > 0) {
        $(window).on("scroll", function() {
            $section.each(function() {
                var sectionID = $(this).attr("id"),
                    sectionTop = $(this).offset().top - 100,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop(),
                    $navHref = $("a[href='#" + sectionID + "']"),
                    $nav = $('.nav-split').find($navHref).parent();
                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                    $nav.addClass('active');
                    $nav.siblings().removeClass('active');
                }
            });
        });
    }


    /* ------------------  WOW ANIMATED ------------------ */
	
    var wow = new WOW({

        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

    });

    wow.init();

   