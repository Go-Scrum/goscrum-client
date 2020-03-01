import React from 'react';
import { createStyles, Grid, Typography, Avatar, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import AppIcon from '../Shared/AppIcon/app-icon';
import PaperBox from '../Shared/PaperBox/paper-box';

const useStyles = makeStyles((theme) => createStyles({
    paperBox: {
        width: '100%',
        display: 'block',
        marginTop: '1rem',
        marginBottom: '1rem',
        '&:hover': {
            boxShadow: '0 5px 3px 0px rgba(255, 255,255,0.2), 0 0px 1px 1px rgba(255,255,255,0.14), 0 3px 5px 3px rgba(255,255,255,0.12)',
        },
    },
    avatar: {
        margin: '0 0.5rem',
    },
    chip: {
        margin: '1rem 0 0 0',
    },
}),
);

const Project = ({ project }) => {
    const classes = useStyles();

    return (
        <PaperBox className={classes.paperBox}>
            <Grid container xs={12}>
                <Typography variant="h5" gutterBottom>{project.name}</Typography>
            </Grid>
            <Grid container xs={12} item>
                <Grid xs={6} item>
                    <Typography
                        variant="body2"
                        gutterBottom
                    >
                        {`Weekly from Monday to Friday at ${project.deadline}`}
                    </Typography>
                    <Chip className={classes.chip} label={`#${project.channel_name}`} variant="outlined" />
                </Grid>
                <Grid xs={6} item container>
                    {project
                    && project.Participants
                    && project.Participants.length > 0
                    && project.Participants.map((participant, index) => {
                        if (participant && participant.first_name && participant.last_name) {
                            return (
                                <Avatar key={index} className={classes.avatar}>
                                    {`${participant.first_name.substr(0, 1)}${participant.last_name.substr(0, 1)}`}
                                </Avatar>
                            );
                        }
                        return (
                            <Avatar key={index} className={classes.avatar}>
                                <AppIcon icon={faUser} />
                            </Avatar>
                        );
                    })}
                </Grid>
            </Grid>
        </PaperBox>
    );
};

export default Project;
