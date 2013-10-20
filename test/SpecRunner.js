/*global require,expect */
require.config({
    baseUrl: '/scripts',
    paths: {
        'jquery': '/bower_components/jquery/jquery',
        'backbone': '/bower_components/backbone/backbone',
        'underscore': '/bower_components/underscore/underscore',
        'backbone.localStorage': '/bower_components/Backbone.localStorage/backbone.localStorage',
        'mocha': '/lib/mocha/mocha',
        'chai': '/lib/chai',
        'expect': '/lib/expect',
        'models': 'models',
        'collections': 'collections',
        'views': 'views',
        'routes': 'routes'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'chai-jquery': ['jquery', 'chai']
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});


require(['require', 'chai', 'jquery'], function (require, chai) {
    // Chai
    expect = chai.expect;

    /*globals mocha */
    mocha.setup('bdd');

    require([
        'spec/test.js'
    ], function (require) {
        mocha.run();
    });
});

