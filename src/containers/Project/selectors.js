import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectProject = state => get(state, 'project');

export const makeSelectIsFetching = () =>
    createSelector([selectProject], state => get(state, 'isFetching', {}));

export const makeSelectProject = () =>
    createSelector([selectProject], state => get(state, 'project', {}));
