import { API, Cache, Auth } from 'aws-amplify';
import axios from 'axios';
import { CALL_API, ENDPOINT } from './constants';
import { getMethod } from './getMethod';


export const apiActionTypes = x => ({
    request: `${x}_REQUEST`,
    success: `${x}_SUCCESS`,
    failure: `${x}_FAILURE`,
});

export const actionWith = (requestConfig, data) => {
    const finalAction = { ...requestConfig, ...data };
    delete finalAction[CALL_API];
    return finalAction;
};

function isExpired(jwtToken) {
    if (!jwtToken) {
        return true;
    }
    const ts = new Date().getTime();
    const delta = 10 * 60 * 1000; // 10 minutes
    if ((jwtToken.exp * 1000) > ts + delta) {
        return false;
    }
    return true;
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export const callApi = async requestConfig => {
    try {
        let session = Cache.getItem('session');
        if (session) {
            const token = session.idToken.jwtToken;
            const jwtToken = parseJwt(token);
            if (isExpired(jwtToken)) {
                session = await Auth.currentSession();
                Cache.setItem('session', session);
            }
        } else {
            session = await Auth.currentSession();
            Cache.setItem('session', session);
        }
        const authHeaders = { Authorization: `Bearer ${session.idToken.jwtToken}` };
        const headers = { headers: { ...authHeaders } };
        console.log(process.env);
        const axiosConfig = {
            ...headers,
            ...requestConfig,
            url: `http://192.168.31.56:3000${requestConfig.path}`,
            method: requestConfig.method,
        };
        return axios(axiosConfig)
            .then(response => {
                if (response.status >= 200 && response.status <= 204) {
                    if (response.data) {
                        if (response.data.error) {
                            return Promise.reject(response.data.error);
                        }
                        return response.data;
                    }
                    // TODO: Decide what to return when response = "204 No Content"
                    return null;
                }
                return Promise.reject(new Error('Unknown API Error'));
            })
            .catch(error => Promise.reject(error));
    } catch (error) {
        return Promise.reject(error);
    }
};

// export const callApi = async requestConfig => {
//     try {
//         let session = Cache.getItem('session');
//         if (session) {
//             const token = session.idToken.jwtToken;
//             const jwtToken = parseJwt(token);
//             if (isExpired(jwtToken)) {
//                 session = await Auth.currentSession();
//                 Cache.setItem('session', session);
//             }
//         } else {
//             session = await Auth.currentSession();
//             Cache.setItem('session', session);
//         }
//
//         const headers = { ...requestConfig.headers, Authorization: `Bearer ${session.idToken.jwtToken}` };
//         const config = { ...requestConfig.config, ...headers };
//         return API[getMethod(requestConfig.method)](ENDPOINT, requestConfig.path, config).then(response => {
//             console.log('response', response)
//             if (response.status >= 200 && response.status <= 204) {
//                 if (response.data) {
//                     if (response.data.error) {
//                         return Promise.reject(response.data.error);
//                     }
//                     return Promise.resolve(response.data);
//                 }
//                 // TODO: Decide what to return when response = "204 No Content"
//                 return null;
//             }
//             return Promise.reject(new Error('Unknown API Error'));
//         }).catch(error => {
//             if (error && error.response && error.response.data) {
//                 return Promise.reject(error.response.data);
//             }
//             return Promise.reject(error);
//         });
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };
