import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectLogin = state => get(state, 'login');

export const makeSelectIsFetching = () =>
    createSelector([selectLogin], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectLogin = () =>
    createSelector([selectLogin], login => get(login, 'login', {}));
