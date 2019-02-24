import { getAuthRespSuccsess, getAuthRespFailure } from '../../actions/login';

export const postAuth = (action, store) => {
  console.log(action);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const myInit = {
    method: 'POST',
    body: JSON.stringify({
      email: action.payload.login,
      password: action.payload.password
    }),
    headers
  };
  fetch(action.payload.url, myInit)
    .then(response => response.json())
    .then(() => getAuthRespSuccsess())
    .catch(error => getAuthRespFailure(error))
    .then(nextAction => store.dispatch(nextAction));
};
