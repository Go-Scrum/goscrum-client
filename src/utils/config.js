export default {
    identityPoolId: process.env.REACT_APP_USER_IDENTITY_PROVIDER_ID,
    region: process.env.REACT_APP_USER_POOL_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_CLIENT_ID,
    mandatorySignIn: true,
    oauth: {
        domain: process.env.REACT_APP_COGNITO_DOMAIN,
        redirectSignIn: process.env.REACT_APP_URL,
        redirectSignOut: process.env.REACT_APP_URL,
        scope: ['email', 'openid', 'aws.cognito.signin.user.admin'],
        responseType: 'code',
    },
};
