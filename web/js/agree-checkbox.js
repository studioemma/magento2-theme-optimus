define(['ko'], function (ko) {
    'use strict';

    return function (target) {
        return target.extend({

            initialize: function () {
                this._super();
                this.isChecked = ko.observable(false);
                return this;
            }
        });
    };
});
