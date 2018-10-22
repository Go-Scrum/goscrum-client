import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { toast } from 'react-toastify';
import { Auth } from 'aws-amplify';
import Loader from '../../components/Shared/Loader';
import ForgotPassword from '../../components/ForgotPassword';

import * as actions from './actions';
import { makeSelectLogin } from '../Login/selectors';
import { makeSelectIsFetching, makeSelectForgotPassword } from './selectors';

import { PAGES } from './constants';

class ForgotPasswordContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedWrapper: PAGES.EMAIL,
        };
    }

    componentDidMount() {
        this.props.updateFormValues({ email: this.props.login.email });
    }

    componentWillUnmount() {
        this.props.resetState();
    }

    onPasswordChangeSuccess = (result) => {
        const { toggleLoader, history } = this.props;
        toggleLoader(false);
        toast.error('Password updated successfully.', { className: 'toast-success' });
        history.push('/login');
    };

    onPasswordChangeFailure = (error) => {
        const { toggleLoader } = this.props;
        toggleLoader(false);
        this.handleNext(PAGES.EMAIL);
        const errorMessage = typeof error === 'string' ? error : error.message;
        toast.error(errorMessage, { className: 'toast-error' });
    };

    onSubmitUserName = (data) => {
        this.props.toggleLoader(false);
        toast.info('Verification Email has been sent to your registered Email.', { className: 'toast-info' });
        this.handleNext(PAGES.VERIFICATION_CODE);
    };

    handleNext = (selectedWrapper) => {
        this.setState({ selectedWrapper });
    };

    updateFormValues = (e) => {
        const { name, value } = e.target;
        this.props.updateFormValues({ [name]: value });
    };

    handleForgotPassword = (e) => {
        e.preventDefault();
        const { forgotPassword: { email }, toggleLoader } = this.props;
        toggleLoader(true);
        Auth.forgotPassword(email)
            .then(data => this.onSubmitUserName(data))
            .catch(err => this.onPasswordChangeFailure(err));
    };

    submitChangePassword = (e) => {
        e.preventDefault();
        const { forgotPassword, toggleLoader } = this.props;
        toggleLoader(true);
        Auth.forgotPasswordSubmit(forgotPassword.email, forgotPassword.verificationCode, forgotPassword.password)
            .then(data => this.onPasswordChangeSuccess(data))
            .catch(err => this.onPasswordChangeFailure(err));
    };

    render() {
        const { forgotPassword } = this.props;
        const { selectedWrapper } = this.state;
        return (
            <div>
                <ForgotPassword
                    forgotPassword={forgotPassword}
                    updateFormValues={this.updateFormValues}
                    handleForgotPassword={this.handleForgotPassword}
                    handleNext={this.handleNext}
                    selectedWrapper={selectedWrapper}
                    submitChangePassword={this.submitChangePassword}
                />
                <Loader timedOut={this.props.isFetching} />
            </div>
        );
    }
}

ForgotPasswordContainer.propTypes = {
    isFetching: PropTypes.bool,
    login: PropTypes.object,
    forgotPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    toggleLoader: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching(), makeSelectLogin(), makeSelectForgotPassword()],
    (isFetching, login, forgotPassword) => ({
        isFetching,
        login,
        forgotPassword,
    })
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
