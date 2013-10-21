/*global define, expect, fakeResponse, it, beforeEach, describe*/
define([
    'views/person',
    'models/mistenkeligPerson',
    'sinon',
    'responseFaker'
], function (PersonView, MistenkeligPerson, sinon, responseFaker) {
    'use strict';
    responseFaker.call(this);

    describe('Person-view', function () {
        var personView,
            mistenkeligPerson,
            mistenkeligPersonSjekketUt
            ;

        mistenkeligPerson = new MistenkeligPerson({
            'id': 1,
            'navn': 'Ken Are Astrup',
            'telefon': '23456789',
            'email': 'ken.astrup@gmail.com',
            'mistenkelighetsgrad': 5,
            'sjekketUt': false
        });

        // klone mistenkeligPerson og sjekker klonen ut
        mistenkeligPersonSjekketUt = mistenkeligPerson.clone();
        mistenkeligPersonSjekketUt.sjekkUt();

        beforeEach(function () {
            // tar bort localStorage og setter url fordi den spiller ikke bra sammen med sinon
            mistenkeligPerson.localStorage = undefined;
            mistenkeligPerson.url = 'person';
            personView = new PersonView({
                model: mistenkeligPerson
            });
        });

        it('skal rendre riktig', function () {
            fakeResponse(mistenkeligPerson.toJSON(), function () {
                mistenkeligPerson.fetch();
            });

            expect(personView.$el.get(0).innerHTML).to.contain('Ken Are Astrup');
        });

        it('skal person sjekke ut av registrene', function () {
            fakeResponse(mistenkeligPerson.toJSON(), function () {
                mistenkeligPerson.fetch();
            });

            //personen er ikke sjekket ut,
            expect(personView.$el.get(0).innerHTML).to.contain('glyphicon-remove-circle"');

            fakeResponse(mistenkeligPersonSjekketUt.toJSON(), function () {
                personView.$('.glyphicon-remove-circle').click();
            });

            expect(personView.$el.get(0).innerHTML).not.to.contain('glyphicon-remove-circle');
        });
    });
});