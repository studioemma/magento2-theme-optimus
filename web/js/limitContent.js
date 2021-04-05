
define(["jquery", "mage/translate"], function($){
    "use strict";

    // All element with the css class or the pagebuilder attribute set to true
    $('.is-limit-content, [data-limit-content=true]').each(function(){
        checkHeight($(this));
    })

    function checkHeight(element) {

        var that = {};
        that.element = element;

        var roleContentHtml = '<div data-role="content"></div>';
        var roleTriggerHtml = '<a class="toggle" data-role="toggle">' + $.mage.__("Read more") + '</a>';

        var defaultMaxHeight = 200;
        var maximumHeight = defaultMaxHeight;

        // Set height based on attribute if it exists and not empty
        if(that.element.data("limit-content-height") && that.element.data("limit-content-height") != ""){
            // Parse int when px is subtracted
            maximumHeight = parseInt(that.element.data("limit-content-height").replace("px",""));
        }

        var fadeHeight = 0; // set to 0 for now

        //check height of container
        var currentHeight = that.element.outerHeight();

        //if higher than allowed height + fade -> otherwise the fade would sometimes obscure very little actual content
        if (currentHeight > (maximumHeight+fadeHeight)) {

            // Wrap elements if too big
            that.element.wrapInner(roleContentHtml);

            // Add toggle
            that.element.append(roleTriggerHtml);

            // Find content
            that.content = that.element.find('> [data-role="content"]');

        }else{
            // Not needed
            that.element.addClass("is-limit-content--not-needed");
        }

        // Set type as checked for limit content
        that.element.addClass("is-limit-content--checked");

    }

    // Read more: on click remove the maximum height (click code above)
    // expand & shrink height
    $('a[data-role="toggle"]').on('click', function (e) {

        //toggle max height
        $(this).parent().toggleClass("is-limit-content--expanded");
        e.preventDefault();

        //toggle link text
        var newText = $(this).text() === $.mage.__("Read more") ? $.mage.__("Read less") :  $.mage.__("Read more");
        $(this).text(newText);

        // Scroll to top if needed to avoid the large gaps between content when collapsed
        if(!$(this).parent().hasClass("is-limit-content--expanded")){
            scrollIntoViewIfNeeded($(this).parent()[0]);
        }

    });

    function scrollIntoViewIfNeeded(target) {
        if (target.getBoundingClientRect().bottom > window.innerHeight) {
            target.scrollIntoView(false);
        }

        if (target.getBoundingClientRect().top < 0) {
            target.scrollIntoView();
        }
    }

});