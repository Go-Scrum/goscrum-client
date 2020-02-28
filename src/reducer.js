import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import settingsReducer from './containers/Settings/reducer';
import resetPasswordReducer from './containers/Projects/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    app: appReducer,
    login: loginReducer,
    settings: settingsReducer,
    resetPassword: resetPasswordReducer,
});

export default createRootReducer;
