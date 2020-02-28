import React from 'react';
import { createStyles, Grid, Typography, Box, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import AppIcon from '../Shared/AppIcon/app-icon';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
    createStyles({
        image: {
            maxWidth: '20rem',
        },
    }),
);

function OnBoardingSection({ history }) {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            xs={12}
            alignItems="center"
            justify="center"
            className={classes.grid}
        >
            <CssBaseline/>
            <Box align="center" paddingX={20} paddingY={10}>
                <img alt="landing" src="/images/onboard.svg" className={classes.image}/>
                <Box marginY={3}>
                    <Typography variant="h5">Welcome on board!</Typography>
                </Box>
                <Box marginY={3} paddingX={15}>
                    <Typography variant="subtitle1">This is Dashboard, Where you create and manage your Standups. We are
                        very excited to have you and your team onboard. <br/> So, let's get started.</Typography>
                </Box>
                <Box>
                    <Button
                        onClick={() => history.push('/settings')}
                        color="primary"
                        variant="outlined"
                        className={classes.submit}
                    >
                        Lets get Started!
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}

export default withRouter(OnBoardingSection);
