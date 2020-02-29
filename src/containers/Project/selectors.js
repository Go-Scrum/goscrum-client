import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectProject = state => get(state, 'project');

export const makeSelectIsFetching = () =>
    createSelector([selectProject], state => get(state, 'isFetching', false));

export const makeSelectIsFetchingUsers = () =>
    createSelector([selectProject], state => get(state, 'isFetchingUsers', false));

export const makeSelectIsFetchingChannels = () =>
    createSelector([selectProject], state => get(state, 'isFetchingChannels', false));

export const makeSelectIsFetchingTeams = () =>
    createSelector([selectProject], state => get(state, 'isFetchingChannels', false));

export const makeSelectProject = () =>
    createSelector([selectProject], state => get(state, 'project', {}));

export const makeSelectUsers = () =>
    createSelector([selectProject], state => get(state, 'users', []));

export const makeSelectChannels = () =>
    createSelector([selectProject], state => get(state, 'channels', []));

export const makeSelectTeams = () =>
    createSelector([selectProject], state => get(state, 'teams', []));
