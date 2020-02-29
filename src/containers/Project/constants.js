import { apiActionTypes } from '../../middleware';
const base = '@@Containers/Project/';

export const GET_PROJECT = apiActionTypes(`${base}GET_PROJECT`);
export const SAVE_PROJECT = apiActionTypes(`${base}SAVE_PROJECT`);
export const TOGGLE_LOADER = `${base}TOGGLE_LOADER`;
export const RESET_STATE = `${base}RESET_STATE`;
