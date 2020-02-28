import { ENDPOINT } from '../middleware/constants';

export default {
    API: {
        endpoints: [
            {
                name: ENDPOINT,
                endpoint: process.env.REACT_APP_API_ENDPOINT,
            },
        ],
    },
};
