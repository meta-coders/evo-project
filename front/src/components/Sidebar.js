import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Divider';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    minHeight: 100
  },
  avatar: {
    width: 60,
    height: 60
  },
  drawerPaper: {
    width: drawerWidth
  }
};

const Sidebar = ({ avatar, children, classes, name }) => (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
    anchor="left"
  >
    <div className={classes.user}>
      <Avatar src={avatar} className={classes.avatar} />
      <Typography component="h1" variant="h5">
        {name}
      </Typography>
    </div>
    <Divider />
    <List>{children}</List>
  </Drawer>
);

Sidebar.propTypes = {
  avatar: PropTypes.string,
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles)(Sidebar);
