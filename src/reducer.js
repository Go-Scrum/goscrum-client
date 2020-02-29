import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import settingsReducer from './containers/Settings/reducer';
import projectsReducer from './containers/Projects/reducer';
import projectReducer from './containers/Project/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    app: appReducer,
    login: loginReducer,
    settings: settingsReducer,
    projects: projectsReducer,
    project: projectReducer,
});

export default createRootReducer;
