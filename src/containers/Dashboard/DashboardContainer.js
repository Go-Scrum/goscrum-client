import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { makeSelectUser } from '../App/selectors';

class DashboardContainer extends React.Component {
    render() {
        return (
            <div>
                <p>Logged in Dashboard</p>
            </div>
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
    })
);

export default connect(mapStateToProps, null)(DashboardContainer);
