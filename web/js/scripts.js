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
    //  Magnific popup
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

    if ($('.popup-gallery').length) {

        // fill paths of a's by replacing small with large of thumbnail source
        $('.popup-gallery a').each(function (index){
            if ($(this).attr('href') === "#") {
                var thumbnail = $(this).find('img');
                if (thumbnail.length) {
                    var imgpath = thumbnail.attr('src');
                    if (imgpath.indexOf("small") >= 0) {
                        imgpath = imgpath.replace("small","large");
                    }
                    $(this).attr('href', imgpath);
                }
            }
        });

        require(['magnificpopup'], function(){

            $('.popup-gallery').each(function (index){

                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1]
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(item) {
                            return (item.el.attr('title') === undefined) ? '' : item.el.attr('title');
                        }
                    }
                });
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

    // ==============================================
    // Sitemap toggle
    // ==============================================

    $(".sitemap-dropdown h2, .sitemap-dropdown h3").click(function (e) {
        $(this).parents('.sitemap-dropdown').toggleClass('active');
    });

});
