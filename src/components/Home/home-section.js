import React from 'react';
import { createStyles, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        image: {
            width: '90%',
        },
        grid: {
            margin: '5em 0',
        },
    }),
);

function Section(props) {
    const classes = useStyles();
    const { title, byline, image, imageLeft = false } = props;

    return (
        <Grid
            item
            container
            xs={8}
            direction={imageLeft ? 'row-reverse' : 'row'}
            justify="space-between"
            alignItems="center"
            className={classes.grid}
        >
            <Grid item xs={12} md={4}>
                <Typography variant="h5">{title}</Typography>
                {byline && <Typography variant="subtitle1">{byline}</Typography>}
            </Grid>
            <Grid item xs={12} md={4}>
                <img alt="landing" src={image} className={classes.image}/>
            </Grid>
        </Grid>
    );
}

export default Section;
