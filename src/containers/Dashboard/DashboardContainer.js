import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { makeSelectUser } from '../App/selectors';
import Dashboard from '../../components/Dashboard';

class DashboardContainer extends React.Component {
    render() {
        return (
            <Dashboard/>
        );
    }
}

DashboardContainer.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = createSelector(
    [makeSelectUser()],
    (user) => ({
        user,
    }),
);

export default connect(mapStateToProps, null)(DashboardContainer);
