import React from 'react';
import {
    Box,
    Grid,
    TextField,
    Typography,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    InputLabel
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from '../../utils/mui-theme';
import PaperBox from '../Shared/PaperBox/paper-box';
import MultiSelectSettings from "../Shared/MultiSelectSettings";

const useStyles = makeStyles(() => createStyles({
        container: {
            marginTop: '2rem',
        },
    }),
);

const Project = ({ project, users, channels, upsertProject, updateFormValues }) => {
    const classes = useStyles();

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
                                {/*<Typography variant="caption">*/}
                                {/*    This is your Project name*/}
                                {/*</Typography>*/}
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
                                {/*<Typography variant="caption">*/}
                                {/*    This is your Time*/}
                                {/*</Typography>*/}
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
                                        value={project.channel_id}
                                        onChange={(e) => updateFormValues({ channel_id: e.target.value })}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/*<Grid item xs={12}>*/}
                        {/*    <Box mb={2}>*/}
                        {/*        <TextField*/}
                        {/*            value={settings.client_id || ''}*/}
                        {/*            onChange={(e) => updateFormValues({ client_id: e.target.value })}*/}
                        {/*            label="Client ID"*/}
                        {/*            fullWidth*/}
                        {/*            variant="outlined"*/}
                        {/*        />*/}
                        {/*        <Typography variant="caption">*/}
                        {/*            This is Client ID*/}
                        {/*        </Typography>*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12}>*/}
                        {/*    <MultiSelectSettings*/}
                        {/*        handleChange={e => updateFormValues({'participants', e.target.value})}*/}
                        {/*        placeHolder="Participants"*/}
                        {/*        options={[{name: 'Mehul', id: 1}]}*/}
                        {/*        fieldLabel="Participants"*/}
                        {/*        value={this.props.shift.facility}*/}
                        {/*        id="facility"*/}
                        {/*    />*/}
                        {/*</Grid>*/}
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
