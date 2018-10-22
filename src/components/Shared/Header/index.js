import React from 'react';
import PropTypes from 'prop-types';
import { Auth, Cache } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from './Drawer';
import { ROUTE_TABLE, TABS } from '../../../utils/Constants';
import './style.css';
import { ListItems } from './Options';

const styles = {
    root: {
        flexGrow: 1,
        paddingTop: 100,
        zIndex: 3,
    },
    flex: {
        flexGrow: 1,
    },
};

class Header extends React.Component {
  state = {
      anchorEl: null,
      shouldOpenDrawer: false,
  };

  getActiveTab = () => {
      switch (true) {
          case this.props.location.pathname.includes(ROUTE_TABLE.dashboard):
              return TABS.DASHBOARD;
          default:
              return null;
      }
  };

  handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
      this.setState({ anchorEl: null });
  };

  handleLogout = () => {
      const { childProps: { userHasAuthenticated }, history } = this.props;
      Auth.signOut().then(() => {
          userHasAuthenticated(false);
          Cache.clear();
          history.push('/login');
      }).catch((error) => console.log('error in sign out', error));
      this.handleClose();
  };

  toggleDrawer = (shouldOpenDrawer) => () => {
      this.setState({
          shouldOpenDrawer,
      });
  };

  render() {
      const { classes, user } = this.props;
      const { anchorEl, shouldOpenDrawer } = this.state;
      const open = Boolean(anchorEl);
      return (
          <div className={`${classes.root} site-header`}>
              <AppBar position="fixed">
                  <Toolbar>
                      <img
                          src={require('../../../assets/images/logo.png')}
                          className="logo cursor-pointer"
                          alt="Logo"
                          onClick={() => this.props.history.push('/dashboard')}
                      />
                      <div className="desktop-menu mr-auto d-none d-lg-flex">
                          <ListItems getActiveTab={this.getActiveTab} />
                      </div>
                      <Typography variant="title" color="inherit" className={`${classes.flex} text-center d-lg-none header-title`}>
                          Header Title
                      </Typography>
                      <Typography variant="subheading" color="inherit" className="d-none d-lg-flex mr-2">
                          Username
                      </Typography>
                      <div>
                          <IconButton
                              aria-owns={open ? 'menu-appbar' : null}
                              aria-haspopup="true"
                              onClick={this.handleMenu}
                              color="inherit"
                          >
                              <AccountCircle />
                          </IconButton>
                          <IconButton
                              className="d-lg-none"
                              color="inherit"
                              onClick={this.toggleDrawer(true)}
                              aria-label="Menu"
                          >
                              <MenuIcon />
                          </IconButton>
                          <Menu
                              id="menu-appbar"
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              open={open}
                              onClose={this.handleClose}
                          >
                              <MenuItem
                                  className="justify-content-center text-dark opacity-none d-lg-none"
                                  disabled
                              >
                                  <strong>Username</strong>
                              </MenuItem>
                              <MenuItem
                                  onClick={this.handleClose}
                                  component={Link}
                                  to="/reset-password"
                              >Reset Password
                              </MenuItem>
                              <MenuItem
                                  onClick={this.handleLogout}
                              >Logout
                              </MenuItem>
                          </Menu>
                      </div>
                  </Toolbar>
              </AppBar>
              <Drawer
                  toggleDrawer={this.toggleDrawer}
                  shouldOpenDrawer={shouldOpenDrawer}
                  getActiveTab={this.getActiveTab}
                  user={user}
              />
          </div>
      );
  }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    childProps: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    user: PropTypes.object,
};

export default withStyles(styles)(Header);
