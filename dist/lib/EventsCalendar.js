"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = require("lodash");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin: 0rem 0.2rem;\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  flex: ", ";\n\n  & > .weekDay {\n    color: gray;\n    font-size: 1.2rem;\n  }\n\n  & > .dateButton {\n    color: gray;\n    font-size: 1.5rem;\n    cursor: pointer;\n  }\n\n  & > .currentMonth {\n    font-size: 1.8rem;\n    font-weight: 700;\n    & > .year{\n      text-align: center;\n      font-size: 1.3rem;\n      font-weight: 700;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3rem;\n  position: relative;\n  bottom: 0.9rem;\n  padding: 0.8rem 0rem;\n  border: ", ";\n  background-color: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  margin: 0.8rem 0rem;\n  height: 3rem;\n  padding: 0.5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 2.5rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  margin: 2rem 1rem;\n  border-radius: 0.5rem;\n  padding: 2rem 1rem;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-width: 35rem;\n  min-height: 35rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventsCalendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventsCalendar, _React$Component);

  function EventsCalendar(props) {
    var _this;

    _classCallCheck(this, EventsCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventsCalendar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentMonth", function (date) {
      return (0, _moment.default)(date).format('MMMM');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentYear", function (date) {
      return (0, _moment.default)(date).format('YYYY');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPreviusMonth", function (date) {
      return (0, _moment.default)(date).subtract(1, 'month').startOf('month').format('MMMM');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getNextMonth", function (date) {
      return (0, _moment.default)(date).add(1, 'month').startOf('month').format('MMMM');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDaysOfTheMonth", function (date) {
      var monthData = {};
      var daysCount = (0, _moment.default)(date).daysInMonth();
      var day = 1;
      var currentDate = (0, _moment.default)(date).startOf('month');
      var firstWeek = (0, _moment.default)(currentDate).isoWeek();

      while (day <= daysCount) {
        var weekDayName = (0, _moment.default)(currentDate).format('dddd');

        if (!monthData[weekDayName]) {
          monthData[weekDayName] = [];
        }

        if (!monthData[weekDayName].length && (0, _moment.default)(currentDate).isoWeek() > firstWeek) {
          monthData[weekDayName].push(' ');
        }

        monthData[weekDayName].push(day);
        day += 1;
        currentDate = (0, _moment.default)(currentDate).add(1, 'day');
      }

      var maxLength = monthData.Monday.length;
      (0, _lodash.forEach)(Object.keys(monthData), function (dayName) {
        maxLength = maxLength < monthData[dayName].length ? monthData[dayName].length : maxLength;

        if (monthData[dayName].length < maxLength) {
          monthData[dayName].push(' ');
        }
      });
      return monthData;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDayMarker", function (day) {
      var _this$props = _this.props,
          events = _this$props.events,
          color = _this$props.color,
          primaryColor = _this$props.primaryColor;
      var selectedDate = _this.state.selectedDate;
      var eventsDate = events.map(function (e) {
        return {
          uuid: e.uuid,
          date: (0, _moment.default)(e.date)
        };
      }); // Event Date

      var auxEvents = eventsDate.filter(function (e) {
        return e.date.format('MM-YYYY') === (0, _moment.default)(selectedDate).format('MM-YYYY');
      });
      var eventsDateDays = auxEvents.map(function (e) {
        return parseInt((0, _moment.default)(e.date).format('DD'), 10);
      });

      if ((0, _lodash.includes)(eventsDateDays, day)) {
        return _react.default.createElement(DayContainer, null, _react.default.createElement(DayMarker, {
          primaryColor: primaryColor,
          color: color,
          filled: true
        }, day));
      } // Current Date


      if ((0, _moment.default)(new Date()).format('MM-YYYY') === (0, _moment.default)(selectedDate).format('MM-YYYY') && parseInt((0, _moment.default)(new Date()).format('DD'), 10) === day) {
        return _react.default.createElement(DayContainer, null, _react.default.createElement(DayMarker, {
          primaryColor: primaryColor,
          outlined: true
        }, day));
      }

      return _react.default.createElement(DayContainer, null, day);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMonths", function (date) {
      var daysData = _this.getDaysOfTheMonth(date);

      return _react.default.createElement(MonthsContainer, null, _react.default.createElement(FlexContainer, {
        flexDirection: "row"
      }, _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, "Mon"), daysData.Monday.map(function (day) {
        return _this.renderDayMarker(day);
      })), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, "Tue"), daysData.Tuesday.map(function (day) {
        return _this.renderDayMarker(day);
      })), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, "Wed"), daysData.Wednesday.map(function (day) {
        return _this.renderDayMarker(day);
      })), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, " Thu"), daysData.Thursday.map(function (day) {
        return _this.renderDayMarker(day);
      })), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, "Fri"), daysData.Friday.map(function (day) {
        return _this.renderDayMarker(day);
      })), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, "Sat"), daysData.Saturday.map(function (day) {
        return _this.renderDayMarker(day);
      })), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("span", {
        className: "weekDay"
      }, "Sun"), daysData.Sunday.map(function (day) {
        return _this.renderDayMarker(day);
      }))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNextMonthPressed", function () {
      var selectedDate = _this.state.selectedDate;

      _this.setState({
        selectedDate: new Date((0, _moment.default)(selectedDate).add(1, 'month').startOf('month').toDate())
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPreviousMonthPressed", function () {
      var selectedDate = _this.state.selectedDate;

      _this.setState({
        selectedDate: (0, _moment.default)(selectedDate).subtract(1, 'month').startOf('month').toDate()
      });
    });

    _this.state = {
      selectedDate: new Date()
    };
    return _this;
  }

  _createClass(EventsCalendar, [{
    key: "render",
    value: function render() {
      var style = this.props.style;
      var selectedDate = this.state.selectedDate;
      return _react.default.createElement(Wrapper, {
        style: style
      }, _react.default.createElement(CalendarContainer, null, _react.default.createElement(FlexContainer, {
        flexDirection: "row"
      }, _react.default.createElement(FlexContainer, {
        onClick: this.onPreviousMonthPressed,
        flex: "1"
      }, _react.default.createElement("div", {
        className: "dateButton"
      }, this.getPreviusMonth(selectedDate))), _react.default.createElement(FlexContainer, {
        flex: "1"
      }, _react.default.createElement("div", {
        className: "currentMonth"
      }, this.getCurrentMonth(selectedDate), _react.default.createElement("div", {
        className: "year"
      }, this.getCurrentYear(selectedDate)))), _react.default.createElement(FlexContainer, {
        onClick: this.onNextMonthPressed,
        flex: "1"
      }, _react.default.createElement("div", {
        className: "dateButton"
      }, this.getNextMonth(selectedDate)))), this.renderMonths(selectedDate)));
    }
  }]);

  return EventsCalendar;
}(_react.default.Component);

var Wrapper = _styledComponents.default.div(_templateObject());

var CalendarContainer = _styledComponents.default.div(_templateObject2());

var MonthsContainer = _styledComponents.default.div(_templateObject3());

var DayContainer = _styledComponents.default.div(_templateObject4());

var DayMarker = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.outlined && "1px solid ".concat(props.primaryColor || '#616FC6');
}, function (props) {
  return props.filled && (props.primaryColor || '#616FC6');
}, function (props) {
  return props.filled && props.color;
});

var FlexContainer = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.flexDirection || 'column';
}, function (props) {
  return props.justifyContent || 'center';
}, function (props) {
  return props.alignItems || 'center';
}, function (props) {
  return props.flex;
});

EventsCalendar.propTypes = {
  style: _propTypes.default.object,
  events: _propTypes.default.arrayOf(_propTypes.default.shape({
    uuid: _propTypes.default.string,
    date: _propTypes.default.string
  })),
  color: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
EventsCalendar.defaultProps = {
  style: {},
  events: [],
  color: '',
  primaryColor: ''
};
var _default = EventsCalendar;
exports.default = _default;