import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectSettings = state => get(state, 'forgotPassword');

export const makeSelectIsFetching = () =>
    createSelector([selectSettings], state => get(state, 'isFetching', {}));

export const makeSelectSettings = () =>
    createSelector([selectSettings], state => get(state, 'workspace_data', {}));
