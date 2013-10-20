/*global define, describe, it, beforeEach, expect, fakeResponse*/
define([
    'views/mistenkte',
    'collections/mistenkeligePersoner',
    'models/mistenkeligPerson',
    'sinon',
    'responseFaker'
], function (MistenkteView, MistenkeligePersoner, MistenkeligPerson, sinon, responseFaker) {
    'use strict';
    responseFaker.call(this);

    describe('Mistenkte-view', function () {
        var mistenkteView,
            mistenkeligePersoner,
            svar = '[{"id": 3,"navn": "Tom Woods","telefon": "12345678","email": "tom.wood@skatteetaten.no","mistenkelighetsgrad": 1},{"id": 1,"navn": "Ken Are Astrup","telefon": "23456789","email": "ken.astrup@skatteetaten.no","mistenkelighetsgrad": 5},{"id": 2,"navn": "Erik Mong","telefon": "34567890","email": "erik.mong@skatteetaten.no","mistenkelighetsgrad": 3}]';

        function antallMistenkeligePersonerIViewet() {
            return mistenkteView.$('tbody tr').length;
        }


        beforeEach(function () {
            mistenkeligePersoner = new MistenkeligePersoner();
            // tar bort localStorage og setter url fordi den spiller ikke bra sammen med sinon
            mistenkeligePersoner.localStorage = undefined;
            mistenkeligePersoner.url = 'fake';
            mistenkteView = new MistenkteView({
                collection: mistenkeligePersoner
            });
        });

        it('skal rendre riktig', function () {
            fakeResponse(svar, function () {
                mistenkeligePersoner.fetch();
            });

            expect(antallMistenkeligePersonerIViewet()).to.equal(3);
        });

        it('skal sortere på navn', function () {
            fakeResponse(svar, function () {
                mistenkeligePersoner.fetch();
            });

            // klikk på header skal sortere på navn
            mistenkteView.$('#navnHeader').click();

            // sjekker at radene i tabellen kommer i riktig rekkefølge
            // den aller første TR elementet er headeren
            expect(mistenkteView.$('tr').get(1).innerHTML).to.contain('Erik Mong');
            expect(mistenkteView.$('tr').get(2).innerHTML).to.contain('Ken Are Astrup');
            expect(mistenkteView.$('tr').get(3).innerHTML).to.contain('Tom Woods');

        });

        it('skal sortere på id', function () {
            fakeResponse(svar, function () {
                mistenkeligePersoner.fetch();
            });

            // Vi må først sortere på navn ved å klikke på navneheaderen. fordi det er default
            // å sortere på id. Derfor må vi stokke om på elementene først, for så å sortere på id på nytt
            // klikk på navnHeader skal sortere på navn.
            mistenkteView.$('#navnHeader').click();
            // klikk på idHeader skal sortere på id
            mistenkteView.$('#idHeader').click();

            // sjekker at radene i tabellen kommer i riktig rekkefølge
            // den aller første TR elementet er headeren
            expect(mistenkteView.$('tr').get(1).innerHTML).to.contain('<td>1</td>');
            expect(mistenkteView.$('tr').get(2).innerHTML).to.contain('<td>2</td>');
            expect(mistenkteView.$('tr').get(3).innerHTML).to.contain('<td>3</td>');
        });

    });
});