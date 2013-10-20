/*global define, describe, beforeEach, it, expect*/
define([
    'collections/mistenkeligePersoner',
    'models/mistenkeligPerson'
], function (MistenkeligePersoner, MistenkeligPerson) {
    'use strict';

    describe('MistenkeligePersoner-collection', function () {
        var mistenkeligePersoner;

        beforeEach(function () {
            mistenkeligePersoner = new MistenkeligePersoner();
            mistenkeligePersoner.add(new MistenkeligPerson({
                id: '3',
                navn : 'Tom Woods',
                telefon : '12345678',
                email : 'tom.wood@skatteetaten.no',
                mistenkelighetsgrad : 1
            }));
            mistenkeligePersoner.add(new MistenkeligPerson({
                id: '1',
                navn : 'Ken Are Astrup',
                telefon : '23456789',
                email : 'ken.astrup@skatteetaten.no',
                mistenkelighetsgrad : 5
            }));
            mistenkeligePersoner.add(new MistenkeligPerson({
                id: '2',
                navn: 'Erik Mong',
                telefon: '34567890',
                email: 'erik.mong@skatteetaten.no',
                mistenkelighetsgrad: 3,
            }));

        });

        it('skal instansiere seg riktig', function () {
            expect(mistenkeligePersoner.size()).to.equal(3);
        });

        it('skal sortere riktig på id', function () {
            mistenkeligePersoner.sorterPaaId();
            expect(mistenkeligePersoner.shift().id).to.equal('1');
            expect(mistenkeligePersoner.shift().id).to.equal('2');
            expect(mistenkeligePersoner.shift().id).to.equal('3');
        });

        it('skal sortere riktig på navn', function () {
            mistenkeligePersoner.sorterPaaNavn();
            expect(mistenkeligePersoner.shift().navn()).to.equal('Erik Mong');
            expect(mistenkeligePersoner.shift().navn()).to.equal('Ken Are Astrup');
            expect(mistenkeligePersoner.shift().navn()).to.equal('Tom Woods');
        });
    });
});