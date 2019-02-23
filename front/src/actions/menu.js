import {
  GET_MENU,
  GET_MENU_SUCCESS,
  GET_MENU_FAILURE
} from '../constants/menu';

export const getMenuSuccess = menu => ({
  type: GET_MENU_SUCCESS,
  loading: false,
  payload: { menu }
});

export const getMenuFailure = error => ({
  type: GET_MENU_FAILURE,
  loading: false,
  error: true,
  payload: error
});

export const getMenu = url => ({
  type: GET_MENU,
  loading: true,
  payload: { url }
});
