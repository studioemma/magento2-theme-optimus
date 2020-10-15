define(["jquery"], function($) {
    return function(widget) {
        $.widget("mage.collapsible", widget, {
            _create: function() {
                this.storage = $.localStorage;
                this.icons = false;

                if (typeof this.options.icons === "string") {
                    this.options.icons = $.parseJSON(this.options.icons);
                }

                this._processPanels();
                this._processState();
                this._refresh();

                if (this.options.icons.header && this.options.icons.activeHeader) {
                    this._createIcons();
                    this.icons = true;
                }

                this._bind("click");
                this._trigger("created");
            }
        });
        return $.mage.collapsible;
    };
});
