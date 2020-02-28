import {
    UPDATE_FORM_VALUES,
    TOGGLE_LOADER,
    RESET_STATE,
    SAVE_DATA,
} from './constants';

const initialData = {
    isFetching: false,
    workspace_data: {
        workspace_name: 'TheGeeksTribe Hackathon',
        url: 'https://durgastuffy-mattermost.centralindia.cloudapp.azure.com',
        workspace_type: 'Mattermost',
        client_secret: '6ty9bzx6ujnqfrbefjgopzemfa',
        client_id: 'yg1e418f33nzdesx6uyh8fom3r',
    },
};

export default function settingsReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                workspace_data: {
                    ...state.workspace_data,
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
        case SAVE_DATA.request:
            return {
                ...state,
                isFetching: true,
            };
        case SAVE_DATA.success:
            return {
                ...state,
                isFetching: false,
            };
        case SAVE_DATA.failure:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
