import {
    UPDATE_USER,
} from './constants';

const initialData = {
    isFetching: false,
    user: null,
};

const appReducer = (state = initialData, { type, payload }) => {
    switch (type) {
        case UPDATE_USER:
            return {
                ...state,
                user: payload,
            };
        default:
            return state;
    }
};

export default appReducer;
