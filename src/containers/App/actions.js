
import { UPDATE_USER } from './constants';

const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload,
});

export { updateUser };
