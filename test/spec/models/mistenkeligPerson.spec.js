/*global define, describe, beforeEach, expect, it*/
define([
    'models/mistenkeligPerson'
], function (MistenkeligPerson) {
    'use strict';

    describe('MistenkeligPerson-modell', function () {
        var mistenkeligPerson;

        beforeEach(function () {
            mistenkeligPerson = new MistenkeligPerson({
                id: '1',
                navn: 'Ken Are Astrup',
                telefon: '12345678',
                email: 'ken.astrup@gmail.com',
                mistenkelighetsgrad: 1
            });
        });

        it('skal returnere navn', function () {
            expect(mistenkeligPerson.navn()).to.equal('Ken Are Astrup');
        });

        it('skal returnere telefon', function () {
            expect(mistenkeligPerson.telefon()).to.equal('12345678');
        });

        it('skal returnere email', function () {
            expect(mistenkeligPerson.email()).to.equal('ken.astrup@gmail.com');
        });

        it('skal returnere mistenkelighetsgrad', function () {
            expect(mistenkeligPerson.mistenkelighetsgrad()).to.equal(1);
        });

        it('skal returnere sjekketUt', function () {
            expect(mistenkeligPerson.sjekketUt()).to.equal(false);
        });

        it('skal sjekke ut en person av SS registret ', function () {
            mistenkeligPerson.sjekkUt();
            expect(mistenkeligPerson.sjekketUt()).to.equal(true);

        });
    });
});