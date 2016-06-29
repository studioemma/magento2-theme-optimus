define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    // sticky header class toggle
    // __________________________

    var stickyDummyHeight = $("header.page-header").height() + $(".nav-sections").height();

    $(window).scroll(function(){
        if (window.innerWidth > 768) {
            var scrollPosition = $(window).scrollTop();
            var sticky = $('.page-wrapper');

            if(scrollPosition > 550) {
                sticky.addClass('sticky-header');
                $('body').css({"padding-top": stickyDummyHeight + 'px'});
            } else {
                sticky.removeClass('sticky-header');
                $('body').css({"padding-top": "0"});
            }
        }
    });

    mediaCheck({
        media: '(min-width: 769px)',
        entry: function () {
            stickyDummyHeight = $("header.page-header").height() + $(".nav-sections").height();
            var scrollPosition = $(window).scrollTop();
            var sticky = $('.page-wrapper');

            if(scrollPosition > 550) {
                sticky.addClass('sticky-header');
                $('body').css({"padding-top": stickyDummyHeight + 'px'});
            }
        },
        exit: function () {
            var sticky = $('.page-wrapper');
            sticky.removeClass('sticky-header');
            $('body').css({"padding-top": "0"});
        }
    });
});
