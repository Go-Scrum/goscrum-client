import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectForgotPassword = state => get(state, 'forgotPassword');

export const makeSelectIsFetching = () =>
    createSelector([selectForgotPassword], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectForgotPassword = () =>
    createSelector([selectForgotPassword], forgotPassword => get(forgotPassword, 'forgotPassword', {}));
