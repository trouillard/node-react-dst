'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _intlLocalesSupported = require('intl-locales-supported');

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeFormat = void 0;

if ((0, _intlLocalesSupported2.default)(['fr'])) {
	DateTimeFormat = global.Intl.DateTimeFormat;
} else {
	var IntlPolyfill = require('intl');
	DateTimeFormat = IntlPolyfill.DateTimeFormat;
	require('intl/locale-data/jsonp/fr');
}

var DstSelectZoneDateHeure = function (_React$Component) {
	_inherits(DstSelectZoneDateHeure, _React$Component);

	function DstSelectZoneDateHeure(props) {
		_classCallCheck(this, DstSelectZoneDateHeure);

		var _this = _possibleConstructorReturn(this, (DstSelectZoneDateHeure.__proto__ || Object.getPrototypeOf(DstSelectZoneDateHeure)).call(this, props));

		_this.state = {
			date: null,
			zones: [],
			affichage: { text: 'nom', value: 'id' }
		};

		_this.surChangementDate = _this.surChangementDate.bind(_this);
		_this.surChangementHoraire = _this.surChangementHoraire.bind(_this);
		_this.surChoixZone = _this.surChoixZone.bind(_this);
		_this.surChangementSaisieZone = _this.surChangementSaisieZone.bind(_this);
		return _this;
	}

	_createClass(DstSelectZoneDateHeure, [{
		key: 'surChangementDate',
		value: function surChangementDate(bidon, date) {
			this.props.surChangementDate(date);
		}
	}, {
		key: 'surChangementHoraire',
		value: function surChangementHoraire(bidon, date) {
			this.props.surChangementHoraire(date);
		}
	}, {
		key: 'surChoixZone',
		value: function surChoixZone(saisie) {
			this.props.surChoixZone(saisie.id);
		}
	}, {
		key: 'surChangementSaisieZone',
		value: function surChangementSaisieZone(saisie) {
			this.props.surChangementSaisieZone(saisie, this);
		}
	}, {
		key: 'render',
		value: function render() {

			var htmlDate = '';
			var htmlHoraire = '';

			if (this.props.date != null) {
				htmlDate = _react2.default.createElement(_DatePicker2.default, {
					hintText: 'Date',
					autoOk: true,
					value: this.props.date,
					onChange: this.surChangementDate,
					style: {
						margin: '0 auto',
						padding: '10px'
					}
				});
			}

			if (this.props.horaire != null) {
				htmlHoraire = _react2.default.createElement(_TimePicker2.default, {
					hintText: 'Horaire',
					minutesStep: 5,
					format: '24hr',
					autoOk: true,
					value: this.props.horaire,
					onChange: this.surChangementHoraire,
					style: {
						margin: '0 auto',
						padding: '10px'
					}
				});
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_AutoComplete2.default, {
					hintText: this.props.texte,
					dataSource: this.state.zones,
					onUpdateInput: this.surChangementSaisieZone,
					dataSourceConfig: this.state.affichage,
					onNewRequest: this.surChoixZone,
					filter: _AutoComplete2.default.caseInsensitiveFilter,
					style: {
						margin: '0 auto',
						padding: '10px',
						backgroundColor: '#E0E0E0'
					}
				}),
				htmlDate,
				htmlHoraire
			);
		}
	}]);

	return DstSelectZoneDateHeure;
}(_react2.default.Component);

exports.default = DstSelectZoneDateHeure;