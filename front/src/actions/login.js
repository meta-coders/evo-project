import {
  POST_AUTH,
  GET_AUTH_RESP_SUCCESS,
  GET_AUTH_RESP_FAILURE
} from '../constants/login';

export const getAuthRespSuccsess = () => ({
  type: GET_AUTH_RESP_SUCCESS,
  loading: false,
  payload: {}
});

export const getAuthRespFailure = error => ({
  type: GET_AUTH_RESP_FAILURE,
  loading: false,
  error: true,
  payload: error
});

export const postAuth = (url, login, password) => {
  console.log('postAuthAction');
  return {
    type: POST_AUTH,
    loading: true,
    payload: { url, login, password }
  };
};
