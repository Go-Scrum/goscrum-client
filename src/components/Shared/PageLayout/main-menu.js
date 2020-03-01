import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    createStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTachometerAlt,
    faCog,
    faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

import AppLink from '../AppLink/app-link';
import theme from '../../../utils/mui-theme';

const StyledListItemText = styled(ListItemText)({
    '& span': {
        fontSize: '0.9rem',
        color: theme.palette.common.white,
    },
});

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)({
    fontSize: '0.9rem',
});

const useStyles = makeStyles(() => createStyles({
    logo: {
        maxWidth: 200,
    },
    logoWrapper: {
        marginBottom: 10,
    },
    selected: {
        color: theme.palette.primary.main,
        backgroundColor: 'rgba(255, 255, 255, 0.00) !important',
        borderLeft: `2px solid ${theme.palette.primary.main}`,
    },
}),
);

function MainMenuContent({ location }) {
    const pathParts = location.pathname.match(/^\/([a-zA-Z-]+)/i);
    // const authContext = useContext(AuthContext);
    let basePath = '/';
    if (pathParts && pathParts.length && pathParts.length > 0) {
        basePath = pathParts[0];
    }
    const classes = useStyles();
    return (
        <List>
            <AppLink to="/dashboard">
                <ListItem className={classes.logoWrapper}>
                     <img src="/images/logo.png" alt="logo" className={classes.logo} />
                </ListItem>
            </AppLink>
            <AppLink to="/dashboard">
                <ListItem
                    button
                    selected={basePath === '/dashboard'}
                    className={basePath === '/dashboard' ? classes.selected : ''}
                >
                    <ListItemIcon>
                        <StyledFontAwesomeIcon icon={faTachometerAlt} fixedWidth />
                    </ListItemIcon>
                    <StyledListItemText primary="On Boarding" />
                </ListItem>
            </AppLink>
            <AppLink to="/projects">
                <ListItem
                    button
                    selected={basePath === '/projects'}
                    className={basePath === '/projects' ? classes.selected : ''}
                >
                    <ListItemIcon>
                        <StyledFontAwesomeIcon icon={faProjectDiagram} fixedWidth />
                    </ListItemIcon>
                    <StyledListItemText primary="Projects" />
                </ListItem>
            </AppLink>
            <AppLink to="/settings">
                <ListItem
                    button
                    selected={basePath === '/settings'}
                    className={basePath === '/settings' ? classes.selected : ''}
                >
                    <ListItemIcon>
                        <StyledFontAwesomeIcon icon={faCog} fixedWidth />
                    </ListItemIcon>
                    <StyledListItemText primary="Settings" />
                </ListItem>
            </AppLink>
            <AppLink to="/gitlab">
                <ListItem
                    button
                    selected={basePath === '/gitlab'}
                    className={basePath === '/gitlab' ? classes.selected : ''}
                >
                    <ListItemIcon>
                        <StyledFontAwesomeIcon icon={faCog} fixedWidth />
                    </ListItemIcon>
                    <StyledListItemText primary="Git Lab" />
                </ListItem>
            </AppLink>
        </List>
    );
}

export default withRouter(MainMenuContent);
