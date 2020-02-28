import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';

import config from './config';

const getAccountCredentials = async ({ institution, accountId, role }) => {
    const sts = new AWS.STS();
    if (!institution) {
        return {};
    }
    const { Credentials } = await sts.assumeRole({
        RoleArn: `arn:aws:iam::${accountId}:role/${institution}-${role}`,
        RoleSessionName: `${role}-session`,
    }).promise();

    return Credentials;
};

const refreshToken = async ({ institution, accountId, region, role }) => {
    const currentSession = await Auth.currentSession();
    if (AWS.config.credentials.needsRefresh()) {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        cognitoUser.refreshSession(currentSession.getRefreshToken(), (err, session) => {
            if (err) {
                console.error(err);
            } else {
                configureCognito(session.getIdToken().getJwtToken());
            }
        });
    }

    return getAccountCredentials({ institution, accountId, region, role });
};

export const configureCognito = (idJwtToken) => {
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: config.identityPoolId,
        Logins: {
            [`cognito-idp.${config.region}.amazonaws.com/${config.userPoolId}`]: idJwtToken,
        },
    });
    AWS.config.region = config.region;
};

export const lambdaInvoke = async (functionName, payload, config = {}) => {
    let lambdaConfig = {
        region: config.region || 'eu-west-2',
    };
    const { AccessKeyId, SecretAccessKey, SessionToken } = await refreshToken(config);
    if (AccessKeyId && SecretAccessKey) {
        lambdaConfig = {
            ...lambdaConfig,
            accessKeyId: AccessKeyId,
            secretAccessKey: SecretAccessKey,
            sessionToken: SessionToken,
        };
    }
    const lambda = new AWS.Lambda({
        ...lambdaConfig,
    });

    const response = await lambda.invoke({
        FunctionName: functionName,
        ...(payload ? { Payload: payload } : {}),
    }).promise();
    return JSON.parse(response.Payload);
};

export default lambdaInvoke;
