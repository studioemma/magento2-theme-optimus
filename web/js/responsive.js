/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

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
        // Switch to Desktop Version
        entry: function () {
            (function () {

                var productInfoMain = $('.product-info-main'),
                    productInfoAdditional = $('#product-info-additional');

                if (productInfoAdditional.length) {
                    productInfoAdditional.addClass('hidden');
                    productInfoMain.removeClass('responsive');
                }

            })();

            var galleryElement = $('[data-role=media-gallery]');

            if (galleryElement.length && galleryElement.data('mageZoom')) {
                galleryElement.zoom('enable');
            }

            if (galleryElement.length && galleryElement.data('mageGallery')) {
                galleryElement.gallery('option', 'disableLinks', true);
                galleryElement.gallery('option', 'showNav', false);
                galleryElement.gallery('option', 'showThumbs', true);
            }

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
        // Switch to Mobile Version
        exit: function () {
            $('.action.toggle.checkout.progress')
                .on('click.gotoCheckoutProgress', function () {
                    var myWrapper = '#checkout-progress-wrapper';
                    scrollTo(myWrapper + ' .title');
                    $(myWrapper + ' .title').addClass('active');
                    $(myWrapper + ' .content').show();
                });

            $('body')
                .on('click.checkoutProgress', '#checkout-progress-wrapper .title', function () {
                    $(this).toggleClass('active');
                    $('#checkout-progress-wrapper .content').toggle();
                });

            var galleryElement = $('[data-role=media-gallery]');

            setTimeout(function () {
                if (galleryElement.length && galleryElement.data('mageZoom')) {
                    galleryElement.zoom('disable');
                }

                if (galleryElement.length && galleryElement.data('mageGallery')) {
                    galleryElement.gallery('option', 'disableLinks', false);
                    galleryElement.gallery('option', 'showNav', true);
                    galleryElement.gallery('option', 'showThumbs', false);
                }
            }, 2000);

            setTimeout(function () {
                $('.product.data.items').tabs('option', 'openOnFocus', false);
            }, 500);

            /* Move layered navigation to top */
            $(".sidebar.sidebar-main .block.filter").insertAfter($('.products.wrapper').prev('.toolbar.toolbar-products').find('.toolbar-sorter.sorter'));

            /* Move store USP block to footer */
            $(".panel.header .store-usp").prependTo($('footer .footer'));

            /* Move store USP block to page bottom on checkout */
            $(".panel.header .store-usp").prependTo($('.checkout-index-index .footer'));
        }
    });

    $(document).ready(function () {
        /* Mobile layered nav toggle */
        $(".catalog-category-view .block.filter .block-title").click(function() {
            $(this).parent().toggleClass('opened');
        });

        /* Cart quantity override */
        $("#shopping-cart-table .col.qty .select-qty").change(function() {
            if($(this).val() == "more") {
                $(this).hide();
                $(this).next(".qty").css('display', 'inline-block');
                $(this).next(".qty").focus();
                $(this).next(".qty").select();
            } else {
                $(this).next(".qty").val($(this).val());
            }
            $(this).siblings('.small-save-button').css('display','inline-block');
        });

        /* PDP quantity override */
        $(".box-tocart .select-qty").change(function() {
            if($(this).val() == "more") {
                $(this).hide();
                $(this).next(".qty").css('display', 'inline-block');
                $(this).next(".qty").focus();
                $(this).next(".qty").select();
            } else {
                $(this).next(".qty").val($(this).val());
            }
        });

        /* General dropdown from regular anchor */
        $('.hover-action').toggle(function() {
            $(this).next('.hover-action-content').andSelf().wrapAll("<div class='hover-action-container' />");
            $(this).next('.hover-action-content').addClass('open');
            return false;
        }, function(){
            $(this).next('.hover-action-content').andSelf().unwrap();
            $(this).next('.hover-action-content').removeClass('open');
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
        $('.block.filter dd').each(function () {
            var lnl = $(this).find('li').not('.more').length;
            if ($(this).find('.show_more_count').val()) {
                var sizeOfToggle = $(this).find('.show_more_count').val();
            } else {
                var sizeOfToggle = 6;
            }

            if(lnl > sizeOfToggle){
                $(this).addClass('collapse');
                $(this).find('li').slice(sizeOfToggle).not('.more').addClass('hidden');
                $(this).find('li.more a').click(function() {
                    $(this).parent().parent().toggleClass('open');
                    $(this).toggleClass('toggled','');
                    $(this).parent().parent().find('li').not('.more').toggleClass('visible', 500);
                    return false;
                });
            }
        });

        /* Layered navigation accordion dd toggle */
        $(".block.filter #narrow-by-list > dt").click(function() {
            $(this).toggleClass('toggle-active','');
            $(this).next('dd').slideToggle('fast');
            return false;
        });

        $(".block-layered-nav .block-content #narrow-by-list").addClass("force-display");
    });
});


