import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContainer from './containers/App';

class ProtectedRoute extends React.Component {
    renderRoute = (props, Component, withAuth, childProps, displayHeader) => {
        if (withAuth && childProps.isAuthenticated && !childProps.isAuthenticating) {
            return (
                <div>
                    <AppContainer displayHeader={displayHeader} childProps={childProps}>
                        <div>
                            <Component {...props} {...childProps} />
                        </div>
                    </AppContainer>
                </div>
            );
        } else if (!withAuth && childProps.isAuthenticated && !childProps.isAuthenticating) {
            return <Redirect to={{ pathname: '/dashboard', state: { from: props.location, redirectURI: `${props.location.pathname}${props.location.search}` } }} />;
        } else if (withAuth && !childProps.isAuthenticated && !childProps.isAuthenticating) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location, redirectURI: `${props.location.pathname}${props.location.search}` } }} />;
        }
        return <Component {...props} {...childProps} />;
    };

    render() {
        const { component: Component, withAuth, childProps, displayHeader, ...rest } = this.props;
        return (
            <Route
                render={props => this.renderRoute(props, Component, withAuth, childProps, displayHeader)}
                {...rest}
            />
        );
    }
}


ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    rest: PropTypes.object,
    location: PropTypes.object,
    displayHeader: PropTypes.bool,
    childProps: PropTypes.object,
    withAuth: PropTypes.bool,
};

export default ProtectedRoute;
