import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import PaperBox from '../Shared/PaperBox/paper-box';
// import { openSnackbar } from '../../components/notifier';
import theme from '../../utils/mui-theme';
import Loader from '../Shared/Loader';
import { LOADER_TYPE } from '../../utils/Constants';


function ApplaudForm() {
    function onMessageChange(event) {
        // const value = event.target.value;
        // if (value.length > 250) {
        //     openSnackbar(
        //         {
        //             message: 'Message cannot be greater than 250',
        //         },
        //         'error',
        //     );
        //     return;
        // }
        // setMessage(value);
    }

    async function onSend() {

    }


    return (
        <PaperBox>
            <Grid
                container
                spacing={0}
                justify="center"
                style={{ minHeight: '70vh' }}
            >
                <Grid container item xs={10} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value={message}
                            onChange={onMessageChange}
                            label="Message"
                            placeholder="Say nice things"
                            multiline
                            fullWidth
                            variant="outlined"
                        />
                        <Typography variant="caption">
                            This textarea support markdown
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ marginRight: theme.spacing(1) }}
                            onClick={onSend}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {loading && <Loader type={LOADER_TYPE.fullView}/>}
        </PaperBox>
    );
}

export default ApplaudForm;
