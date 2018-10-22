import { METHODS } from './constants';

export const getMethod = (type) => {
    switch (type) {
        case METHODS.GET:
            return 'get';
        case METHODS.PUT:
            return 'put';
        case METHODS.POST:
            return 'post';
        case METHODS.DELETE:
            return 'del';
        default:
            return 'get';
    }
};
