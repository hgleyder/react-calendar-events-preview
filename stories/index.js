import React from 'react';
import { storiesOf } from '@storybook/react';
import EventsCalendar from '../src/index';
import moment from 'moment';


const events = [
    {uuid: '1', date: moment(new Date()).add('1','day').toDate()},
    {uuid: '2', date: moment(new Date()).add('5','day').toDate()},
    {uuid: '3', date: moment(new Date()).add('1','month').toDate()},
    {uuid: '4', date: moment(new Date()).add('1','month').subtract('3', 'day').toDate()},
]

storiesOf('EventsCalendar', module)
  .add('without props', () => (
    <div style={{backgroundColor: '#ecf0f1', width: '100%', padding: '2rem'}}>
        <EventsCalendar
            style={{width: '40%'}}
        />
    </div>
  ))
  .add('with props', () => (
    <div style={{backgroundColor: '#ecf0f1', width: '100%', padding: '2rem'}}>
        <EventsCalendar
            style={{width: '40%'}}
            events={events}
            primaryColor="#f39c12"
        />
    </div>
  ));  