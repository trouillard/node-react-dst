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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./bundle.css');

var DstSynthese = function (_React$Component) {
	_inherits(DstSynthese, _React$Component);

	function DstSynthese(props) {
		_classCallCheck(this, DstSynthese);

		var _this = _possibleConstructorReturn(this, (DstSynthese.__proto__ || Object.getPrototypeOf(DstSynthese)).call(this, props));

		_this.state = {
			dateReference: (0, _moment2.default)(),
			zoneReference: null,
			zoneDistance: null
		};

		_this.surChoixZoneReference = _this.surChoixZoneReference.bind(_this);
		_this.surChoixZoneDistante = _this.surChoixZoneDistante.bind(_this);
		return _this;
	}

	_createClass(DstSynthese, [{
		key: 'surChoixZoneReference',
		value: function surChoixZoneReference(value) {
			var _this2 = this;

			fetch("http://" + _config2.default.rest.url + "zones/" + value.toString(), { method: 'GET' }).then(function (res) {
				return res.json();
			}).then(function (resultat) {
				_this2.setState({ zoneReference: resultat[0] });
			});
		}
	}, {
		key: 'surChoixZoneDistante',
		value: function surChoixZoneDistante(value) {
			var _this3 = this;

			fetch("http://" + _config2.default.rest.url + "zones/" + value.toString(), { method: 'GET' }).then(function (res) {
				return res.json();
			}).then(function (resultat) {
				_this3.setState({ zoneDistance: resultat[0] });
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'table',
					{ className: 'element-centre' },
					_react2.default.createElement(
						'tbody',
						null,
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(_DstSelectZoneDateHeure2.default, { date: this.state.dateReference, texte: 'zone de r\xE9f\xE9rence', surChoixZone: this.surChoixZoneReference })
							),
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(_DstSelectZoneDateHeure2.default, { date: this.state.dateReference, texte: 'zone distante', surChoixZone: this.surChoixZoneDistante })
							)
						),
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(_DstDetailZone2.default, { zone: this.state.zoneReference })
							),
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(_DstDetailZone2.default, { zone: this.state.zoneDistance })
							)
						)
					)
				)
			);
		}
	}]);

	return DstSynthese;
}(_react2.default.Component);

exports.default = DstSynthese;