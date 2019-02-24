import React, { Component } from 'react';
import {
  Button,
  CssBaseline,
  Paper,
  TextField,
} from '@material-ui/core';
import * as PropTypes from 'prop-types';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { postAuth } = this.props;
    console.log(postAuth);
    return (
      <CssBaseline>
        <div className="full-height column items-center flex-center">
          <Paper className="column m-pa-lg">
            <TextField
              id="standard-name"
              label="email"
              value={this.state.login}
              onChange={this.handleLoginChange}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              margin="normal"
            />
            <Button
              onClick={postAuth(
                '/login',
                this.state.login,
                this.state.password
              )}
            >
              Login
            </Button>
          </Paper>
        </div>
      </CssBaseline>
    );
  }
}

LoginPage.propTypes = {
  postAuth: PropTypes.any,
  classes: PropTypes.any
};

export default LoginPage;
