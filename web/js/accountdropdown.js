define(['knockout'], function(ko) {
    'use strict';

    var mixin = {
        toggleMenu: function () {
            this.menuActive(!this.menuActive());
        },
        menuActive: ko.observable(false)
    };

    return function (target) {
        return target.extend(mixin);
    };
});
