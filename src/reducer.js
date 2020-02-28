import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import forgotPasswordReducer from './containers/ForgotPassword/reducer';
import resetPasswordReducer from './containers/ResetPassword/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    app: appReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
});

export default createRootReducer;
