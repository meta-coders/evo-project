import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { EventCard } from '../components/cards';

import UserLogo from '../static/user.png';

const styles = {
  container: {
    width: 500,
    height: 110
  }
};

const participants = [
  { name: 'one', img: UserLogo },
  { name: 'two', img: UserLogo },
  { name: 'three', img: UserLogo },
  { name: 'four', img: UserLogo }
];

const host = {
  name: 'HostName',
  location: 'Kiev, Win prospect 37a'
};

const date = new Date();

const EventCardContainer = ({ classes }) => (
  <EventCard
    className={classes.container}
    participants={participants}
    name="Music Evening"
    host={host}
    date={date}
  />
);

EventCardContainer.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(EventCardContainer);
