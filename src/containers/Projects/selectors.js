import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectProjects = state => get(state, 'projects');

export const makeSelectIsFetching = () =>
    createSelector([selectProjects], state => get(state, 'isFetching', {}));

export const makeSelectProjects = () =>
    createSelector([selectProjects], state => get(state, 'projects', {}));
