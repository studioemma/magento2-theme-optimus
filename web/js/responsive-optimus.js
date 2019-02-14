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

            /* Move layered navigation back to sidebar */
            $(".toolbar.toolbar-products .block.filter").prependTo($('.sidebar.sidebar-main'));

            /* Move store USP block to header */
            $("footer .footer .store-usp").prependTo($('.top.panel.wrapper .panel.header'));

            /* Move store USP block to header on checkout */
            $(".checkout-index-index .footer .store-usp").prependTo($('.top.panel.wrapper .panel.header'));
        },
        /**
         * Switch to Mobile Version.
         */
        exit: function () {
            setTimeout(function () {
                $('.product.data.items').tabs('option', 'openOnFocus', false);
            }, 500);

            /* Move layered navigation to top */
            $(".sidebar.sidebar-main .block.filter").insertAfter($('.products.wrapper').prevAll('.toolbar.toolbar-products').find('.toolbar-sorter.sorter'));

            /* Move store USP block to footer */
            $(".panel.header .store-usp").prependTo($('footer .footer'));

            /* Move store USP block to page bottom on checkout */
            $(".panel.header .store-usp").prependTo($('.checkout-index-index .footer'));
        }
    });

    /* Mobile layered nav toggle */
    $(".block.filter .block-title").click(function() {
        $(this).parent().toggleClass('opened');
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

    /* Layered navigation more/less toggle */
    $('.js-toggle-hidden-layerednav').click(function () {
        //Toggle class
        $(this).parent().parent().toggleClass('open');
        return false;
    });

    /* Layered navigation accordion dd toggle */
    $(".block.filter #narrow-by-list > dt").click(function() {
        $(this).toggleClass('toggle-active','');
        $(this).next('dd').slideToggle('fast');
        return false;
    });

    $(".block-layered-nav .block-content #narrow-by-list").addClass("force-display");
});
