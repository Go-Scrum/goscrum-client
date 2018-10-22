import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        padding: 15,
        marginTop: 15,
        position: 'relative',
    },
    responsiveEdit: {
        position: 'absolute',
        top: 0,
        right: 15,
    },
});


const NoDataRow = ({ classes }) => (
    <Paper className={classes.root} elevation={2}>
        <Grid container>
            <Grid item xs={12}>
                <Typography gutterBottom variant="body2" className="text-center">
                    No Data Available
                </Typography>
            </Grid>
        </Grid>
    </Paper>
);


NoDataRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoDataRow);
