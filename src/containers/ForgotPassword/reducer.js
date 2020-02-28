import {
    UPDATE_FORM_VALUES, TOGGLE_LOADER, RESET_STATE,
} from './constants';

const initialData = {
    isFetching: false,
    forgotPassword: {
        email: '',
        password: '',
        confirmPassword: '',
        verificationCode: '',
    },
};

export default function forgotPasswordReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                forgotPassword: {
                    ...state.forgotPassword,
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
