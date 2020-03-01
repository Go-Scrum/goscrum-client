import {
    UPDATE_FORM_VALUES,
    TOGGLE_LOADER,
    RESET_STATE,
    SAVE_DATA,
    GET_DATA,
} from './constants';

const initialData = {
    isFetching: false,
    workspace_data: {
    },
};

export default function settingsReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                workspace_data: {
                    ...state.workspace_data,
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
        case GET_DATA.request:
            return {
                ...state,
                workspace_data: payload,
                isFetching: true,
            };
        case GET_DATA.success:
            return {
                ...state,
                workspace_data: payload,
                isFetching: false,
            };
        case GET_DATA.failure:
            return {
                ...state,
                workspace_data: payload,
                isFetching: false,
            };
        case SAVE_DATA.request:
            return {
                ...state,
                isFetching: true,
            };
        case SAVE_DATA.success:
            return {
                ...state,
                isFetching: false,
            };
        case SAVE_DATA.failure:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
