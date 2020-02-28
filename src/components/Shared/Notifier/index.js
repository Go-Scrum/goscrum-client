import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './snackbar-content-wrapper';

let openSnackbarFn;

class Notifier extends Component {
    state = {
        open: false,
        message: '',
        variant: 'info',
    };

    componentDidMount() {
        openSnackbarFn = this.openSnackbar;
    }

    handleSnackbarClose = () => {
        this.setState({
            open: false,
            message: '',
            variant: 'info',
        });
    };

    openSnackbar = ({ message }, variant) => {
        this.setState({ open: true, message, variant });
    };

    render() {
        const { open, message, variant } = this.state;

        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={3000}
                onClose={this.handleSnackbarClose}
                open={open}
                ContentProps={{
                    'aria-describedby': 'snackbar-message-id',
                }}
            >
                <SnackbarContentWrapper
                    onClose={this.handleSnackbarClose}
                    variant={variant}
                    message={message}
                />
            </Snackbar>
        );
    }
}

export function openSnackbar({ message }, variant) {
    openSnackbarFn({ message }, variant);
}

export default Notifier;
