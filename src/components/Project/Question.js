import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import theme from '../../utils/mui-theme';

const styles = createStyles({
    listItem: {
        paddingLeft: 0,
    },
    colorBox: {
        height: '40px',
        width: '2px',
        marginRight: '20px',
    },
});

function Question({
    text,
    classes,
    color,
}) {
    return (
        <ListItem
            divider
            disableTouchRipple
            button
            className={classes.listItem}
        >
            <Box className={classes.colorBox} bgcolor={color} />
            <ListItemText primary={text} />
        </ListItem>
    );
}

export default withStyles(styles)(Question);
