import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import If from '../Shared/If';
import PaperHeader from '../Shared/PaperHeader';

import './style.css';

const styles = theme => ({
    cardLogin: {
        width: 400,
        height: 500,
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
    cardFirstTimeLogin: {
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
    forgotPassword: {
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

class Login extends Component {
    updateFormValues = (e) => {
        const { name, value } = e.target;
        this.props.updateFormValues({ [name]: value });
    };

    render() {
        const { login, handleLogin, classes, isFirstTimeLogin } = this.props;
        return (
            <div className="registration-container container">
                <Card className={isFirstTimeLogin ? `${classes.cardFirstTimeLogin}` : `${classes.cardLogin}`} raised>
                    <PaperHeader className={classes.paperHeader}>
                        <p className="h4 my-1">Sign In</p>
                        <p className="my-1">with your ReactAWSStarterKit Account</p>
                    </PaperHeader>
                    <div className="card-body mx-auto">
                        <form autoComplete="off">
                            <Grid
                                container
                                alignItems="flex-end"
                                className="mt-5"
                            >
                                <Grid item sm={1}>
                                    <AccountCircle className="text-muted" />
                                </Grid>
                                <Grid item sm={11} className="fullWidth">
                                    <TextField
                                        id="input-email"
                                        type="email"
                                        label="Email or Username"
                                        fullWidth
                                        name="email"
                                        value={login.email}
                                        disabled={isFirstTimeLogin}
                                        onChange={this.updateFormValues}
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                alignItems="flex-end"
                                className="my-2"
                            >
                                <Grid item sm={1}>
                                    <Lock className="text-muted" />
                                </Grid>
                                <Grid item sm={11} className="fullWidth">
                                    <TextField
                                        id="input-password"
                                        name="password"
                                        type="password"
                                        disabled={isFirstTimeLogin}
                                        value={login.password}
                                        fullWidth
                                        onChange={this.updateFormValues}
                                        label="Password"
                                    />
                                </Grid>
                            </Grid>
                            <If condition={isFirstTimeLogin}>
                                <div>
                                    <Grid
                                        container
                                        alignItems="flex-end"
                                        className="my-2"
                                    >
                                        <Grid item sm={1}>
                                            <Lock className="text-muted" />
                                        </Grid>
                                        <Grid item sm={11} className="fullWidth">
                                            <TextField
                                                id="input-new-password"
                                                name="newPassword"
                                                type="password"
                                                value={login.newPassword}
                                                fullWidth
                                                onChange={this.updateFormValues}
                                                label="New Password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        alignItems="flex-end"
                                        className="my-2"
                                    >
                                        <Grid item sm={1}>
                                            <Lock className="text-muted" />
                                        </Grid>
                                        <Grid item sm={11} className="fullWidth">
                                            <TextField
                                                id="input-confirm-password"
                                                name="confirmPassword"
                                                type="password"
                                                value={login.confirmPassword}
                                                fullWidth
                                                onChange={this.updateFormValues}
                                                label="Confirm Password"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </If>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                id="btn-login"
                                disabled={isFirstTimeLogin ? (!login.email || !login.password || !login.newPassword || !login.confirmPassword || (login.newPassword !== login.confirmPassword)) : (!login.email || !login.password)}
                                className="btn-block mt-5 mb-3"
                                onClick={handleLogin}
                            >
                                {isFirstTimeLogin ? 'Submit' : 'Login'}
                            </Button>
                            <If condition={!isFirstTimeLogin}>
                                <Button
                                    component={Link}
                                    to="/forgot-password"
                                    id="btn-forgot-password"
                                    className={classes.forgotPassword}
                                    size="small"
                                    color="primary"
                                >Forgot password?
                                </Button>
                            </If>
                        </form>
                    </div>
                </Card>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    isFirstTimeLogin: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Login);

