import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import GoogleLogin, {
//     GoogleLoginResponse,
//     GoogleLoginResponseOffline,
// } from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import AppIcon from '../Shared/AppIcon/app-icon';
import LoginWrapper from '../Shared/LoginWrapper/login-wrapper';
import Loader from '../Shared/Loader';
import { LOADER_TYPE } from '../../utils/Constants';

const useStyles = makeStyles(theme => ({
    // "@global": {
    //   body: {
    //     backgroundColor: theme.palette.common.white
    //   }
    // },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    orSeparator: {
        padding: theme.spacing(0, 2),
        background: theme.palette.background.paper,
        position: 'relative',
        top: '-11px',
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [shouldShowCodeInput, setShouldShowCodeInput] = useState(false);
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const authContext = useContext(AuthContext);

    return (
        <LoginWrapper>
            <>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} noValidate>
                    {/*<Box*/}
                    {/*    mt={3}*/}
                    {/*    mx={1}*/}
                    {/*    borderTop={1}*/}
                    {/*    justifyContent="center"*/}
                    {/*    display="flex"*/}
                    {/*    borderColor="grey.500"*/}
                    {/*>*/}
                    {/*    <i className={classes.orSeparator}>or</i>*/}
                    {/*</Box>*/}
                    <Button
                        onClick={() => {
                        }}
                        // disabled={renderProps.disabled}
                        fullWidth
                        color="primary"
                        variant="outlined"
                        className={classes.submit}
                    >
                        <AppIcon icon={faGoogle} wideRightMargin />
                        {' '}
                        Login with
                        Google
                    </Button>
                </form>
            </>
            {isLoading && <Loader type={LOADER_TYPE.fullView} />}
        </LoginWrapper>
    );
}
