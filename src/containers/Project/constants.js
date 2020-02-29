import { apiActionTypes } from '../../middleware';
const base = '@@Containers/Project/';

export const GET_PROJECT = apiActionTypes(`${base}GET_PROJECT`);
export const GET_USERS = apiActionTypes(`${base}GET_USERS`);
export const UPDATE_FORM_VALUES = `${base}UPDATE_FORM_VALUES`;
export const GET_CHANNELS = apiActionTypes(`${base}GET_CHANNELS`);
export const SAVE_PROJECT = apiActionTypes(`${base}SAVE_PROJECT`);
export const TOGGLE_LOADER = `${base}TOGGLE_LOADER`;
export const RESET_STATE = `${base}RESET_STATE`;
