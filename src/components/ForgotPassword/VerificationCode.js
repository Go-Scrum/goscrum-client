import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import Key from '@material-ui/icons/VpnKey';
import { PAGES } from '../../containers/ForgotPassword/constants';

import './style.css';

const VerificationCode = ({ forgotPassword, updateFormValues, handleNext }) => {
    const handleNextClick = (e) => {
        e.preventDefault();
        handleNext(PAGES.CONFIRM_PASSWORD);
    };

    return (
        <form autoComplete="off" className="pt-4">
            <Grid
                container
                alignItems="flex-end"
                className="my-5 pb-4"
            >
                {/*<Grid item sm={1}>*/}
                {/*    <Key className="text-muted" />*/}
                {/*</Grid>*/}
                <Grid item sm={11} className="fullWidth pt-3">
                    <TextField
                        id="input-verification-code"
                        type="password"
                        label="Verification Code"
                        fullWidth
                        name="verificationCode"
                        value={forgotPassword.verificationCode}
                        onChange={updateFormValues}
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                id="btn-next"
                disabled={!forgotPassword.verificationCode}
                className="btn-block my-3"
                onClick={handleNextClick}
            >
                Next
            </Button>
        </form>
    );
};

VerificationCode.propTypes = {
    forgotPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
};

export default VerificationCode;

