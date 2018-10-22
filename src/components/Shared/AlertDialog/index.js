import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import If from '../If';

const AlertDialog = ({
    isOpen,
    dialogTitle,
    dialogText,
    cancelButtonText,
    confirmButtonText,
    onCancel,
    onConfirm,
}) => (
    <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <If condition={dialogTitle}>
            <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        </If>
        <If condition={dialogText}>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {dialogText}
                </DialogContentText>
            </DialogContent>
        </If>
        <DialogActions>
            <If condition={cancelButtonText}>
                <Button onClick={onCancel} color="primary">
                    {cancelButtonText}
                </Button>
            </If>
            <If condition={confirmButtonText}>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    {confirmButtonText}
                </Button>
            </If>
        </DialogActions>
    </Dialog>
);

AlertDialog.propTypes = {
    isOpen: PropTypes.bool,
    dialogTitle: PropTypes.string,
    dialogText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
};

export default AlertDialog;
