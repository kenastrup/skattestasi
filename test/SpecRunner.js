/*global require,expect */
require.config({
    baseUrl: '/scripts',
    paths: {
        'jquery': '/bower_components/jquery/jquery',
        'backbone': '/bower_components/backbone/backbone',
        'underscore': '/bower_components/underscore/underscore',
        'backbone.localStorage': '/bower_components/backbone.localStorage/backbone.localStorage',
        'mocha': '/lib/mocha/mocha',
        'chai': '/lib/chai',
        'expect': '/lib/expect',
        'models': 'models',
        'collections': 'collections',
        'views': 'views',
        'routes': 'routes',
        'sinon': '/lib/sinon',
        'handlebars': '/bower_components/handlebars/handlebars',
        'responseFaker': '/lib/responseFaker'

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
        handlebars: {
            exports: 'Handlebars'
        },
        responseFaker: {
            deps: ['sinon'],
            exports: 'responseFaker'
        },
        sinon : {
            exports: 'sinon'
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
        'spec/collections/mistenkeligePersoner.spec.js',
        'spec/models/mistenkeligPerson.spec.js',
        'spec/views/mistenkte.spec.js',
        'spec/views/person.spec.js'
    ], function (require) {
        mocha.run();
    });
});

