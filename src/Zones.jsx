
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

		// Il y a un DST � prendre en compte
		if(this.dst.id != 0) {

			var dateOn = this.dst.calculDate_on(date.getFullYear(), this.sens, this.gmt);
			var dateOff = this.dst.calculDate_off(date.getFullYear(), this.sens, this.gmt);

			// On est dans l'h�misph�re Nord
			if( dateOn > dateOff ) {

				// On est en p�riode avec DST appliqu�es, on ajoute 1 heure de DST
				if (date > dateOn || date < dateOff) {
					return date.setUTCMilliseconds(date.getUTCMilliseconds() + 3600000);
				}
				// On est hors p�riode de DST, la date ne change pas
				else {
					return date;
				}
			}
			// on est dans l'h�misph�re Sud
			else {

				// On est hors p�riode de DST, la date ne change pas
				if (date > dateOn || date < dateOff) {
					return date;
				}
				// On est en p�riode avec DST appliqu�es, on ajoute 1 heure de DST
				else {
					return date.setUTCMilliseconds(date.getUTCMilliseconds() + 3600000);
				}
			}
			return resultat;
		}
		// Pas de DST, la date ne change pas
		else {
				return date;
		};
	}

	dateExcluantDst(date) {

		// Il y a un DST � prendre en compte
		if(this.dst.id != 0) {

			var dateOn = this.dst.calculDate_on(date.getFullYear(), this.sens, this.gmt);
			var dateOff = this.dst.calculDate_off(date.getFullYear(), this.sens, this.gmt);

			// On est dans l'h�misph�re Nord
			if( dateOn > dateOff ) {

				// On est en p�riode avec DST appliqu�es, on enl�ve 1 heure de DST
				if (date > dateOn || date < dateOff) {
					return date.setUTCMilliseconds(date.getUTCMilliseconds() - 3600000);
				}
				// On est hors p�riode de DST, la date ne change pas
				else {
					return date;
				}
			}
			// on est dans l'h�misph�re Sud
			else {

				// On est hors p�riode de DST, la date ne change pas
				if (date > dateOn || date < dateOff) {
					return date;
				}
				// On est en p�riode avec DST appliqu�es, on enl�ve 1 heure de DST
				else {
					return date.setUTCMilliseconds(date.getUTCMilliseconds() - 3600000);
				}
			}
			return resultat;
		}
		// Pas de DST, la date ne change pas
		else {
				return date;
		};
	}

	dateDistanteZoneEtDateReferenceChoisies(zoneReference, dateReference) {

		var dateDistante = new Date(zoneReference.dateExcluantDst(dateReference));

		dateDistante.setUTCMilliseconds(dateReference.getUTCMilliseconds() +
			(this.sens * this.heures - zoneReference.sens * zoneReference.heures) * 3600000 +
			(this.sens * this.minutes - zoneReference.sens * zoneReference.minutes) * 60000
		);

		return this.dateIncluantDst(dateDistante);
	}

	dateReferenceZoneEtDateDistanteChoisies(zoneDistante, dateDistante) {

		var dateReference = new Date(zoneDistante.dateExcluantDst(dateDistante));

		dateReference.setUTCMilliseconds(dateDistante.getUTCMilliseconds() +
			(this.sens * this.heures - zoneDistante.sens * zoneDistante.heures) * 3600000 +
			(this.sens * this.minutes - zoneDistante.sens * zoneDistante.minutes) * 60000
		);

		return this.dateIncluantDst(dateReference);
	}
}