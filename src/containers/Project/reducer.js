import {
    GET_PROJECT,
    TOGGLE_LOADER,
    RESET_STATE,
    SAVE_PROJECT,
} from './constants';

const initialData = {
    isFetching: false,
    project: {},
};

export default function projectReducer(state = initialData, { payload, ...action } = {}) {
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
                projects: payload.data,
            };
        case GET_PROJECT.failure:
        case SAVE_PROJECT.failure:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
