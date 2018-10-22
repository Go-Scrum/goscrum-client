import { UPDATE_FORM_VALUES, TOGGLE_LOADER, RESET_STATE, RESET_PASSWORD } from './constants';

const updateFormValues = (updatedObject) => ({
    type: UPDATE_FORM_VALUES,
    payload: updatedObject,
});


const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    payload: isFetching,
});

const resetPassword = () => ({
    type: RESET_PASSWORD,
});

const resetState = () => ({
    type: RESET_STATE,
});


export { updateFormValues, toggleLoader, resetState, resetPassword };
