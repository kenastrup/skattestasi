/*global define*/

define(function (require) {
    'use strict';
    var _ = require('underscore'),
        Backbone = require('backbone'),
        MistenkeligPerson = require('models/mistenkeligPerson'),
        MistenkeligePersoner;

    MistenkeligePersoner = Backbone.Collection.extend({
        model: MistenkeligPerson,
        localStorage: new Backbone.LocalStorage('MistenkeligePersoner'),

        comparator: function (mistenkeligPerson) {
            return mistenkeligPerson.get('id');
        },

        sorterPaaId: function () {
            this.comparator = function (mistenkeligPerson) {
                return mistenkeligPerson.get('id');
            };
            this.sort();
        },

        sorterPaaNavn: function () {
            this.comparator = function (mistenkeligPerson) {
                return mistenkeligPerson.get('navn');
            };
            this.sort();
        }
    });

    return MistenkeligePersoner;
});