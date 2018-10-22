import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { ListItems } from './Options';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class Drawer extends Component {
    render() {
        const { classes, shouldOpenDrawer, toggleDrawer } = this.props;
        const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

        return (
            <div>
                <SwipeableDrawer
                    open={shouldOpenDrawer}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    anchor="right"
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <div className={classes.list}>
                            <ListItems getActiveTab={this.props.getActiveTab} />
                        </div>
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
    shouldOpenDrawer: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    getActiveTab: PropTypes.func,
};

export default withStyles(styles)(Drawer);
