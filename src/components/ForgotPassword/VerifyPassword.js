import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import Lock from '@material-ui/icons/Lock';

import './style.css';

const VerifyPassword = ({ forgotPassword, updateFormValues, submitChangePassword }) => (
    <form autoComplete="off" className="pt-4">
        <Grid
            container
            alignItems="flex-end"
            className="mt-5 mb-2"
        >
            {/*<Grid item sm={1}>*/}
            {/*    <Lock className="text-muted" />*/}
            {/*</Grid>*/}
            <Grid item sm={11} className="fullWidth">
                <TextField
                    id="forgot-input-password"
                    name="password"
                    type="password"
                    value={forgotPassword.password}
                    fullWidth
                    onChange={updateFormValues}
                    label="Password"
                />
            </Grid>
        </Grid>
        <Grid
            container
            alignItems="flex-end"
            className="mt-2 mb-5"
        >
            {/*<Grid item sm={1}>*/}
            {/*    <Lock className="text-muted" />*/}
            {/*</Grid>*/}
            <Grid item sm={11} className="fullWidth">
                <TextField
                    id="forgot-input-confirm-password"
                    name="confirmPassword"
                    type="password"
                    value={forgotPassword.confirmPassword}
                    fullWidth
                    onChange={updateFormValues}
                    label="Confirm Password"
                />
            </Grid>
        </Grid>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            id="btn-next"
            disabled={!forgotPassword.confirmPassword || !forgotPassword.password || forgotPassword.password !== forgotPassword.confirmPassword}
            className="btn-block mt-5 mb-3"
            onClick={submitChangePassword}
        >
        Submit
        </Button>
    </form>
);

VerifyPassword.propTypes = {
    forgotPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    submitChangePassword: PropTypes.func.isRequired,
};

export default VerifyPassword;

