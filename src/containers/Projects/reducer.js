import {
    UPDATE_FORM_VALUES, TOGGLE_LOADER, RESET_STATE,
} from './constants';

const initialData = {
    isFetching: false,
    resetPassword: {
        password: '',
        newPassword: '',
        confirmPassword: '',
    },
};

export default function resetPasswordReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                resetPassword: {
                    ...state.resetPassword,
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
        default:
            return state;
    }
}
