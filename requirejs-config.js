//
//  Include javascript files
//  ________________________

var config = {
    deps: [
        'js/scripts',
        'js/responsive-optimus'
    ],
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
            'Magento_CheckoutAgreements/js/view/checkout-agreements': {
                'js/agree-checkbox': true
            },
            'Magento_Customer/js/view/customer': {
                'js/accountdropdown': true
            }
        }
    }
};
