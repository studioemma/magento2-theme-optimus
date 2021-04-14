define([
    'jquery',
    'domReady!',
    'mage/translate'
], function ($) {
    'use strict';

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
});
