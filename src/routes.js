import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import SettingsContainer from './containers/Settings';
import ProjectsContainer from './containers/Projects';
import NotFound from './containers/NotFound';
import ProtectedRoute from './ProtectedRoutes';
import { history } from './store';

const Routes = ({ childProps }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <ProtectedRoute path="/" exact component={Home} childProps={childProps} />
            <ProtectedRoute path="/login" exact component={Login} childProps={childProps} />
            <ProtectedRoute path="/login/:username/:password" component={Login} childProps={childProps} />
            <ProtectedRoute path="/settings" exact component={SettingsContainer} childProps={childProps} withAuth />
            <ProtectedRoute path="/dashboard" exact component={Dashboard} childProps={childProps} withAuth />
            <ProtectedRoute path="/projects" exact component={ProjectsContainer} childProps={childProps} withAuth />
            <Route path="*" component={NotFound} />
        </Switch>
    </ConnectedRouter>
);

export default Routes;

Routes.propTypes = {
    childProps: PropTypes.object,
};
