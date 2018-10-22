import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PaperHeader from '../PaperHeader';

const styles = theme => ({
    root: {
        padding: 15,
        marginTop: 15,
        position: 'relative',
    },
});

const CardWithHeader = ({ classes, children, headerText }) => (
    <div>
        <Paper className={classes.root}>
            <PaperHeader>
                {headerText}
            </PaperHeader>
            {children}
        </Paper>
    </div>
);


CardWithHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    headerText: PropTypes.string,
    children: PropTypes.node,
};

export default withStyles(styles)(CardWithHeader);
