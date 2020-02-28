import React from 'react';
import { createStyles, Grid, Typography, Box, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
    createStyles({
        image: {
            maxWidth: '20rem',
        },
    }),
);

function OnBoardingSection() {
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
            <CssBaseline />
            <Box align="center" paddingX={20} paddingY={10}>
                <img alt="landing" src="/images/onboard.svg" className={classes.image}/>
                <Box marginY={3}>
                    <Typography variant="h5">Start with Project Creation</Typography>
                </Box>
                <Box marginY={3} paddingX={15}>
                    <Typography variant="subtitle1">This is Projects Dashboard, Where you create and manage your Projects. We are
                        very excited to have you and your team onboard. <br/> So, let's get started.</Typography>
                </Box>
                <Box>
                    <Button
                        onClick={() => {
                        }}
                        color="primary"
                        variant="outlined"
                        className={classes.submit}
                    >
                        Create Project
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}

export default OnBoardingSection;
