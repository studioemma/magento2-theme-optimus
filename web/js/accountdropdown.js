define(['ko', 'jquery'], function(ko, $) {
    'use strict';

    var menuActive = ko.observable(false);

    $('body').on('click', function(e) {

       if ($(e.target).closest('.c-account-dropdown').length) {
          return;
       }

       if (menuActive()) {
           menuActive(false);
       }
    });

    $('.action.showcart').on('click', function() {
       if (menuActive()) {
           menuActive(false);
       }
    });

    var mixin = {
        toggleMenu: function () {
            this.menuActive(!this.menuActive());
        },
        menuActive: menuActive
    };

    return function (target) {
        return target.extend(mixin);
    };
});
