/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/person'
], function ($, _, Backbone, JST, PersonView) {
    'use strict';

    var MistenkteView = Backbone.View.extend({
        template: JST['app/scripts/templates/mistenkte.hbs'],

        events: {
            'click #idHeader': 'sorterId',
            'click #navnHeader': 'sorterPaaNavn'
        },

        sorterId: function () {
            this.collection.sorterPaaId();
        },

        sorterPaaNavn: function () {
            this.collection.sorterPaaNavn();
        },

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'sort', this.render);
        },

        render: function () {
            this.$el.html(this.template());
            this.collection.each(this.leggTilEttView, this);
        },

        leggTilEttView: function (mistenkeligPerson) {
            var personView = new PersonView({
                model: mistenkeligPerson
            });
            this.$('tbody').append(personView.render().el);
            return personView;
        }
    });

    return MistenkteView;
});