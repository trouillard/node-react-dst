'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DstSelectZoneDateHeure = require('./DstSelectZoneDateHeure');

var _DstSelectZoneDateHeure2 = _interopRequireDefault(_DstSelectZoneDateHeure);

var _DstDetailZone = require('./DstDetailZone');

var _DstDetailZone2 = _interopRequireDefault(_DstDetailZone);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _DST = require('./DST');

var _DST2 = _interopRequireDefault(_DST);

var _Zones = require('./Zones');

var _Zones2 = _interopRequireDefault(_Zones);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DstSynthese = function (_React$Component) {
	_inherits(DstSynthese, _React$Component);

	function DstSynthese(props) {
		_classCallCheck(this, DstSynthese);

		var _this = _possibleConstructorReturn(this, (DstSynthese.__proto__ || Object.getPrototypeOf(DstSynthese)).call(this, props));

		_this.state = {
			zones: _data2.default.zones,
			dsts: _data2.default.dsts,
			dateReference: null,
			dateDistante: null,
			zoneReference: null,
			zoneDistante: null
		};

		_this.surChangement = _this.surChangement.bind(_this);
		_this.surChangementDateReference = _this.surChangementDateReference.bind(_this);
		_this.surChangementDateDistante = _this.surChangementDateDistante.bind(_this);
		_this.surChangementHoraireReference = _this.surChangementHoraireReference.bind(_this);
		_this.surChangementHoraireDistante = _this.surChangementHoraireDistante.bind(_this);
		_this.surChoixZoneReference = _this.surChoixZoneReference.bind(_this);
		_this.surChoixZoneDistante = _this.surChoixZoneDistante.bind(_this);
		_this.surChangementSaisieZone = _this.surChangementSaisieZone.bind(_this);

		return _this;
	}

	_createClass(DstSynthese, [{
		key: 'surChangement',
		value: function surChangement(priorite) {

			if (this.state.zoneReference != null && this.state.zoneDistante == null && this.state.zoneReference != null && this.state.zoneDistante == null) {
				var now = new Date();
				var nowArrondi = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), 0, 0);
				this.setState({ dateReference: nowArrondi });
			};

			if (this.state.zoneReference != null && this.state.zoneDistante != null) {

				if (this.state.dateDistante == null) {
					var dateDistanteNew = this.state.zoneDistante.dateDistanteZoneEtDateReferenceChoisies(this.state.zoneReference, this.state.dateReference);
					this.setState({ dateDistante: dateDistanteNew });
				} else {
					if (this.state.dateReference == null) {
						var dateReferenceNew = this.state.zoneReference.dateReferenceZoneEtDateDistanteChoisies(this.state.zoneDistante, this.state.dateDistante);
						this.setState({ dateReference: dateReferenceNew });
					} else {
						if (priorite == "Distant") {
							var dateReferenceNew = this.state.zoneReference.dateReferenceZoneEtDateDistanteChoisies(this.state.zoneDistante, this.state.dateDistante);
							this.setState({ dateReference: dateReferenceNew });
						} else {
							var dateDistanteNew = this.state.zoneDistante.dateDistanteZoneEtDateReferenceChoisies(this.state.zoneReference, this.state.dateReference);
							this.setState({ dateDistante: dateDistanteNew });
						}
					}
				}
			}
		}
	}, {
		key: 'surChangementDateReference',
		value: function surChangementDateReference(date) {
			this.setState({ dateReference: date });
			this.surChangement("Reference");
		}
	}, {
		key: 'surChangementDateDistante',
		value: function surChangementDateDistante(date) {
			this.setState({ dateDistante: date });
			this.surChangement("Distant");
		}
	}, {
		key: 'surChangementHoraireReference',
		value: function surChangementHoraireReference(date) {
			this.setState({ dateReference: date });
			this.surChangement("Reference");
		}
	}, {
		key: 'surChangementHoraireDistante',
		value: function surChangementHoraireDistante(date) {
			this.setState({ dateDistante: date });
			this.surChangement("Distant");
		}
	}, {
		key: 'surChangementSaisieZone',
		value: function surChangementSaisieZone(saisie, composant) {

			if (this.state.zones.length == 0) {

				fetch("http://" + _config2.default.rest.url + "zones?nom=" + saisie, { method: 'GET' }).then(function (res) {
					return res.json();
				}).then(function (result) {
					var solutionZones = [];
					result.forEach(function (r) {
						solutionZones.push({ id: r.id.toString(), nom: r.nom });
					});
					composant.setState({ zones: solutionZones });
				});
			} else {
				composant.setState({ zones: this.state.zones });
			}
		}
	}, {
		key: 'surChoixZoneReference',
		value: function surChoixZoneReference(value) {
			var _this2 = this;

			var zoneRef = null;
			var dstRef = null;

			// APPEL REST - PAS DE DONNEES LOCALES (data.jsx)
			if (this.state.zones.length == 0) {
				fetch("http://" + _config2.default.rest.url + "zones/" + value.toString(), { method: 'GET' }).then(function (res) {
					return res.json();
				}).then(function (resultatZoneRef) {

					if (resultatZoneRef[0].dst == 0) {
						dstRef = new _DST2.default(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
						zoneRef = new _Zones2.default(resultatZoneRef[0].id, resultatZoneRef[0].nom, resultatZoneRef[0].sens, resultatZoneRef[0].heures, resultatZoneRef[0].minutes, dstRef);
						_this2.setState({ zoneReference: zoneRef });
						_this2.surChangement("Reference");
					} else {

						fetch("http://" + _config2.default.rest.url + "dst/" + resultatZoneRef[0].dst.toString(), { method: 'GET' }).then(function (res) {
							return res.json();
						}).then(function (resultatDstRef) {
							dstRef = new _DST2.default(resultatZoneRef[0].dst, resultatDstRef[0].nom, resultatDstRef[0].methode_on, resultatDstRef[0].operateur_on, resultatDstRef[0].mois_on, resultatDstRef[0].decile_on, resultatDstRef[0].jour_on, resultatDstRef[0].heures_on, resultatDstRef[0].methode_off, resultatDstRef[0].operateur_off, resultatDstRef[0].mois_off, resultatDstRef[0].decile_off, resultatDstRef[0].jour_off, resultatDstRef[0].heures_off);
							zoneRef = new _Zones2.default(resultatZoneRef[0].id, resultatZoneRef[0].nom, resultatZoneRef[0].sens, resultatZoneRef[0].heures, resultatZoneRef[0].minutes, dstRef);
							_this2.setState({ zoneReference: zoneRef });
							_this2.surChangement("Reference");
						});
					}
				});
			}
			// PAS D'APPEL REST - DONNEES LOCALES (data.jsx)
			else {

					zoneRef = new _Zones2.default(this.state.zones[value - 1].id, this.state.zones[value - 1].nom, this.state.zones[value - 1].sens, this.state.zones[value - 1].heures, this.state.zones[value - 1].minutes, this.state.zones[value - 1].dst);
					if (zoneRef.dst == 0) {
						dstRef = new _DST2.default(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
					} else {
						dstRef = new _DST2.default(this.state.dsts[zoneRef.dst - 1].id, this.state.dsts[zoneRef.dst - 1].nom, this.state.dsts[zoneRef.dst - 1].methode_on, this.state.dsts[zoneRef.dst - 1].operateur_on, this.state.dsts[zoneRef.dst - 1].mois_on, this.state.dsts[zoneRef.dst - 1].decile_on, this.state.dsts[zoneRef.dst - 1].jour_on, this.state.dsts[zoneRef.dst - 1].heures_on, this.state.dsts[zoneRef.dst - 1].methode_off, this.state.dsts[zoneRef.dst - 1].operateur_off, this.state.dsts[zoneRef.dst - 1].mois_off, this.state.dsts[zoneRef.dst - 1].decile_off, this.state.dsts[zoneRef.dst - 1].jour_off);
					}
					zoneRef.dst = dstRef;
					this.setState({ zoneReference: zoneRef });
					this.surChangement("Reference");
				}
		}
	}, {
		key: 'surChoixZoneDistante',
		value: function surChoixZoneDistante(value) {
			var _this3 = this;

			var zoneDis = null;
			var dstDis = null;

			// APPEL REST - PAS DE DONNEES LOCALES (data.jsx)
			if (this.state.zones.length == 0) {

				fetch("http://" + _config2.default.rest.url + "zones/" + value.toString(), { method: 'GET' }).then(function (res) {
					return res.json();
				}).then(function (resultatZoneDis) {

					if (resultatZoneDis[0].dst == 0) {
						dstDis = new _DST2.default(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
						zoneDis = new _Zones2.default(resultatZoneDis[0].id, resultatZoneDis[0].nom, resultatZoneDis[0].sens, resultatZoneDis[0].heures, resultatZoneDis[0].minutes, dstDis);
						_this3.setState({ zoneDistante: zoneDis });
						_this3.surChangement("Reference");
					} else {

						fetch("http://" + _config2.default.rest.url + "dst/" + resultatZoneDis[0].dst.toString(), { method: 'GET' }).then(function (res) {
							return res.json();
						}).then(function (resultatDstDis) {

							dstDis = new _DST2.default(resultatZoneDis[0].dst, resultatDstDis[0].nom, resultatDstDis[0].methode_on, resultatDstDis[0].operateur_on, resultatDstDis[0].mois_on, resultatDstDis[0].decile_on, resultatDstDis[0].jour_on, resultatDstDis[0].heures_on, resultatDstDis[0].methode_off, resultatDstDis[0].operateur_off, resultatDstDis[0].mois_off, resultatDstDis[0].decile_off, resultatDstDis[0].jour_off, resultatDstDis[0].heures_off);
							zoneDis = new _Zones2.default(resultatZoneDis[0].id, resultatZoneDis[0].nom, resultatZoneDis[0].sens, resultatZoneDis[0].heures, resultatZoneDis[0].minutes, dstDis);
							_this3.setState({ zoneDistante: zoneDis });
							_this3.surChangement("Reference");
						});
					}
				});
			}
			// PAS D'APPEL REST - DONNEES LOCALES (data.jsx)
			else {

					zoneDis = new _Zones2.default(this.state.zones[value - 1].id, this.state.zones[value - 1].nom, this.state.zones[value - 1].sens, this.state.zones[value - 1].heures, this.state.zones[value - 1].minutes, this.state.zones[value - 1].dst);

					if (zoneDis.dst == 0) {
						dstDis = new _DST2.default(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
					} else {
						dstDis = new _DST2.default(this.state.dsts[zoneDis.dst - 1].id, this.state.dsts[zoneDis.dst - 1].nom, this.state.dsts[zoneDis.dst - 1].methode_on, this.state.dsts[zoneDis.dst - 1].operateur_on, this.state.dsts[zoneDis.dst - 1].mois_on, this.state.dsts[zoneDis.dst - 1].decile_on, this.state.dsts[zoneDis.dst - 1].jour_on, this.state.dsts[zoneDis.dst - 1].heures_on, this.state.dsts[zoneDis.dst - 1].methode_off, this.state.dsts[zoneDis.dst - 1].operateur_off, this.state.dsts[zoneDis.dst - 1].mois_off, this.state.dsts[zoneDis.dst - 1].decile_off, this.state.dsts[zoneDis.dst - 1].jour_off);
					};

					zoneDis.dst = dstDis;
					this.setState({ zoneDistante: zoneDis });
					this.surChangement("Reference");
				}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'element-centre' },
					_react2.default.createElement(
						'div',
						{ className: 'titre' },
						_react2.default.createElement(
							'center',
							null,
							_react2.default.createElement(
								'strong',
								null,
								'DST CALCULATOR'
							)
						)
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'center',
						null,
						_react2.default.createElement(_DstSelectZoneDateHeure2.default, {
							date: this.state.dateReference,
							horaire: this.state.dateReference,
							texte: 'The country where you are ?',
							surChangementSaisieZone: this.surChangementSaisieZone,
							surChoixZone: this.surChoixZoneReference,
							surChangementDate: this.surChangementDateReference,
							surChangementHoraire: this.surChangementHoraireReference
						}),
						_react2.default.createElement('br', null),
						_react2.default.createElement(_DstSelectZoneDateHeure2.default, {
							date: this.state.dateDistante,
							horaire: this.state.dateDistante,
							texte: 'The country where you go ?',
							surChangementSaisieZone: this.surChangementSaisieZone,
							surChoixZone: this.surChoixZoneDistante,
							surChangementDate: this.surChangementDateDistante,
							surChangementHoraire: this.surChangementHoraireDistante
						})
					)
				)
			);
		}
	}]);

	return DstSynthese;
}(_react2.default.Component);

exports.default = DstSynthese;