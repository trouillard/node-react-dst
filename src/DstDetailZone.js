"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DstDetailZone = function (_React$Component) {
		_inherits(DstDetailZone, _React$Component);

		function DstDetailZone() {
				_classCallCheck(this, DstDetailZone);

				return _possibleConstructorReturn(this, (DstDetailZone.__proto__ || Object.getPrototypeOf(DstDetailZone)).apply(this, arguments));
		}

		_createClass(DstDetailZone, [{
				key: "render",
				value: function render() {

						var html = "";

						if (this.props.zone !== undefined && this.props.zone !== null) {

								html = _react2.default.createElement(
										"div",
										{ className: "fond-gris" },
										_react2.default.createElement(
												"table",
												null,
												_react2.default.createElement(
														"tbody",
														null,
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"ZONE : "
																),
																_react2.default.createElement("td", null)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- id : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.id
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- nom : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.nom
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- sens : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.sens
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- heures : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.heures
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- minutes : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.minutes
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"\xA0"
																),
																_react2.default.createElement(
																		"td",
																		null,
																		"\xA0"
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"DST :"
																),
																_react2.default.createElement("td", null)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- id : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.id
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- nom : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.nom
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- methode_on : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.methode_on
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- operateur_on : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.operateur_on
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- mois_on : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.mois_on
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- decile_on : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.decile_on
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- jour_on : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.jour_on
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- heures_on : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.heures_on
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- methode_off : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.methode_off
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- operateur_off : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.operateur_off
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- mois_off : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.mois_off
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- decile_off : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.decile_off
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- jour_off : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.jour_off
																)
														),
														_react2.default.createElement(
																"tr",
																null,
																_react2.default.createElement(
																		"td",
																		null,
																		"- heures_off : "
																),
																_react2.default.createElement(
																		"td",
																		null,
																		this.props.zone.dst.heures_off
																)
														)
												)
										)
								);
						}

						return _react2.default.createElement(
								"div",
								null,
								html
						);
				}
		}]);

		return DstDetailZone;
}(_react2.default.Component);

exports.default = DstDetailZone;