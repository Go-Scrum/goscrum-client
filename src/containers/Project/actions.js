import { TOGGLE_LOADER, RESET_STATE, GET_PROJECT, SAVE_PROJECT } from './constants';
import { CALL_API, METHODS } from '../../middleware';
import { API_URL } from '../../utils/url';

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

export { toggleLoader, resetState, getProject, saveProject };
