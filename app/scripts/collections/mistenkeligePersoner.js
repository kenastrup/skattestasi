/*global define*/

define([
    'underscore',
    'backbone',
    'models/mistenkeligPerson'
], function (_, Backbone, MistenkeligPerson) {
    'use strict';

    var MistenkeligePersoner = Backbone.Collection.extend({
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