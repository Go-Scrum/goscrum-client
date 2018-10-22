import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Work from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';
import { TABS } from '../../../utils/Constants';

export const ListItems = ({ getActiveTab }) => (
    <List>
        <ListItem
            button
            component={Link}
            className={getActiveTab() === TABS.DASHBOARD ? 'active' : ''}
            to="/dashboard"
        >
            <ListItemIcon>
                <Work />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
    </List>
);

ListItems.propTypes = {
    getActiveTab: PropTypes.func,
};
