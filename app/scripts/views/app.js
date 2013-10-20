/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/mistenkeligPerson'
], function ($, _, Backbone, JST, MistenkeligPerson) {
    'use strict';

    var AppView = Backbone.View.extend({

        //template: JST['app/scripts/templates/app.hbs'],

        initialize: function () {
            this.$navn = $('#navn');
            this.$telefon = $('#telefon');
            this.$email = $('#email');
            this.$mistenkelighetsgrad = $('#mistenkelighetsgrad');
        },

        //    validate: function() {
        //        retu
        //    },

        events: {
            'click #sladre': 'lagreEn'
        },

        lagreEn: function () {
            var nyPerson = new MistenkeligPerson({
                navn : this.$navn.val(),
                email : this.$email.val(),
                telefon: this.$telefon.val(),
                mistenkelighetsgrad: this.$mistenkelighetsgrad.val()
            });
            nyPerson.save();
            this.collection.add(nyPerson);
        }

    });

    return AppView;
});