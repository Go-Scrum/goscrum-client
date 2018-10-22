import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Shared/Header';

class HeaderContainer extends React.Component {
    render() {
        const { childProps, user, history, location } = this.props;
        return (
            <Header
                user={user}
                childProps={childProps}
                history={history}
                location={location}
            />
        );
    }
}

HeaderContainer.propTypes = {
    childProps: PropTypes.object.isRequired,
    user: PropTypes.object,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};

export default withRouter(connect(null, null)(HeaderContainer));
