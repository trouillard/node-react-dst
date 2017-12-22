'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _DST = require('./DST');

var _DST2 = _interopRequireDefault(_DST);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zones = function () {
	function Zones(id, nom, sens, heures, minutes, dst) {
		_classCallCheck(this, Zones);

		this.id = id;
		this.nom = nom;
		this.sens = parseInt(sens);
		this.heures = parseInt(heures);
		this.minutes = parseInt(minutes);
		this.dst = dst;
	}

	_createClass(Zones, [{
		key: 'dateIncluantDst',
		value: function dateIncluantDst(date) {

			// Il y a un DST � prendre en compte
			if (this.dst.id != 0) {

				var dateOn = this.dst.calculDate_on(date.getFullYear(), this.sens, this.gmt);
				var dateOff = this.dst.calculDate_off(date.getFullYear(), this.sens, this.gmt);

				// On est dans l'h�misph�re Nord
				if (dateOn > dateOff) {

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
	}, {
		key: 'dateExcluantDst',
		value: function dateExcluantDst(date) {

			// Il y a un DST � prendre en compte
			if (this.dst.id != 0) {

				var dateOn = this.dst.calculDate_on(date.getFullYear(), this.sens, this.gmt);
				var dateOff = this.dst.calculDate_off(date.getFullYear(), this.sens, this.gmt);

				// On est dans l'h�misph�re Nord
				if (dateOn > dateOff) {

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
	}, {
		key: 'dateDistanteZoneEtDateReferenceChoisies',
		value: function dateDistanteZoneEtDateReferenceChoisies(zoneReference, dateReference) {

			var dateDistante = new Date(zoneReference.dateExcluantDst(dateReference));

			dateDistante.setUTCMilliseconds(dateReference.getUTCMilliseconds() + (this.sens * this.heures - zoneReference.sens * zoneReference.heures) * 3600000 + (this.sens * this.minutes - zoneReference.sens * zoneReference.minutes) * 60000);

			return this.dateIncluantDst(dateDistante);
		}
	}, {
		key: 'dateReferenceZoneEtDateDistanteChoisies',
		value: function dateReferenceZoneEtDateDistanteChoisies(zoneDistante, dateDistante) {

			var dateReference = new Date(zoneDistante.dateExcluantDst(dateDistante));

			dateReference.setUTCMilliseconds(dateDistante.getUTCMilliseconds() + (this.sens * this.heures - zoneDistante.sens * zoneDistante.heures) * 3600000 + (this.sens * this.minutes - zoneDistante.sens * zoneDistante.minutes) * 60000);

			return this.dateIncluantDst(dateReference);
		}
	}]);

	return Zones;
}();

exports.default = Zones;