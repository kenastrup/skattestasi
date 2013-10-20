/*global define*/
define([
    'underscore',
    'backbone',
    'backbone.localStorage'
], function (_, Backbone) {
    'use strict';

    var MistenkeligPerson = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('MistenkeligePersoner'),

        defaults: {
            sjekketUt: false
        },

        sjekkUt: function () {
            this.set('sjekketUt', true);
        },

        navn: function () {
            return this.get('navn');
        },

        telefon: function () {
            return this.get('telefon');
        },

        email: function () {
            return this.get('email');
        },

        mistenkelighetsgrad: function () {
            return this.get('mistenkelighetsgrad');
        },

        sjekketUt: function () {
            return this.get('sjekketUt');
        }
    });

    return MistenkeligPerson;
});