define([
    'jquery',
    'matchMedia',
    'mage/tabs',
    'domReady!',
    'mage/translate'
], function ($, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(min-width: 769px)',

        /**
         * Switch to Desktop Version.
         */
        entry: function () {
            setTimeout(function () {
                $('.product.data.items').tabs('option', 'openOnFocus', true);
            }, 500);

        },
        /**
         * Switch to Mobile Version.
         */
        exit: function () {
            setTimeout(function () {
                $('.product.data.items').tabs('option', 'openOnFocus', false);
            }, 500);
        }
    });

    /* General dropdown from regular anchor */
    $('.hover-action').click(function(e) {
        $(this).parents('.hover-action-container').toggleClass('is-active');
    });

    /* Footer language dropdown */
    $(".page.bottom .language-footer .switcher-label").click(function() {
        $(this).parent().toggleClass('open');
    })

    var translateAdd = $.mage.__('Added to order');
    var translateAdded = $.mage.__('Add to order?');

    /* Related products: visual buttons checkbox toggle functionality */
    $(".block.related .item button").on("click", function() {
        $(this).next().find('input[type=checkbox]').trigger('click');
        $(this).toggleClass('toggled');
        $(this).html($(this).html() == translateAdd ? translateAdded : translateAdd);
    });

    /*** Toggle search loading animation for search ***/
    /* Regular search */
    $(".form.minisearch input#search").keypress(function (e) {
        if (this.value) {
            if (e.keyCode == 13) {
                $(this).next('.search-loader').fadeIn();
            }
        }
    });
    /* Autocomplete */

});
