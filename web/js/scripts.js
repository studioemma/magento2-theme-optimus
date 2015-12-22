require(["jquery"], function($){
    $(document).ready(function () {
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
});