
import fetch from 'node-fetch';
import DST from './DST';


export default class Zones {

	constructor(id, nom, sens, heures, minutes, dst) {
		this.id =		id;
		this.nom = 		nom;
		this.sens =		parseInt(sens);
		this.heures =	parseInt(heures);
		this.minutes =	parseInt(minutes);
		this.dst =		dst;
	}

	dateIncluantDst(date) {

		var resultat = new Date(date);

		// Il y a un DST à prendre en compte
		if(this.dst.id != 0) {

			var dateOn = this.dst.calculDate_on(date.getFullYear(), this.sens, this.heures);
			var dateOff = this.dst.calculDate_off(date.getFullYear(), this.sens, this.heures);

			// On est dans l'hémisphère Nord
			if( dateOff > dateOn ) {

				// On est en période avec DST appliquées, on ajoute 1 heure de DST
				if (date.valueOf() > dateOn && date.valueOf() < dateOff) {
					return resultat.setUTCMilliseconds(date.getUTCMilliseconds() + 3600000);
				}
				// On est hors période de DST, la date ne change pas
				else {
					return resultat;
				}
			}
			// on est dans l'hémisphère Sud
			// dateOff < dateOn
			else {

				// On est hors période de DST, la date ne change pas
				if (date.valueOf() > dateOn || date.valueOf() < dateOff) {
					return resultat.setUTCMilliseconds(date.getUTCMilliseconds() + 3600000);
				}
				// On est en période avec DST appliquées, on ajoute 1 heure de DST
				else {
					return resultat;
				}
			}
			//return resultat;
		}
		// Pas de DST, la date ne change pas
		else {
				return resultat;
		};
	}

	dateExcluantDst(date) {

		var resultat = new Date(date);

		// Il y a un DST à prendre en compte
		if(this.dst.id != 0) {

			var dateOn = this.dst.calculDate_on(date.getFullYear(), this.sens, this.heures);
			var dateOff = this.dst.calculDate_off(date.getFullYear(), this.sens, this.heures);

			// On est dans l'hémisphère Nord
			if( dateOff > dateOn ) {

				// On est en période avec DST appliquées, on enlève 1 heure de DST
				if (date.valueOf() > dateOn && date.valueOf() < dateOff) {
					return resultat.setUTCMilliseconds(date.getUTCMilliseconds() - 3600000);
				}
				// On est hors période de DST, la date ne change pas
				else {
					return resultat;
				}
			}
			// on est dans l'hémisphère Sud
			// dateOn < dateOff
			else {

				// On est hors période de DST, la date ne change pas
				if (date.valueOf() > dateOn || date.valueOf() < dateOff) {
					return resultat.setUTCMilliseconds(date.getUTCMilliseconds() - 3600000);
				}
				// On est en période avec DST appliquées, on enlève 1 heure de DST
				else {
					return resultat;
				}
			}
			//return resultat;
		}
		// Pas de DST, la date ne change pas
		else {
				return resultat;
		};
	}

	dateDistanteZoneEtDateReferenceChoisies(zoneReference, dateReference) {


		var dateDistante = new Date(zoneReference.dateExcluantDst(dateReference));


		dateDistante.setUTCMilliseconds(dateReference.getUTCMilliseconds() +
			(this.sens * this.heures - zoneReference.sens * zoneReference.heures) * 3600000 +
			(this.sens * this.minutes - zoneReference.sens * zoneReference.minutes) * 60000
		);

		var dateFinale = new Date(this.dateIncluantDst(dateDistante));

		return dateFinale;


	}

	dateReferenceZoneEtDateDistanteChoisies(zoneDistante, dateDistante) {

		var dateReference = new Date(zoneDistante.dateExcluantDst(dateDistante));

		dateReference.setUTCMilliseconds(dateDistante.getUTCMilliseconds() +
			(this.sens * this.heures - zoneDistante.sens * zoneDistante.heures) * 3600000 +
			(this.sens * this.minutes - zoneDistante.sens * zoneDistante.minutes) * 60000
		);

		var dateFinale = new Date(this.dateIncluantDst(dateDistante));

		return dateFinale;
	}
}