import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { toast } from 'react-toastify';
import { Auth } from 'aws-amplify';
import Loader from '../../components/Shared/Loader';
import Login from '../../components/Login';
import * as actions from './actions';
import * as appActions from '../App/actions';
import { makeSelectIsFetching, makeSelectLogin } from './selectors';
import { attributesToObject } from '../../utils/attributesToObject';
import { NotAuthorizedException } from './constants';

class LoginContainer extends React.Component {
    constructor(props) {
        super();
        if (props.isAuthenticated) {
            props.history.push('/dashboard');
        }
        this.state = {
            cognitoUser: null,
            isFirstTimeLogin: false,
            urlParamUsername: '',
            urlParamPassword: '',
        };
    }

    componentWillMount() {
        this.props.resetState();
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params && params.username && params.password) {
            this.setState({
                urlParamUsername: params.username,
                urlParamPassword: params.password,
            }, () => {
                this.handleLogin();
                this.props.updateFormValues({
                    email: params.username,
                    password: params.password,
                });
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            nextProps.history.push('/dashboard');
        }
    }

    onLoginSuccess = (user) => {
        const { toggleLoader } = this.props;
        toggleLoader(false);
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.setState({ cognitoUser: user, isFirstTimeLogin: true });
            return;
        }
        this.redirectOnLogin(user);
    };

    onLoginError = (error) => {
        const { toggleLoader } = this.props;
        toggleLoader(false);
        const errorMessage = typeof error === 'string' ? error : error.message;
        if (this.state.urlParamUsername && this.state.urlParamPassword && error.code === NotAuthorizedException && !this.state.isFirstTimeLogin) {
            toast.error('This user is already registered.', { className: 'toast-error' });
            this.props.resetState();
        } else if (!this.state.isFirstTimeLogin && !this.state.urlParamUsername && !this.state.urlParamPassword) {
            toast.error(errorMessage, { className: 'toast-error' });
            this.props.resetState();
        } else {
            toast.error(errorMessage, { className: 'toast-error' });
            this.props.resetPassword();
            return;
        }
        this.resetState();
        this.props.history.push('/login');
    };

    redirectOnLogin = async (user) => {
        let currentUser;
        this.resetState();
        this.props.userHasAuthenticated(true);
        try {
            const cognitoUserInfo = await Auth.userAttributes(user);
            currentUser = attributesToObject(cognitoUserInfo);
            toast.error('Login successful', { className: 'toast-success' });
            this.props.updateUser(currentUser);
        } catch (e) {
            // TODO: Handle this error
            console.log('error in getting user');
        }
        this.props.history.push('/dashboard');
    };

    resetState = () => {
        this.setState({
            cognitoUser: null,
            isFirstTimeLogin: false,
            urlParamUsername: '',
            urlParamPassword: '',
        });
    };

    submitChangePassword = () => {
        const { toggleLoader, login: { newPassword } } = this.props;
        const { cognitoUser } = this.state;
        toggleLoader(true);
        Auth.completeNewPassword(cognitoUser, newPassword, cognitoUser.challengeParam.requiredAttributes)
            .then(user => this.redirectOnLogin(user))
            .catch(err => this.onLoginError(err));
    };

    handleLogin = (e) => {
        if (e) {
            e.preventDefault();
        }
        if (this.state.isFirstTimeLogin) {
            this.submitChangePassword();
            return;
        }
        const { login: { email, password }, toggleLoader } = this.props;
        toggleLoader(true);
        const Username = email || this.state.urlParamUsername;
        const Password = password || this.state.urlParamPassword;
        Auth.signIn(Username, Password)
            .then(user => this.onLoginSuccess(user))
            .catch(err => this.onLoginError(err));
    };

    render() {
        const { login, updateFormValues } = this.props;
        const { isFirstTimeLogin } = this.state;
        return (
            <div>
                <Login
                    login={login}
                    updateFormValues={updateFormValues}
                    handleLogin={this.handleLogin}
                    isFirstTimeLogin={isFirstTimeLogin}
                />
                {/*<Loader timedOut={this.props.isFetching || this.props.isAuthenticated} />*/}
            </div>
        );
    }
}

LoginContainer.propTypes = {
    isFetching: PropTypes.bool,
    login: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    userHasAuthenticated: PropTypes.func.isRequired,
    toggleLoader: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    updateUser: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching(), makeSelectLogin()],
    (isFetching, login) => ({
        isFetching,
        login,
    })
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
            ...appActions,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
