import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectApp = state => get(state, 'app');

export const makeSelectIsFetching = () =>
    createSelector([selectApp], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectUser = () =>
    createSelector([selectApp], app => get(app, 'user', {}));
