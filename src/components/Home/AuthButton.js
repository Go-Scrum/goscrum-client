import React from 'react';
import { withOAuth } from 'aws-amplify-react';
import Button from '@material-ui/core/Button';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import AppIcon from '../Shared/AppIcon/app-icon';

const OAuthButton = ({ OAuthSignIn }) => (
    <Button
        onClick={OAuthSignIn}
        variant="contained"
        color="primary"
    >
        <AppIcon icon={faGoogle} wideRightMargin />
        Login
    </Button>
);

export default withOAuth(OAuthButton);
