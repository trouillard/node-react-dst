'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

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
			zones: [],
			affichage: { text: 'nom', value: 'id' }
		};

		_this.changeDate = _this.changeDate.bind(_this);
		_this.changeSaisieZones = _this.changeSaisieZones.bind(_this);
		_this.selectZone = _this.selectZone.bind(_this);
		return _this;
	}

	_createClass(DstSelectZoneDateHeure, [{
		key: 'changeDate',
		value: function changeDate(date) {
			this.setState({
				startDate: date
			});
		}
	}, {
		key: 'selectZone',
		value: function selectZone(saisie) {
			this.props.surChoixZone(saisie.id);
		}
	}, {
		key: 'changeSaisieZones',
		value: function changeSaisieZones(saisie) {
			var _this2 = this;

			(0, _nodeFetch2.default)("http://" + _config2.default.rest.url + "zones?nom=" + saisie, { method: 'GET' }).then(function (res) {
				return res.json();
			}).then(function (result) {
				var solutionZones = [];
				result.forEach(function (r) {
					solutionZones.push({ id: r.id.toString(), nom: r.nom });
				});
				_this2.setState({ zones: solutionZones });
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_AutoComplete2.default, {
					hintText: this.props.texte,
					dataSource: this.state.zones,
					onUpdateInput: this.changeSaisieZones,
					dataSourceConfig: this.state.affichage,
					onNewRequest: this.selectZone,
					filter: _AutoComplete2.default.caseInsensitiveFilter
				}),
				_react2.default.createElement(_DatePicker2.default, {
					hintText: 'Date',
					autoOk: true,
					DateTimeFormat: DateTimeFormat,
					locale: 'fr'
				}),
				_react2.default.createElement(_TimePicker2.default, {
					hintText: 'Horaire',
					minutesStep: 5,
					format: '24hr',
					autoOk: true
				})
			);
		}
	}]);

	return DstSelectZoneDateHeure;
}(_react2.default.Component);

exports.default = DstSelectZoneDateHeure;