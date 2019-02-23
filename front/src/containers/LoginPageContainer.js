import { connect } from 'react-redux';

import { LoginPage } from '../pages';

const mapStatesToProps = () => {
}

const mapDispatchToProps = (dispatch) => {
  postAuth: (login, password) => {
    dispatch(postAuthAction(login, password))
  }
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(LoginPage);
