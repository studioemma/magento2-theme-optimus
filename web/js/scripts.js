define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
            //console.log('desktop switch');
            // ...
        },
        // Switch to Mobile Version
        exit: function () {
            //console.log('mobile switch');
            // ...
        }
    });

    //
    //  Maginfic popup
    //  ______________

    if ($('.popup-video').length) {

        $('.popup-video').each(function (index){
            if ($(this).find('img').length) {
                $(this).addClass('has-thumbnail');
            }
        });

        require(['magnificpopup'], function(){
            $('.popup-video').magnificPopup({
		        //disableOn: 700,
		        type: 'iframe',
		        //mainClass: 'mfp-fade',
		        //removalDelay: 160,
		        preloader: false,
		        fixedContentPos: false
	        });
        });
    }

    // ==============================================
    // System-wide toggle system
    // ==============================================

    $(".accordion h4 a, .accordion h3 a").click(function(e){
        e.preventDefault();
        $(this).parent().next().toggleClass('toggled');
        $(this).parent().toggleClass('toggled');
    });

    // ==============================================
    // Category description toggle system (old system because of existing client handlings)
    // ==============================================

    $(".showMoreText").click(function(e) {
        e.preventDefault();
        $(this).parent().next('.moreText').addClass('toggled');
        $(this).hide();
    });

    $(".showLessText").click(function(e) {
        e.preventDefault();
        $(this).parents('.moreText').removeClass('toggled');
        $(this).parents('.moreText').parent().find('.showMoreText').show();
    });

    // ==============================================
    // System wide nav dropdown
    // ==============================================

    $(".collapsible > .title").click(function() {
        $(this).toggleClass('toggled','');
        $(this).next('.content').toggleClass('toggled','');
        return false;
    });
});
