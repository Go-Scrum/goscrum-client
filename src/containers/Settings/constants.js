import { apiActionTypes } from '../../middleware';
const base = '@@Containers/Settings/';

export const SAVE_DATA = apiActionTypes(`${base}SAVE_DATA`);
export const GET_DATA = apiActionTypes(`${base}GET_DATA`);
export const UPDATE_FORM_VALUES = `${base}UPDATE_FORM_VALUES`;
export const TOGGLE_LOADER = `${base}TOGGLE_LOADER`;
export const RESET_STATE = `${base}RESET_STATE`;
