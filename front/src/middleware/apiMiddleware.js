import { GET_MENU } from '../constants/menu';
import { POST_AUTH } from '../constants/login';
import { getMenu } from './modules/menu';
import { postAuth } from './modules/login';

const handlers = {
  [GET_MENU]: getMenu,
  [POST_AUTH]: postAuth
};

export default store => next => action => {
  const handler = handlers[action.type];
  if (handler) {
    handler(action, store);
  } else {
    next(action);
  }
};
