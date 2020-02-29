import {
    GET_PROJECT,
    TOGGLE_LOADER,
    RESET_STATE,
    SAVE_PROJECT,
    GET_USERS,
    GET_CHANNELS,
    UPDATE_FORM_VALUES,
    GET_TEAMS,
} from './constants';

const initialData = {
    isFetching: false,
    isFetchingUsers: false,
    isFetchingChannels: false,
    isFetchingTeams: false,
    project: {},
    users: [],
    channels: [],
    teams: [],
};

export default function projectReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                project: {
                    ...state.project,
                    ...payload,
                },
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                isFetching: !!payload,
            };
        case RESET_STATE:
            return {
                ...state,
                ...initialData,
            };
        case GET_PROJECT.request:
        case SAVE_PROJECT.request:
            return {
                ...state,
                isFetching: true,
            };
        case GET_PROJECT.success:
        case SAVE_PROJECT.success:
            return {
                ...state,
                isFetching: false,
                project: payload,
            };
        case GET_PROJECT.failure:
        case SAVE_PROJECT.failure:
            return {
                ...state,
                isFetching: false,
            };
        case GET_CHANNELS.request:
            return {
                ...state,
                isFetchingChannels: true,
            };
        case GET_CHANNELS.success:
            return {
                ...state,
                isFetchingChannels: false,
                channels: payload,
            };
        case GET_CHANNELS.failure:
            return {
                ...state,
                isFetchingChannels: false,
            };
        case GET_USERS.request:
            return {
                ...state,
                isFetchingUsers: true,
            };
        case GET_USERS.success:
            return {
                ...state,
                isFetchingUsers: false,
                users: payload,
            };
        case GET_USERS.failure:
            return {
                ...state,
                isFetchingUsers: false,
            };
        case GET_TEAMS.request:
            return {
                ...state,
                isFetchingTeams: true,
            };
        case GET_TEAMS.success:
            return {
                ...state,
                isFetchingTeams: false,
                teams: payload,
            };
        case GET_TEAMS.failure:
            return {
                ...state,
                isFetchingTeams: false,
            };
        default:
            return state;
    }
}
