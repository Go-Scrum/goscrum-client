import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import NoData from './no-data';

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
            <NoData />
        </div>
    );
}

export default LandingPage;
