import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NoData from './no-data';
import AppIcon from '../Shared/AppIcon/app-icon';
import Project from './Project';
import AppLink from '../Shared/AppLink/app-link';

const useStyles = makeStyles(() => createStyles({
    container: {
        marginTop: '2rem',
    },
    gridBox: {
        maxHeight: '85vh',
        overflowY: 'auto',
        padding: '1rem',
    },
    gridTitle: {
        margin: '0 0 1rem 0',
        padding: '1rem',
    },
    applink: {
        display: 'block',
        width: '100%',
    },
}),
);

const Projects = ({ projects }) => {
    const classes = useStyles();

    if (!(projects && projects.length > 0)) {
        return <NoData />;
    }

    return (
        <Grid container xs={12} item className={classes.container}>
            <Grid container xs={12} item justify="space-between" className={classes.gridTitle}>
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
                        <AppIcon icon={faPlus} wideRightMargin />
                        {' '}
                        Create Project
                    </Button>
                </Grid>
            </Grid>
            <Grid container xs={12} item className={classes.gridBox}>
                {projects.map((project, index) => (
                    <AppLink to={`/projects/${project.id}`} key={index} className={classes.applink}>
                        <Project project={project} />
                    </AppLink>
                ))}
            </Grid>
        </Grid>
    );
};

export default Projects;
