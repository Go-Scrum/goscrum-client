import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Amplify, { Auth } from 'aws-amplify';
import { Auth, Hub } from 'aws-amplify';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { configureCognito } from './utils/aws';
import Routes from './routes';
import * as actions from './containers/App/actions';
import theme from './utils/mui-theme';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true,
        };
    }

    async componentDidMount() {
        Auth.currentAuthenticatedUser().then(async user => {
            this.signIn(user);
        }).catch(async e => {
            this.setState({ isAuthenticating: false });
        });

        Hub.listen('auth', async (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    this.signIn(await Auth.currentAuthenticatedUser());
                    break;
                case 'signIn_failure':
                    // setAuthState('signIn');
                    // setAuthError('Authentication failed.');
                    this.setState({ isAuthenticating: false, isAuthenticated: false });
                    break;
                default:
                    break;
            }
        });
    }

    componentWillUnmount() {
        Hub.remove('auth');
    }

    signIn = async authData => {
        configureCognito(authData.signInUserSession.idToken.jwtToken);
        // setAuthState('signedIn');
        this.setState({
            isAuthenticated: true,
            isAuthenticating: false,
        });
    };

    signOut = async () => {
        await Auth.signOut().promise();
        this.setState({
            isAuthenticated: false,
            isAuthenticating: false,
        });
    };

    userHasAuthenticated = isAuthenticated => {
        this.setState({ isAuthenticated });
    };

    render() {
        const { isAuthenticated, isAuthenticating } = this.state;
        const childProps = {
            isAuthenticated,
            isAuthenticating,
            userHasAuthenticated: this.userHasAuthenticated,
            signOut: this.signOut,
        };
        return (
            <MuiThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <div className="container container-fluid">
                        <CssBaseline/>
                        {!isAuthenticating && <Routes childProps={childProps}/>}
                        <ToastContainer
                            position="top-right"
                            type="default"
                            autoClose={5000}
                            className="toast"
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover
                        />
                    </div>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }
}


App.propTypes = {
    updateUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
        },
        dispatch,
    );

export default connect(null, mapDispatchToProps)(App);
