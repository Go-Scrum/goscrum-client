import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/styles';
// import { Link } from '@material-ui/core';

import theme from '../../../utils/mui-theme';

// const StyledA = styled(Link)({
//     color: theme.palette.primary.dark,
//     textDecoration: 'none',
//
//     '&:focus, &:hover, &:visited, &:link, &:active': {
//         textDecoration: 'none',
//         color: theme.palette.primary.dark,
//     },
//
//     '&:hover': {
//         color: theme.palette.primary.main,
//     },
// });

const StyledLink = styled(RouterLink)({
    color: theme.palette.primary.dark,
    textDecoration: 'none',

    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: theme.palette.primary.dark,
    },

    '&:hover': {
        color: theme.palette.primary.main,
    },
});

const AppLink = ({ to, children, ...rest }) => (
    <StyledLink to={to} {...rest}>
        {children}
    </StyledLink>
);

export const ButtonAppLink = (props) => <AppLink {...props} />;

export default AppLink;
