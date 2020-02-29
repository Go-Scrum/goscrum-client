import { TOGGLE_LOADER, RESET_STATE, GET_PROJECTS, SAVE_PROJECT } from './constants';
import { CALL_API, METHODS } from '../../middleware';
import { API_URL } from '../../utils/url';

const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    payload: isFetching,
});

const resetState = () => ({
    type: RESET_STATE,
});

const getProjects = () => ({
    [CALL_API]: {
        requestConfig: {
            path: `${API_URL.projects}`,
            method: METHODS.GET,
            config: {
                response: true,
            },
        },
        types: GET_PROJECTS,
    },
});

export { toggleLoader, resetState, getProjects };
