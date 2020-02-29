import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NoData from './no-data';
import AppIcon from '../Shared/AppIcon/app-icon';
import Project from './Project';

const useStyles = makeStyles(() => createStyles({
        container: {
            marginTop: '2rem',
        },
    }),
);

const Projects = ({ projects }) => {
    const classes = useStyles();

    console.log(projects);

    if (!(projects && projects.length > 0)) {
        return <NoData/>;
    }

    return (
        <Grid container xs={12} item className={classes.container}>
            <Grid container xs={12} item justify="space-between">
                <Grid item>
                    <Typography variant="h4">Projects</Typography>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => {
                        }}
                        color="primary"
                        variant="outlined"
                        className={classes.submit}
                    >
                        <AppIcon icon={faPlus} wideRightMargin/>
                        {' '}
                        Create Project
                    </Button>
                </Grid>
            </Grid>
            <Grid container xs={12} item>
                {projects.map((project, index) => (
                    <Project project={project} key={index}/>
                ))}
            </Grid>
        </Grid>
    );
};

export default Projects;
