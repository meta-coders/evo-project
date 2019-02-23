import { GET_MENU_SUCCESS } from '../constants/menu';

const initialState = {
  avatar: '',
  name: '',
  items: []
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_SUCCESS:
      return action.payload.menu;
    default:
      return state;
  }
}
