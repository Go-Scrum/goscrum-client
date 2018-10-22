import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';
import Loader from '../../components/Shared/Loader';
import ResetPassword from '../../components/ResetPassword';
import AmplifyMessageMap from './../../utils/AmplifyMessageMap';
import * as actions from './actions';
import { makeSelectIsFetching, makeSelectResetPassword } from './selectors';

class ResetPasswordContainer extends React.Component {
    componentWillUnmount() {
        this.props.resetState();
    }

    onPasswordChangeSuccess = (result) => {
        const { toggleLoader, history, userHasAuthenticated } = this.props;
        toggleLoader(false);
        toast.success('Password updated successfully.', { className: 'toast-success' });
        Auth.signOut().then(() => {
            userHasAuthenticated(false);
            history.push('/login');
        }).catch((error) => console.log('error in sign out', error));
    };

    onPasswordChangeFailure = (error) => {
        const { toggleLoader } = this.props;
        toggleLoader(false);
        toast.error(AmplifyMessageMap(error.message), { className: 'toast-error' });
        this.props.resetState();
    };

    updateFormValues = (e) => {
        const { name, value } = e.target;
        this.props.updateFormValues({ [name]: value });
    };

    handleResetPassword = (e) => {
        const { onPasswordChangeSuccess, onPasswordChangeFailure } = this;
        e.preventDefault();
        const { toggleLoader, resetPassword } = this.props;
        toggleLoader(true);
        Auth.currentAuthenticatedUser()
            .then(user => Auth.changePassword(user, resetPassword.password, resetPassword.newPassword))
            .then(data => onPasswordChangeSuccess(data))
            .catch(error => onPasswordChangeFailure(error));
    };

    render() {
        const { resetPassword } = this.props;
        return (
            <div>
                <ResetPassword
                    resetPassword={resetPassword}
                    updateFormValues={this.updateFormValues}
                    handleResetPassword={this.handleResetPassword}
                />
                <Loader timedOut={this.props.isFetching} />
            </div>
        );
    }
}

ResetPasswordContainer.propTypes = {
    isFetching: PropTypes.bool,
    resetPassword: PropTypes.object,
    updateFormValues: PropTypes.func.isRequired,
    toggleLoader: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    userHasAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching(), makeSelectResetPassword()],
    (isFetching, resetPassword) => ({
        isFetching,
        resetPassword,
    })
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);
