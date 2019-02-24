import React from 'react';
import { Card, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  card: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    width: '60px',
    height: '60px'
  },
  hostName: {
    fontWeight: '600',
    textAlign: 'center'
  },
  hostLocation: {
    textDecoration: 'underline'
  }
});

const HostCard = ({ classes, className, location, logo, name }) => {
  return (
    <Card className={classNames(classes.card, className)}>
      <div className="row m-ma-lg items-center">
        <Avatar
          alt="eventIcon"
          src={logo}
          className={classNames('col m-ma-md', classes.avatar)}
        />
        <div className={classNames('col m-ma-md', classes.hostName)}>
          {name}
        </div>
        <div
          className={classNames(
            'col justify-center m-ma-md',
            classes.hostLocation
          )}
        >
          {location}
        </div>
      </div>
    </Card>
  );
};

HostCard.protoTypes = {
  classes: propTypes.object
};

export default withStyles(styles)(HostCard);
