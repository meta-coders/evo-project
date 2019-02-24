import { GET_AUTH_RESP_SUCCESS } from '../constants/login';

const initialState = {
  login: false
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case GET_AUTH_RESP_SUCCESS:
      return { login: true };
    default:
      return state;
  }
}
