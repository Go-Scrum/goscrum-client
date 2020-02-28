import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import Slide from '@material-ui/core/Slide';
import EmailWrapper from './EmailWrapper';
import VerificationCode from './VerificationCode';
import VerifyPassword from './VerifyPassword';
import { PAGES } from '../../containers/Settings/constants';
import If from '../Shared/If';
import PaperHeader from '../Shared/PaperHeader';


import './style.css';

const styles = theme => ({
    card: {
        width: 400,
        height: 500,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.between('xs', 'md')]: {
            width: '100%',
        },
    },
    forgotPassword: {
        textTransform: 'none',
        paddingLeft: 20,
        paddingRight: 20,
    },
    paperHeader: {
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        top: 70,
        zIndex: 999,
    },
});

const ForgotPassword = ({ forgotPassword, classes, handleForgotPassword, handleNext, selectedWrapper, submitChangePassword, updateFormValues }) => (
    <div className="registration-container container">
        <Card className={`${classes.card} trans-back`}>
            <PaperHeader className={classes.paperHeader}>
                <p className="h4 my-1">Find your password</p>
                <If condition={selectedWrapper === PAGES.EMAIL}>
                    <p className="my-1">Enter your email</p>
                </If>
                <If condition={selectedWrapper === PAGES.VERIFICATION_CODE}>
                    <p className="my-1">Enter verification code</p>
                </If>
                <If condition={selectedWrapper === PAGES.CONFIRM_PASSWORD}>
                    <p className="my-1">Enter a new password</p>
                </If>
            </PaperHeader>
            <article className="card-body mx-auto">
                <Slide
                    direction="left"
                    in={selectedWrapper === PAGES.EMAIL}
                    timeout={0}
                    mountOnEnter
                    unmountOnExit
                >
                    <EmailWrapper
                        forgotPasswordStyle={classes.forgotPassword}
                        forgotPassword={forgotPassword}
                        updateFormValues={updateFormValues}
                        handleForgotPassword={handleForgotPassword}
                    />
                </Slide>
                <Slide
                    direction="left"
                    in={selectedWrapper === PAGES.VERIFICATION_CODE}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                    <VerificationCode
                        forgotPassword={forgotPassword}
                        handleNext={handleNext}
                        updateFormValues={updateFormValues}
                    />
                </Slide>
                <Slide
                    direction="left"
                    in={selectedWrapper === PAGES.CONFIRM_PASSWORD}
                    timeout={1500}
                    mountOnEnter
                    unmountOnExit
                >
                    <VerifyPassword
                        forgotPassword={forgotPassword}
                        updateFormValues={updateFormValues}
                        submitChangePassword={submitChangePassword}
                    />
                </Slide>
            </article>
        </Card>
    </div>
);


ForgotPassword.propTypes = {
    forgotPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    handleForgotPassword: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    handleNext: PropTypes.func.isRequired,
    selectedWrapper: PropTypes.string.isRequired,
    submitChangePassword: PropTypes.func.isRequired,
};

export default withStyles(styles)(ForgotPassword);

