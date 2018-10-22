import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Lock from '@material-ui/icons/Lock';
import PaperHeader from '../Shared/PaperHeader';

import './style.css';

const styles = theme => ({
    card: {
        width: 400,
        height: 600,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        boxShadow: 'none',
        background: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.between('xs', 'md')]: {
            width: '100%',
        },
    },
    resetPassword: {
        textTransform: 'none',
    },
    paperHeader: {
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        top: 70,
        zIndex: 999,
    },
});

const ResetPassword = ({ resetPassword, classes, handleResetPassword, updateFormValues }) => (
    <div className="registration-container container">
        <Card className={classes.card}>
            <PaperHeader className={classes.paperHeader}>
                <p className="h4 my-1">Update your password</p>
                <p className="my-1">Enter your Password</p>
            </PaperHeader>
            <article className="card-body mx-auto">
                <form autoComplete="off" className="pt-2">
                    <Grid
                        container
                        alignItems="flex-end"
                        className="mt-3 mb-2"
                    >
                        <Grid item sm={1}>
                            <Lock className="text-muted" />
                        </Grid>
                        <Grid item sm={11} className="fullWidth">
                            <TextField
                                id="reset-input-password"
                                name="password"
                                type="password"
                                value={resetPassword.password}
                                fullWidth
                                onChange={updateFormValues}
                                label="Old Password"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems="flex-end"
                        className="mb-2"
                    >
                        <Grid item sm={1}>
                            <Lock className="text-muted" />
                        </Grid>
                        <Grid item sm={11} className="fullWidth">
                            <TextField
                                id="reset-input-new-password"
                                name="newPassword"
                                type="password"
                                value={resetPassword.newPassword}
                                fullWidth
                                onChange={updateFormValues}
                                label="New Password"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems="flex-end"
                        className="mb-2"
                    >
                        <Grid item sm={1}>
                            <Lock className="text-muted" />
                        </Grid>
                        <Grid item sm={11} className="fullWidth">
                            <TextField
                                id="reset-input-confirm-password"
                                name="confirmPassword"
                                type="password"
                                value={resetPassword.confirmPassword}
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
                        id="btn-submit"
                        disabled={!resetPassword.newPassword || !resetPassword.confirmPassword || !resetPassword.password || resetPassword.newPassword !== resetPassword.confirmPassword}
                        className="btn-block mt-5 mb-3"
                        onClick={handleResetPassword}
                    >
                  Submit
                    </Button>
                </form>
            </article>
        </Card>
    </div>
);


ResetPassword.propTypes = {
    resetPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    handleResetPassword: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResetPassword);

