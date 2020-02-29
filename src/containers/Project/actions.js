import {
    TOGGLE_LOADER,
    RESET_STATE,
    GET_PROJECT,
    SAVE_PROJECT,
    GET_CHANNELS,
    GET_USERS,
    UPDATE_FORM_VALUES,
    GET_TEAMS,
} from './constants';
import { CALL_API, METHODS } from '../../middleware';
import { API_URL } from '../../utils/url';

const updateFormValues = (updatedObject) => ({
    type: UPDATE_FORM_VALUES,
    payload: updatedObject,
});

const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    payload: isFetching,
});

const resetState = () => ({
    type: RESET_STATE,
});

const getProject = id => ({
    [CALL_API]: {
        requestConfig: {
            path: `${API_URL.projects}/${id}`,
            method: METHODS.GET,
            config: {
                response: true,
            },
        },
        types: GET_PROJECT,
    },
});

const getChannels = (workspaceId, teamId) => ({
    [CALL_API]: {
        requestConfig: {
            path: `/mattermost/${workspaceId}/${teamId}/channels`,
            method: METHODS.GET,
            config: {
                response: true,
            },
        },
        types: GET_CHANNELS,
    },
});

const getUsers = (workspaceId, channelId) => ({
    [CALL_API]: {
        requestConfig: {
            path: `/mattermost/${workspaceId}/channel/${channelId}/participants`,
            method: METHODS.GET,
            config: {
                response: true,
            },
        },
        types: GET_USERS,
    },
});

const getTeams = workspaceId => ({
    [CALL_API]: {
        requestConfig: {
            path: `/mattermost/${workspaceId}/teams`,
            method: METHODS.GET,
            config: {
                response: true,
            },
        },
        types: GET_TEAMS,
    },
});

const saveProject = payload => ({
    [CALL_API]: {
        requestConfig: {
            path: `${API_URL.projects}`,
            method: METHODS.POST,
            config: {
                response: true,
                body: payload,
            },
        },
        types: SAVE_PROJECT,
    },
});

export { toggleLoader, resetState, getProject, saveProject, updateFormValues, getUsers, getChannels, getTeams };
