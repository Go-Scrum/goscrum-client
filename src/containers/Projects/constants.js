import { apiActionTypes } from '../../middleware';
const base = '@@Containers/Projects/';

export const GET_PROJECTS = apiActionTypes(`${base}GET_PROJECTS`);
export const TOGGLE_LOADER = `${base}TOGGLE_LOADER`;
export const RESET_STATE = `${base}RESET_STATE`;
