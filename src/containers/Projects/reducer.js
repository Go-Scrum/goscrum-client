import {
    GET_PROJECTS,
    TOGGLE_LOADER,
    RESET_STATE,
} from './constants';

const initialData = {
    isFetching: false,
    projects: [],
};

export default function projectsReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
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
        case GET_PROJECTS.request:
            return {
                ...state,
                isFetching: true,
            };
        case GET_PROJECTS.success:
            return {
                ...state,
                isFetching: false,
                projects: payload,
            };
        case GET_PROJECTS.failure:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
