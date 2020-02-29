import React, { useState } from 'react';
import {
    Box,
    Grid,
    TextField,
    Typography,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    InputLabel,
    InputAdornment,
    IconButton,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import theme from '../../utils/mui-theme';
import PaperBox from '../Shared/PaperBox/paper-box';
import MultiSelectSettings from '../Shared/MultiSelectSettings';
import AppIcon from '../Shared/AppIcon/app-icon';
import Questions from './Questions';
import { getRandomColor } from '../../utils/getRandomColor';

const useStyles = makeStyles(() => createStyles({
    container: {
        marginTop: '2rem',
    },
    cursorPointer: {
        cursor: 'pointer',
    },
    questionContainer: {
        marginBottom: '1rem',
    }
}),
);

const Project = ({ project, users, channels, teams, upsertProject, updateFormValues, settings, getUsers, getChannels }) => {
    const classes = useStyles();
    const [newText, setNewText] = useState('');

    const addItem = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (!newText) {
            return;
        }
        const question = {
            Title: newText,
            Type: 'Text',
            ProjectId: project.id,
            Color: getRandomColor(),
        };
        if (project && project.Questions) {
            const Questions = [...project.Questions, question];
            updateFormValues({ Questions });
        } else {
            updateFormValues({ Questions: [question] });
        }
        setNewText('');
    };

    return (
        <Grid container xs={12} item className={classes.container} justify="center">
            <PaperBox>
                <Grid
                    container
                    spacing={0}
                    xs={12}
                    justify="center"
                >
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={10} spacing={2}>
                            <Box mb={4}>
                                <Typography variant="h5">
                                    Project
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={2}>
                                <TextField
                                    value={project.name || ''}
                                    onChange={(e) => updateFormValues({ name: e.target.value })}
                                    label="Project Name"
                                    placeholder="Enter Project Name"
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={2}>
                                <FormControl>
                                    <FormLabel htmlFor="Schedule">Schedule</FormLabel>
                                    <Typography id="Schedule">
                                        Weekly From Monday to Friday
                                    </Typography>
                                    <TextField
                                        value={project.reporting_time || ''}
                                        onChange={(e) => updateFormValues({ reporting_time: e.target.value })}
                                        // label="Time"
                                        type="time"
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="broadcastTeam">
                                        Broadcast Team
                                    </InputLabel>
                                    <Select
                                        label="Broadcast Team"
                                        labelId="broadcastTeam"
                                        fullWidth
                                        value={project.team_id}
                                        onChange={(e) => {
                                            getChannels(settings.id, e.target.value);
                                            updateFormValues({ team_id: e.target.value });
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="broadcastChannel">
                                        Broadcast Channel
                                    </InputLabel>
                                    <Select
                                        label="Broadcast Channel"
                                        labelId="broadcastChannel"
                                        fullWidth
                                        disabled={!project.team_id}
                                        value={project.channel_id}
                                        onChange={(e) => {
                                            getUsers(settings.id, e.target.value);
                                            updateFormValues({ channel_id: e.target.value });
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} className={classes.questionContainer}>
                                <Grid item xs={12}>
                                    <form onSubmit={addItem}>
                                        <TextField
                                            label="Question"
                                            id="question"
                                            fullWidth
                                            value={newText}
                                            onChange={e => setNewText(e.target.value)}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={addItem}>
                                                            <AppIcon
                                                                icon={faPlus}
                                                                size="sm"
                                                                className={classes.cursorPointer}
                                                            />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </form>
                                </Grid>
                                {project && project.Questions && project.Questions.length > 0 && (
                                    <Grid item xs={12}>
                                        <Box
                                            p={2}
                                            justifyContent="flex-end"
                                            width="100%"
                                            display="flex"
                                            // border={1}
                                            // borderColor="grey.500"
                                            // borderRadius="borderRadius"
                                            mb={2}
                                        >
                                            <Questions
                                                questions={project.Questions}
                                            />
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <MultiSelectSettings
                                disabled={!project.channel_id}
                                handleChange={participants => updateFormValues({ participants })}
                                placeHolder="Select Participants"
                                options={[{ name: 'Mehul', id: 1 }, { name: 'Mehul2', id: 2 }, {
                                    name: 'Mehul3',
                                    id: 3,
                                }]}
                                fieldLabel="Participants"
                                value={[{ name: 'Mehul', id: 1 }]}
                                id="participants"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            justify="flex-end"
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginRight: theme.spacing(1) }}
                                onClick={upsertProject}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </PaperBox>
        </Grid>
    );
};

export default Project;
