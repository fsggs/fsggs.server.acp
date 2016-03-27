/**
 *
 */

requirejs.config({
    baseUrl: "assets/js/",
    paths: {
        'jquery': '../vendor/jquery/dist/jquery.min'
    }
});

define('Application', [
    'jquery',
    'ui/Layout'
], function ($) {
    "use strict";

});

require([
    'Application'
]);
