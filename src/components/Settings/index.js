import React from 'react';
import { Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import PaperBox from '../Shared/PaperBox/paper-box';
import theme from '../../utils/mui-theme';


const WorkspaceForm = ({ saveSettingsData, updateFormValues, settings }) => (
    <PaperBox>
        <Grid
            container
            spacing={0}
            justify="center"
        >
            <Grid container item xs={10} spacing={2}>
                <Grid item xs={10} spacing={2}>
                    <Box mb={4}>
                        <Typography variant="h5">
                            Workspace
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <TextField
                            value={settings.workspace_name || ''}
                            onChange={(e) => updateFormValues({ workspace_name: e.target.value })}
                            label="Workspace Name"
                            fullWidth
                            variant="outlined"
                        />
                        <Typography variant="caption">
                            This is your workspace name
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <TextField
                            value={settings.url || ''}
                            onChange={(e) => updateFormValues({ url: e.target.value })}
                            label="URL"
                            fullWidth
                            variant="outlined"
                        />
                        <Typography variant="caption">
                            This is your Mattermost URL
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <TextField
                            value={settings.client_id || ''}
                            onChange={(e) => updateFormValues({ client_id: e.target.value })}
                            label="Client ID"
                            fullWidth
                            variant="outlined"
                        />
                        <Typography variant="caption">
                            This is Client ID
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={2}>
                        <TextField
                            value={settings.client_secret || ''}
                            onChange={(e) => updateFormValues({ client_secret: e.target.value })}
                            label="Client Secret"
                            fullWidth
                            variant="outlined"
                        />
                        <Typography variant="caption">
                            This is Client Secret
                        </Typography>
                    </Box>
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
                        onClick={saveSettingsData}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </PaperBox>
);

export default WorkspaceForm;
