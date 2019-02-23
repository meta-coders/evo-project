import { getMenuSuccess, getMenuFailure } from '../../actions/menu';

export const getMenu = (action, store) => {
  fetch(action.payload.url)
    .then(response => response.json())
    .then(json => getMenuSuccess(json.menu))
    .catch(error => getMenuFailure(error))
    .then(nextAction => store.dispatch(nextAction));
};
