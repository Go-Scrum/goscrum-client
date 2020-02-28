import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectResetPassword = state => get(state, 'resetPassword');

export const makeSelectIsFetching = () =>
    createSelector([selectResetPassword], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectResetPassword = () =>
    createSelector([selectResetPassword], resetPassword => get(resetPassword, 'resetPassword', {}));
