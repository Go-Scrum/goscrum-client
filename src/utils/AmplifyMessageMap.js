import { I18n } from 'aws-amplify';

export const MapEntries = [
    ['1 validation error detected : Value at \'New Password\' or \'Confirm Password\' failed to satisfy constraint : Member must have length greater than or equal to 6\n', /validation.*password/i],
];

const AmplifyMessageMap = (message) => {
    const match = MapEntries.filter(entry => entry[1].test(message));
    if (match.length === 0) {
        return message;
    }

    const entry = match[0];
    const msg = entry.length > 2 ? entry[2] : entry[0];

    return I18n.get(entry[0], msg);
};

export default AmplifyMessageMap;
