/*global define*/

define([
    'jquery',
    'backbone',
    'collections/mistenkeligePersoner',
    'views/mistenkte',
    'views/app'
], function ($, Backbone, MistenkeligePersoner, MistenkteView, AppView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        },

        initialize: function () {
            var mistenkeligePersoner,
                mistenkteView,
                appView;
            mistenkeligePersoner = new MistenkeligePersoner();
            mistenkteView = new MistenkteView({
                el: '#registrerte-mistenkte',
                collection: mistenkeligePersoner
            });
            appView = new AppView({
                el: '#registrereNyMistenkt',
                collection: mistenkeligePersoner
            });
            mistenkeligePersoner.fetch();
        }
    });
    return AppRouter;
});