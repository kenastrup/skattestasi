/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'backbone.localStorage': {
            deps: ['backbone'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        jquery: {
            exports: '$'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        'backbone.localStorage': '../bower_components/backbone.localStorage/backbone.localStorage',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap.min',
        handlebars: '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone',
    'views/app',
    'routes/app',
    'bootstrap'
], function (Backbone, AppView, AppRouter) {
    Backbone.history.start();
    new AppRouter();
});