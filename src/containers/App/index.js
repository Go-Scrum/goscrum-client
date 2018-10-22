import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';

import Header from '../HeaderContainer';
import Footer from '../../components/Shared/Footer';
import If from '../../components/Shared/If';
import { makeSelectUser } from './selectors';

const App = ({ children, displayHeader, childProps, user }) => (
    <div className="site">
        <If condition={displayHeader} >
            <Header childProps={childProps} user={user} />
        </If>
        <main className="site-content">{React.cloneElement(children, [])}</main>
        <If condition={displayHeader}>
            <Footer />
        </If>
    </div>
);

App.propTypes = {
    children: PropTypes.object,
    displayHeader: PropTypes.bool,
    childProps: PropTypes.object,
    user: PropTypes.object,
};

const mapStateToProps = createSelector(
    [makeSelectUser()],
    (user) => ({
        user,
    })
);

export default withRouter(connect(mapStateToProps, null)(App));
