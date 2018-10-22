import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import forgotPasswordReducer from './containers/ForgotPassword/reducer';
import resetPasswordReducer from './containers/ResetPassword/reducer';

export default combineReducers({
    app: appReducer,
    routing: routerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
});
