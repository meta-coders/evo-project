import React from 'react';
import { Card, Avatar, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import classNames from 'classnames';

import UserLogo from '../static/user.png';

const styles = theme => ({
  card: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  participant: {
    width: '20px',
    height: '20px'
  },
  eventName: {
    fontWeight: '600',
    textAlign: 'center'
  }
});

const EventCard = ({ classes, className, name, date, participants, host }) => {
  return (
    <Card className={classNames(classes.card, className)}>
      <div className="row full-height items-center m-mx-lg">
        <Avatar alt="eventIcon" src={UserLogo} className={classes.avatar} />
        <div className="column m-ml-lg">
          <div className={classes.eventName}>{name}</div>
          <div className="row m-mt-lg">
            {participants.map(participant => (
              <Tooltip key={participant.name} title={participant.name}>
                <Avatar
                  alt="eventIcon"
                  src={participant.img}
                  className={classes.participant}
                />
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="column m-ml-auto fit-height">
          <b className="m-mb-sm">{host.name}</b>
          <b className="m-mb-sm">{date.toLocaleString()}</b>
          <b className="m-mb-sm">{host.location}</b>
        </div>
      </div>
    </Card>
  );
};

EventCard.protoTypes = {
  classes: propTypes.object
};

export default withStyles(styles)(EventCard);
