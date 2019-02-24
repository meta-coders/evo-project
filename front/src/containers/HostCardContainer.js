import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { HostCard } from '../components';

import HostLogo from '../static/user.png';

const styles = {
  container: {
    maxWidth: 500
  }
};

const host = {
  name: 'HostName',
  location: 'Kiev, Win prospect 37a'
};

const HostCardContainer = ({ classes }) => (
  <HostCard
    className={classes.container}
    name={host.name}
    location={host.location}
    logo={HostLogo}
  />
);

HostCardContainer.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(HostCardContainer);
