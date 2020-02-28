import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import ContentLoader from 'react-content-loader';
import { Typography, Dialog } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { LOADER_TYPE } from '../../../utils/Constants';
import theme from '../../../utils/mui-theme';

const TableRow = (props) => {
    const random = Math.random() * (1 - 0.7) + 0.7;
    return (
        <ContentLoader
            height={20}
            width={1060}
            speed={2}
            primaryColor="#d9d9d9"
            secondaryColor="#ecebeb"
            style={props.style}
        >
            <rect x="34" y="13" rx="3" ry="3" width={200 * random} height="5" />
            <rect x="300" y="13" rx="3" ry="3" width={78 * random} height="5" />
            <rect x="450" y="13" rx="3" ry="3" width={78 * random} height="5" />
            <rect x="603" y="13" rx="3" ry="3" width={78 * random} height="5" />
            <rect x="755" y="13" rx="3" ry="3" width={117 * random} height="5" />
            <rect x="938" y="13" rx="3" ry="3" width={83 * random} height="5" />
        </ContentLoader>
    );
};

const TableLoader = () => (
    <>
        {Array(5)
            .fill('')
            .map((e, i) => (
                <TableRow key={i} style={{ opacity: Number(2 / i + 1) }} />
            ))}
    </>
);

const CardContentLoader = () => (
    <ContentLoader
        height={80}
        width={400}
        speed={2}
        primaryColor="#d9d9d9"
        secondaryColor="#ecebeb"
    >
        <rect x="0" y="0" rx="3" ry="3" width="250" height="3" />
        <rect x="20" y="10" rx="3" ry="3" width="220" height="3" />
        <rect x="20" y="20" rx="3" ry="3" width="170" height="3" />
        <rect x="0" y="30" rx="3" ry="3" width="250" height="3" />
        <rect x="20" y="40" rx="3" ry="3" width="200" height="3" />
        <rect x="20" y="50" rx="3" ry="3" width="80" height="3" />
    </ContentLoader>
);

const CardLoader = () => (
    <ContentLoader
        height={80}
        width={400}
        speed={2}
        primaryColor={theme.palette.background.paper}
        secondaryColor={theme.palette.grey[900]}
    >
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="150" />
        <rect x="0" y="80" rx="3" ry="3" width="100%" height="150" />
        <rect x="0" y="150" rx="3" ry="3" width="100%" height="150" />
    </ContentLoader>
);

const StyledDialog = styled(Dialog)({
    justifyContent: 'center',
    alignItems: 'center',
});

const FullViewLoader = ({ message }) => (
    <StyledDialog
        PaperProps={{
            style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
        }}
        open
    >
        <FontAwesomeIcon icon={faCircleNotch} spin size="4x" />
        {message}
    </StyledDialog>
);

class Loader extends Component {
    state = {
        showLoader: false,
    };

    timeout = null;

    componentDidMount() {
        const { delay } = this.props;
        this.timeout = setTimeout(() => {
            this.setState({ showLoader: true });
        }, delay || 250);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    render() {
        const { large, message, type } = this.props;
        const { showLoader } = this.state;
        if (!showLoader) {
            return null;
        }
        if (type === LOADER_TYPE.table) {
            return <TableLoader />;
        }
        if (type === LOADER_TYPE.content) {
            return <CardContentLoader />;
        }
        if (type === LOADER_TYPE.card) {
            return <CardLoader />;
        }
        if (type === LOADER_TYPE.fullView) {
            return <FullViewLoader message={message} />;
        }
        return (
            <Typography variant={large ? 'h4' : 'body1'}>
                <FontAwesomeIcon
                    icon={faCircleNotch}
                    spin
                    style={{ marginRight: '.5em' }}
                />
                {message}
            </Typography>
        );
    }
}

export default Loader;
