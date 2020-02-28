import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faExclamationCircle,
    faInfoCircle,
    faTimes,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

export const variantIcon = {
    success: faCheckCircle,
    warning: faExclamationTriangle,
    error: faExclamationCircle,
    info: faInfoCircle,
};

const useStyles = makeStyles((theme) => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function SnackbarContentWrapper(props) {
    const classes = useStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = (
        <FontAwesomeIcon
            icon={variantIcon[variant]}
            className={clsx(classes.icon, classes.iconVariant)}
        />
    );

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={(
                <span id="client-snackbar" className={classes.message}>
                    {Icon}
                    {message}
                </span>
            )}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faTimes} className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}
