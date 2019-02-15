'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-width: 35rem;\n  min-height: 35rem;\n'], ['\n  min-width: 35rem;\n  min-height: 35rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: white;\n  margin: 2rem 1rem;\n  border-radius: 0.5rem;\n  padding: 2rem 1rem;\n  height: 100%;\n'], ['\n  background-color: white;\n  margin: 2rem 1rem;\n  border-radius: 0.5rem;\n  padding: 2rem 1rem;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: 2.5rem;\n'], ['\n  margin-top: 2.5rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  text-align: center;\n  margin: 0.8rem 0rem;\n  height: 3rem;\n  padding: 0.5rem;\n'], ['\n  width: 100%;\n  text-align: center;\n  margin: 0.8rem 0rem;\n  height: 3rem;\n  padding: 0.5rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3rem;\n  position: relative;\n  bottom: 0.9rem;\n  padding: 0.8rem 0rem;\n  border: ', ';\n  background-color: ', ';\n  color: ', ';\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3rem;\n  position: relative;\n  bottom: 0.9rem;\n  padding: 0.8rem 0rem;\n  border: ', ';\n  background-color: ', ';\n  color: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  margin: 0rem 0.2rem;\n  flex-direction: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n  flex: ', ';\n\n  & > .weekDay {\n    color: gray;\n    font-size: 1.2rem;\n  }\n\n  & > .dateButton {\n    color: gray;\n    font-size: 1.5rem;\n    cursor: pointer;\n  }\n\n  & > .currentMonth {\n    font-size: 1.8rem;\n    font-weight: 700;\n    & > .year{\n      text-align: center;\n      font-size: 1.3rem;\n      font-weight: 700;\n    }\n  }\n'], ['\n  width: 100%;\n  display: flex;\n  margin: 0rem 0.2rem;\n  flex-direction: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n  flex: ', ';\n\n  & > .weekDay {\n    color: gray;\n    font-size: 1.2rem;\n  }\n\n  & > .dateButton {\n    color: gray;\n    font-size: 1.5rem;\n    cursor: pointer;\n  }\n\n  & > .currentMonth {\n    font-size: 1.8rem;\n    font-weight: 700;\n    & > .year{\n      text-align: center;\n      font-size: 1.3rem;\n      font-weight: 700;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventsCalendar = function (_React$Component) {
  _inherits(EventsCalendar, _React$Component);

  function EventsCalendar(props) {
    _classCallCheck(this, EventsCalendar);

    var _this = _possibleConstructorReturn(this, (EventsCalendar.__proto__ || Object.getPrototypeOf(EventsCalendar)).call(this, props));

    _this.getCurrentMonth = function (date) {
      return (0, _moment2.default)(date).format('MMMM');
    };

    _this.getCurrentYear = function (date) {
      return (0, _moment2.default)(date).format('YYYY');
    };

    _this.getPreviusMonth = function (date) {
      return (0, _moment2.default)(date).subtract(1, 'month').startOf('month').format('MMMM');
    };

    _this.getNextMonth = function (date) {
      return (0, _moment2.default)(date).add(1, 'month').startOf('month').format('MMMM');
    };

    _this.getDaysOfTheMonth = function (date) {
      var monthData = {};
      var daysCount = (0, _moment2.default)(date).daysInMonth();
      var day = 1;
      var currentDate = (0, _moment2.default)(date).startOf('month');
      var firstWeek = (0, _moment2.default)(currentDate).isoWeek();
      while (day <= daysCount) {
        var weekDayName = (0, _moment2.default)(currentDate).format('dddd');
        if (!monthData[weekDayName]) {
          monthData[weekDayName] = [];
        }
        if (!monthData[weekDayName].length && (0, _moment2.default)(currentDate).isoWeek() > firstWeek) {
          monthData[weekDayName].push(' ');
        }
        monthData[weekDayName].push(day);
        day += 1;
        currentDate = (0, _moment2.default)(currentDate).add(1, 'day');
      }
      var maxLength = monthData.Monday.length;
      (0, _lodash.forEach)(Object.keys(monthData), function (dayName) {
        maxLength = maxLength < monthData[dayName].length ? monthData[dayName].length : maxLength;
        if (monthData[dayName].length < maxLength) {
          monthData[dayName].push(' ');
        }
      });
      return monthData;
    };

    _this.renderDayMarker = function (day) {
      var _this$props = _this.props,
          events = _this$props.events,
          color = _this$props.color,
          primaryColor = _this$props.primaryColor;
      var selectedDate = _this.state.selectedDate;

      var eventsDate = events.map(function (e) {
        return { uuid: e.uuid, date: (0, _moment2.default)(e.date) };
      });

      // Event Date
      var auxEvents = eventsDate.filter(function (e) {
        return e.date.format('MM-YYYY') === (0, _moment2.default)(selectedDate).format('MM-YYYY');
      });
      var eventsDateDays = auxEvents.map(function (e) {
        return parseInt((0, _moment2.default)(e.date).format('DD'), 10);
      });
      if ((0, _lodash.includes)(eventsDateDays, day)) {
        return _react2.default.createElement(
          DayContainer,
          null,
          _react2.default.createElement(
            DayMarker,
            { primaryColor: primaryColor, color: color, filled: true },
            day
          )
        );
      }

      // Current Date
      if ((0, _moment2.default)(new Date()).format('MM-YYYY') === (0, _moment2.default)(selectedDate).format('MM-YYYY') && parseInt((0, _moment2.default)(new Date()).format('DD'), 10) === day) {
        return _react2.default.createElement(
          DayContainer,
          null,
          _react2.default.createElement(
            DayMarker,
            { primaryColor: primaryColor, outlined: true },
            day
          )
        );
      }
      return _react2.default.createElement(
        DayContainer,
        null,
        day
      );
    };

    _this.renderMonths = function (date) {
      var daysData = _this.getDaysOfTheMonth(date);
      return _react2.default.createElement(
        MonthsContainer,
        null,
        _react2.default.createElement(
          FlexContainer,
          { flexDirection: 'row' },
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              'Mon'
            ),
            daysData.Monday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          ),
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              'Tue'
            ),
            daysData.Tuesday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          ),
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              'Wed'
            ),
            daysData.Wednesday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          ),
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              ' Thu'
            ),
            daysData.Thursday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          ),
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              'Fri'
            ),
            daysData.Friday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          ),
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              'Sat'
            ),
            daysData.Saturday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          ),
          _react2.default.createElement(
            FlexContainer,
            { flex: '1' },
            _react2.default.createElement(
              'span',
              { className: 'weekDay' },
              'Sun'
            ),
            daysData.Sunday.map(function (day) {
              return _this.renderDayMarker(day);
            })
          )
        )
      );
    };

    _this.onNextMonthPressed = function () {
      var selectedDate = _this.state.selectedDate;

      _this.setState({ selectedDate: new Date((0, _moment2.default)(selectedDate).add(1, 'month').startOf('month').toDate()) });
    };

    _this.onPreviousMonthPressed = function () {
      var selectedDate = _this.state.selectedDate;

      _this.setState({ selectedDate: (0, _moment2.default)(selectedDate).subtract(1, 'month').startOf('month').toDate() });
    };

    _this.state = { selectedDate: new Date() };
    return _this;
  }

  _createClass(EventsCalendar, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;
      var selectedDate = this.state.selectedDate;

      return _react2.default.createElement(
        Wrapper,
        { style: style },
        _react2.default.createElement(
          CalendarContainer,
          null,
          _react2.default.createElement(
            FlexContainer,
            { flexDirection: 'row' },
            _react2.default.createElement(
              FlexContainer,
              { onClick: this.onPreviousMonthPressed, flex: '1' },
              _react2.default.createElement(
                'div',
                { className: 'dateButton' },
                this.getPreviusMonth(selectedDate)
              )
            ),
            _react2.default.createElement(
              FlexContainer,
              { flex: '1' },
              _react2.default.createElement(
                'div',
                { className: 'currentMonth' },
                this.getCurrentMonth(selectedDate),
                _react2.default.createElement(
                  'div',
                  { className: 'year' },
                  this.getCurrentYear(selectedDate)
                )
              )
            ),
            _react2.default.createElement(
              FlexContainer,
              { onClick: this.onNextMonthPressed, flex: '1' },
              _react2.default.createElement(
                'div',
                { className: 'dateButton' },
                this.getNextMonth(selectedDate)
              )
            )
          ),
          this.renderMonths(selectedDate)
        )
      );
    }
  }]);

  return EventsCalendar;
}(_react2.default.Component);

var Wrapper = _styledComponents2.default.div(_templateObject);

var CalendarContainer = _styledComponents2.default.div(_templateObject2);

var MonthsContainer = _styledComponents2.default.div(_templateObject3);

var DayContainer = _styledComponents2.default.div(_templateObject4);

var DayMarker = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.outlined && '1px solid ' + (props.primaryColor || '#616FC6');
}, function (props) {
  return props.filled && (props.primaryColor || '#616FC6');
}, function (props) {
  return props.filled && props.color;
});

var FlexContainer = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.flexDirection || 'column';
}, function (props) {
  return props.justifyContent || 'center';
}, function (props) {
  return props.alignItems || 'center';
}, function (props) {
  return props.flex;
});

EventsCalendar.propTypes = {
  style: _propTypes2.default.object,
  events: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    uuid: _propTypes2.default.string,
    date: _propTypes2.default.string
  })),
  color: _propTypes2.default.string,
  primaryColor: _propTypes2.default.string
};

EventsCalendar.defaultProps = {
  style: {},
  events: [],
  color: '',
  primaryColor: ''
};

exports.default = EventsCalendar;