import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Amplify, { Auth } from 'aws-amplify';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import Loader from './components/Shared/Loader';
import { ENDPOINT } from './middleware/constants';
import * as actions from './containers/App/actions';
import { attributesToObject } from './utils/attributesToObject';
import theme from './utils/mui-theme';

Amplify.configure({
    Auth: {
        region: process.env.REACT_APP_USER_POOL_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID, // OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: process.env.REACT_APP_USER_CLIENT_ID, // OPTIONAL - Amazon Cognito Web Client ID
        identityPoolId: process.env.REACT_APP_USER_IDENTITY_PROVIDER_ID,
    },
    API: {
        endpoints: [
            {
                name: ENDPOINT,
                endpoint: process.env.REACT_APP_API_ENDPOINT,
            },
        ],
    },
});

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#11131b',
//             light: '#757575',
//             contrastText: '#fff',
//         },
//         secondary: {
//             main: '#929292',
//             contrastText: '#fff',
//         },
//         // background:{
//         //     paper: '#757575',
//         // },
//         common: {
//             black: '#000',
//             white: '#fff',
//         },
//     },
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 576,
//             md: 768,
//             lg: 992,
//             xl: 1200,
//         },
//     },
// });

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true,
        };
    }

    async componentWillMount() {
        let currentUser;
        try {
            if (await Auth.currentSession()) {
                this.userHasAuthenticated(true);
                try {
                    const currentUserInfo = await Auth.currentAuthenticatedUser();
                    const cognitoUserInfo = await Auth.userAttributes(currentUserInfo);
                    currentUser = attributesToObject(cognitoUserInfo);
                    this.props.updateUser(currentUser);
                } catch (e) {
                    console.log('error in getting user');
                }
            }
        } catch (e) {
            if (e !== 'No current user') {
                console.log(e);
            }
        }
        this.setState({ isAuthenticating: false });
    }

    userHasAuthenticated = isAuthenticated => {
        this.setState({ isAuthenticated });
    };

    render() {
        const { isAuthenticated, isAuthenticating } = this.state;
        const childProps = {
            isAuthenticated,
            isAuthenticating,
            userHasAuthenticated: this.userHasAuthenticated,
        };
        return (
            <MuiThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <div className="container container-fluid">
                        {!isAuthenticating && <Routes childProps={childProps} />}
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
                        <Loader timedOut={isAuthenticating} />
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
        dispatch
    );

export default connect(null, mapDispatchToProps)(App);

