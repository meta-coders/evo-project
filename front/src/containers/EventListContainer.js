import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { EventList } from '../components';

import UserLogo from '../static/user.png';

const styles = {
  container: {
    width: 800,
    height: 200,
    composes: 'm-px-lg'
  }
};

const options = [
  {
    name: 'EventOne',
    date: Date(),
    participants: [
      { name: 'one', img: UserLogo },
      { name: 'two', img: UserLogo },
      { name: 'three', img: UserLogo },
      { name: 'four', img: UserLogo }
    ],
    host: {
      name: 'HostName',
      location: 'Kiev, Win prospect 37a'
    },
  },
  {
    name: 'EventOne',
    date: Date(),
    participants: [
      { name: 'one', img: UserLogo },
      { name: 'two', img: UserLogo },
      { name: 'three', img: UserLogo },
      { name: 'four', img: UserLogo }
    ],
    host: {
      name: 'HostName',
      location: 'Kiev, Win prospect 37a'
    },
  },
  {
    name: 'EventOne',
    date: Date(),
    participants: [
      { name: 'one', img: UserLogo },
      { name: 'two', img: UserLogo },
      { name: 'three', img: UserLogo },
      { name: 'four', img: UserLogo }
    ],
    host: {
      name: 'HostName',
      location: 'Kiev, Win prospect 37a'
    },
  },
  {
    name: 'EventOne',
    date: Date(),
    participants: [
      { name: 'one', img: UserLogo },
      { name: 'two', img: UserLogo },
      { name: 'three', img: UserLogo },
      { name: 'four', img: UserLogo }
    ],
    host: {
      name: 'HostName',
      location: 'Kiev, Win prospect 37a'
    },
  }
];



const EventListContainer = ({ classes }) => (
  <EventList
    className={classes.container}
    options={options}
  />
);

EventListContainer.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(EventListContainer);
