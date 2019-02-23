import { GET_MENU } from '../constants/menu';
import { getMenu } from './modules/menu';

const handlers = {
  [GET_MENU]: getMenu
};

export default store => next => action => {
  const handler = handlers[action.type];
  if (handler) {
    handler(action, store);
  } else {
    next(action);
  }
};
