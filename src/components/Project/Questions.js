import React from 'react';
import { List } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Question from './Question';
import theme from '../../utils/mui-theme';

const styles = createStyles({
    button: {
        marginRight: theme.spacing(1),
    },
    cursorPointer: {
        cursor: 'pointer',
    },
    list: {
        maxHeight: '300px',
        overflow: 'auto',
        width: '100%',
    },
});

const Questions = ({
    questions,
    classes,
}) => {
    const renderListItem = (
        item,
        index
    ) => (
        <Question
            key={index}
            text={item.Title}
            color={item.Color}
        />
    );

    return (
        <List component="ul" className={classes.list} aria-label="Questions">
            {questions
            && questions.length > 0 && questions.map((item, index) => renderListItem(item, index))}
        </List>
    );
};

export default withStyles(styles)(Questions);
