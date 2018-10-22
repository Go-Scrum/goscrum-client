import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        padding: 15,
        marginTop: -30,
        marginBottom: 0,
        borderRadius: 3,
        position: 'relative',
        color: '#fff',
        background: theme.palette.secondary.main,
        margin: 'auto',
    },
});

function PaperHeader(props) {
    const { classes, children, className } = props;

    return (
        <Paper className={`${classes.root} ${className}`} elevation={3}>
            {children}
        </Paper>
    );
}

PaperHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default withStyles(styles)(PaperHeader);
