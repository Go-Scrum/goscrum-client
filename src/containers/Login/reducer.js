import {
    UPDATE_FORM_VALUES, TOGGLE_LOADER, RESET_STATE, RESET_PASSWORD,
} from './constants';

const initialData = {
    isFetching: false,
    login: {
        email: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
    },
};

export default function loginReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                login: {
                    ...state.login,
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
        case RESET_PASSWORD:
            return {
                ...state,
                login: {
                    ...state.login,
                    newPassword: '',
                    confirmPassword: '',
                },
            };
        default:
            return state;
    }
}
