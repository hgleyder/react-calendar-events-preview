import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import { forEach, includes } from 'lodash';
import { fadeIn } from 'react-animations';
import moment from 'moment';

class EventsCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedDate: new Date()};
  }
  
  getCurrentMonth = date => moment(date).format('MMMM');

  getCurrentYear = date => moment(date).format('YYYY');

  getPreviusMonth = date => moment(date).subtract(1, 'month').startOf('month').format('MMMM');

  getNextMonth = date => moment(date).add(1, 'month').startOf('month').format('MMMM');

  getDaysOfTheMonth = (date) => {
    const monthData = {};
    const daysCount = moment(date).daysInMonth();
    let day = 1;
    let currentDate = moment(date).startOf('month');
    const firstWeek = moment(currentDate).isoWeek();
    while (day <= daysCount) {
      const weekDayName = moment(currentDate).format('dddd');
      if (!monthData[weekDayName]) {
        monthData[weekDayName] = [];
      }
      if (!monthData[weekDayName].length && moment(currentDate).isoWeek() > firstWeek) {
        monthData[weekDayName].push(' ');
      }
      monthData[weekDayName].push(day);
      day += 1;
      currentDate = moment(currentDate).add(1, 'day');
    }
    let maxLength = monthData.Monday.length;
    forEach(Object.keys(monthData), (dayName) => {
      maxLength = maxLength < monthData[dayName].length ? monthData[dayName].length : maxLength;
      if (monthData[dayName].length < maxLength) {
        monthData[dayName].push(' ');
      }
    });
    return monthData;
  }

  renderDayMarker = (day) => {
    const { events, color, primaryColor } = this.props;
    const { selectedDate } = this.state;
    const eventsDate = events.map(e => ({ uuid: e.uuid, date: moment(e.date) }));

    // Event Date
    const auxEvents = eventsDate.filter(e => e.date.format('MM-YYYY') === moment(selectedDate).format('MM-YYYY'));
    const eventsDateDays = auxEvents.map(e => parseInt(moment(e.date).format('DD'), 10));
    if (includes(eventsDateDays, day)) {
      return (
        <DayContainer>
          <DayMarker primaryColor={primaryColor} color={color} filled>
            {day}
          </DayMarker>
        </DayContainer>
      );
    }

    // Current Date
    if (moment(new Date()).format('MM-YYYY') === moment(selectedDate).format('MM-YYYY')
    && parseInt(moment(new Date()).format('DD'), 10) === day) {
      return (
        <DayContainer>
          <DayMarker primaryColor={primaryColor} outlined>
            {day}
          </DayMarker>
        </DayContainer>
      );
    }
    return (<DayContainer>{day}</DayContainer>);
  }

  renderMonths = (date) => {
    const daysData = this.getDaysOfTheMonth(date);
    return (
      <MonthsContainer>
        <FlexContainer flexDirection="row">
          <FlexContainer flex="1">
            <span className="weekDay">Mon</span>
            {daysData.Monday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
          <FlexContainer flex="1">
            <span className="weekDay">Tue</span>
            {daysData.Tuesday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
          <FlexContainer flex="1">
            <span className="weekDay">Wed</span>
            {daysData.Wednesday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
          <FlexContainer flex="1">
            <span className="weekDay"> Thu</span>
            {daysData.Thursday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
          <FlexContainer flex="1">
            <span className="weekDay">Fri</span>
            {daysData.Friday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
          <FlexContainer flex="1">
            <span className="weekDay">Sat</span>
            {daysData.Saturday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
          <FlexContainer flex="1">
            <span className="weekDay">Sun</span>
            {daysData.Sunday.map(day => this.renderDayMarker(day))}
          </FlexContainer>
        </FlexContainer>
      </MonthsContainer>
    );
  }

  onNextMonthPressed = () => {
    const { selectedDate } = this.state;
    this.setState({ selectedDate: new Date(moment(selectedDate).add(1, 'month').startOf('month').toDate()) });
  }

  onPreviousMonthPressed = () => {
    const { selectedDate } = this.state;
    this.setState({ selectedDate: moment(selectedDate).subtract(1, 'month').startOf('month').toDate() });
  }


  render() {
    const { style } = this.props;
    const { selectedDate } = this.state;
    return (
      <Wrapper style={style}>
        <CalendarContainer>
          <FlexContainer flexDirection="row">
            <FlexContainer onClick={this.onPreviousMonthPressed} flex="1">
              <div className="dateButton">
                {this.getPreviusMonth(selectedDate)}
              </div>
            </FlexContainer>
            <FlexContainer flex="1">
              <div className="currentMonth">
                {this.getCurrentMonth(selectedDate)}
                <div className="year">
                  {this.getCurrentYear(selectedDate)}
                </div>
              </div>
            </FlexContainer>
            <FlexContainer onClick={this.onNextMonthPressed} flex="1">
              <div className="dateButton">
                {this.getNextMonth(selectedDate)}
              </div>
            </FlexContainer>
          </FlexContainer>
          {this.renderMonths(selectedDate)}
        </CalendarContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-width: 35rem;
  min-height: 35rem;
`;

const fadeInAnimation = keyframes`${fadeIn}`;

const CalendarContainer = styled.div`
  background-color: white;
  margin: 2rem 1rem;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  height: 100%;
  animation: 1.5s ${fadeInAnimation};
`;

const MonthsContainer = styled.div`
  margin-top: 2.5rem;
`;

const DayContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0.8rem 0rem;
  height: 3rem;
  padding: 0.5rem;
`;

const DayMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  position: relative;
  bottom: 0.9rem;
  padding: 0.8rem 0rem;
  border: ${props => props.outlined && `1px solid ${(props.primaryColor)}`};
  background-color: ${props => props.filled && (props.primaryColor)};
  color: ${props => props.filled && props.color};
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0rem 0.2rem;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex: ${props => props.flex};

  & > .weekDay {
    color: gray;
    font-size: 1.2rem;
  }

  & > .dateButton {
    color: gray;
    font-size: 1.5rem;
    cursor: pointer;
  }

  & > .currentMonth {
    font-size: 1.8rem;
    font-weight: 700;
    & > .year{
      text-align: center;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
`;

EventsCalendar.propTypes = {
    style: PropTypes.object,
    events: PropTypes.arrayOf(PropTypes.shape({
      uuid: PropTypes.string,
      date: PropTypes.string,
    })),
    color: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  EventsCalendar.defaultProps = {
    style: {},
    events: [],
    color: '#FFFFFF',
    primaryColor: '#616FC6',
  };

export default EventsCalendar;
