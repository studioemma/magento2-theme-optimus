//
//  Include javascript files
//  ________________________

var config = {
    deps: [
        'js/scripts',
        'js/responsive-optimus',
        'js/limitContent'
    ],
    map: {
        "*": {
            // if someone depends on jquery/ui, jquery/compat is loaded
            // jquery/compat loads jquery-ui-modules/tabs
            // if jquery-ui-modules/tabs is loaded after mage/tabs, the tabs function is mapped to the wrong widget
            // (to the jquery widget and not to the Magento widget)
            // then, it is not possible to call methods on the tabs
            // this mapping fixes this issue, because jquery-ui-modules/tabs is not loaded any more
            "jquery-ui-modules/tabs": "mage/tabs"
        }
    },
    paths: {
        responsiveslides: 'js/responsiveslides.min',
        magnificpopup: 'js/jquery.magnific-popup.min',
        flexslider: 'js/jquery.flexslider-min',
        stickyheader: 'js/stickyheader'
    },
    shim: {
        responsiveslides: ['jquery'],
        magnificpopup: ['jquery'],
        flexslider: ['jquery']
    },
    config: {
        mixins: {
            'Magento_Customer/js/view/customer': {
                'js/accountdropdown': true
            }
        }
    }
};
