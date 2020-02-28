import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

import './style.css';

const EmailWrapper = ({ forgotPassword, updateFormValues, handleForgotPassword, forgotPasswordStyle }) => (
    <form autoComplete="off" className="pt-3">
        <Grid
            container
            alignItems="flex-end"
            className="my-5 pt-2 pb-4"
        >
            {/*<Grid item sm={1}>*/}
            {/*    /!*<AccountCircle className="text-muted" />*!/*/}
            {/*</Grid>*/}
            <Grid item sm={11} className="fullWidth">
                <TextField
                    id="input-email"
                    type="email"
                    label="Email or Username"
                    fullWidth
                    name="email"
                    value={forgotPassword.email}
                    onChange={updateFormValues}
                />
            </Grid>
        </Grid>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            id="btn-next"
            disabled={!forgotPassword.email}
            className="btn-block my-3"
            onClick={handleForgotPassword}
        >
            Next
        </Button>
        <Button
            component={Link}
            to="/login"
            id="btn-back"
            className={forgotPasswordStyle}
            size="small"
            color="primary"
        >
            Back To Login
        </Button>
    </form>
);

EmailWrapper.propTypes = {
    forgotPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    handleForgotPassword: PropTypes.func.isRequired,
    forgotPasswordStyle: PropTypes.string.isRequired,
};

export default EmailWrapper;

