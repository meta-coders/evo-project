import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sidebar } from '../components';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getMenu } from '../actions/menu';

class SidebarContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMenu('/menu'));
  }

  render() {
    const { avatar, name, items } = this.props;
    return (
      <Sidebar name={name} avatar={avatar}>
        {items.map(({ label }) => (
          <ListItem button key={label}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </Sidebar>
    );
  }
}

function mapStateToProps(state) {
  const { avatar, name, items } = state;

  return {
    avatar,
    name,
    items
  };
}

export default connect(mapStateToProps)(SidebarContainer);
