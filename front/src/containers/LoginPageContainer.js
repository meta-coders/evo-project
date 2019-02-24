import { connect } from 'react-redux';

import { LoginPage } from '../pages';

import { postAuth } from '../actions/login';

const mapStatesToProps = state => ({ login: state.login });

const mapDispatchToProps = dispatch => ({
  postAuth: (url, login, password) => () => {
    dispatch(postAuth(url, login, password));
  }
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(LoginPage);
