/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var PersonView = Backbone.View.extend({
        template: JST['app/scripts/templates/person.hbs'],
        tagName: 'tr',

        events: {
            'click .glyphicon-remove': 'sjekkUt'
        },

        sjekkUt: function () {
            this.model.sjekkUt();
            this.model.save();
        },

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return PersonView;
});