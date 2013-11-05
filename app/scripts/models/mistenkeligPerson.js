/*global define*/
define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        MistenkeligPerson;

    require('backbone.localStorage');

    MistenkeligPerson = Backbone.Model.extend({
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