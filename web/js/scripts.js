require(["jquery"], function($){
    $(document).ready(function () {
        // ==============================================
        // System-wide toggle system
        // ==============================================

        $(".accordion h4 a, .accordion h3 a").click(function(){
            $(this).parent().next().toggleClass('toggled');
            $(this).parent().toggleClass('toggled');
            return false;
            
        });

        // ==============================================
        // Category description toggle system (old system because of existing client handlings)
        // ==============================================

        $(".showMoreText").click(function() {
            $('.moreText').addClass('toggled');
            $(this).hide();
            return false;
        });

        $(".showLessText").click(function() {
            $('.moreText').removeClass('toggled');
            $('.showMoreText').show();
            return false;
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