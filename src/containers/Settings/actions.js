import { UPDATE_FORM_VALUES, TOGGLE_LOADER, RESET_STATE, SAVE_DATA } from './constants';
import { CALL_API, METHODS } from '../../middleware';
import { API_URL } from '../../utils/url';

const updateFormValues = (updatedObject) => ({
    type: UPDATE_FORM_VALUES,
    payload: updatedObject,
});

const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    payload: isFetching,
});

const resetState = () => ({
    type: RESET_STATE,
});

const saveData = payload => ({
    [CALL_API]: {
        requestConfig: {
            path: `${API_URL.workspace}`,
            method: METHODS.POST,
            config: {
                response: true,
                body: payload,
            },
        },
        types: SAVE_DATA,
    },
});

export { updateFormValues, toggleLoader, resetState, saveData };
