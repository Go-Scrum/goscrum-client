import React, { Component } from 'react';
import { styled, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth } from 'aws-amplify';
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    MenuItem,
    Menu,
} from '@material-ui/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MainMenu from './main-menu';
import AppIcon from '../AppIcon/app-icon';
import Loader from '../Loader';
import { LOADER_TYPE } from '../../../utils/Constants';

const drawerWidth = 250;

const StyledMain = styled(Box)({
    flexGrow: 1,
    overflowY: 'auto',
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        getContentAnchorEl={null}
        elevation={0}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        {...props}
    />
));

class PageLayout extends Component {
    // static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            openEl: null,
            loading: false,
            user: null,
        };
    }

    async componentDidMount() {
        const { user } = this.state;
        if (!user) {
            const cognitoUser = await Auth.currentAuthenticatedUser();
            this.setState({ user: cognitoUser.attributes });
        }
    }

    handleClick = (event) => {
        this.setState({
            openEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            openEl: null,
        });
    };

    signOut = async () => {
        const { signOut } = this.props;
        this.handleClose();
        this.setState({
            loading: true,
        });
        signOut();
    };

    renderProfile() {
        const { openEl, user } = this.state;
        return (
            <List>
                <ListItem button onClick={this.handleClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <AppIcon icon={faUser}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        aria-controls="user-menu"
                        aria-haspopup="true"
                        style={{ position: 'relative' }}
                        secondary="Current User"
                    >
                        <span title={user ? user.given_name : ''}>{user ? user.given_name : ''}</span>
                    </ListItemText>
                </ListItem>
                <StyledMenu
                    id="user-menu"
                    anchorEl={openEl}
                    open={Boolean(openEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.signOut}>Sign out</MenuItem>
                </StyledMenu>
            </List>
        );
    }

    render() {
        const { children } = this.props;
        const { loading } = this.state;
        return (
            <Box component="div" display="flex" height="100vh" width="100%">
                <CssBaseline/>
                <Box
                    flexGrow={0}
                    display="flex"
                    flexDirection="column"
                    borderRight="1px solid rgba(0, 0, 0, 0.12)"
                    justifyContent="space-between"
                >
                    <Box width={drawerWidth}>
                        <MainMenu/>
                    </Box>
                    {this.renderProfile()}
                </Box>
                <StyledMain component="main">
                    {/* <StyledAppBar position="static"> */}
                    {/*  <Toolbar> */}
                    {/*    <Typography variant="h6" color="inherit" noWrap> */}
                    {/*      {appBarContent || pageTitle} */}
                    {/*    </Typography> */}
                    {/*  </Toolbar> */}
                    {/* </StyledAppBar> */}
                    {/* <StyledToolbar component="div"/> */}
                    <Box padding={2}>{children}</Box>
                </StyledMain>
                {loading && <Loader type={LOADER_TYPE.fullView}/>}
            </Box>
        );
    }
}

export default PageLayout;
