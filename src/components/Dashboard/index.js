import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import OnBoardingSection from './on-boarding';

const useStyles = makeStyles(() => createStyles({
    container: {
        position: 'relative',
        '&::-webkit-scrollbar': {
            width: 0,
            background: 'transparent',
        },
        maxWidth: '100%',
    },
}),
);

function LandingPage() {
    const classes = useStyles();

    return (
        <div id="home" className={classes.container}>
            <OnBoardingSection />
        </div>
    );
}

export default LandingPage;
