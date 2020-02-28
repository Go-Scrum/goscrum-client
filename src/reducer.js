import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import forgotPasswordReducer from './containers/Settings/reducer';
import resetPasswordReducer from './containers/Projects/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    app: appReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
});

export default createRootReducer;
