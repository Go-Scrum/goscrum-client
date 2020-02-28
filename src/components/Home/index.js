import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box,
    Toolbar,
    AppBar,
    Typography,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Section from './home-section';
import AuthButton from './AuthButton';

const content = [
    {
        title: 'Keep your team in sync',
        byline: 'Find harmony in your day as standups, scrums, retrospectives, and surveys run on autopilot. #TechHappily',
        image: '/images/homepage-images/coworkers.svg',
        imageLeft: true,
    },
    {
        title: 'Get more done',
        byline: 'Enjoy the freedom of a self-managing team as streamlined workflows unlock valuable time.',
        image: '/images/homepage-images/team_spirit.svg',
        imageLeft: false,
    },
    {
        title: 'Help performers, perform',
        byline: 'Build a culture of communication across borders and timezones, so your people can perform at their best.',
        image: '/images/homepage-images/discussion.svg',
        imageLeft: true,
    },
    {
        title: 'Stay analytical',
        byline: 'Measure engagement, happiness, and productivity with AI language analysis that reveals the thinking behind the answers.',
        image: '/images/homepage-images/connection.svg',
        imageLeft: false,
    },
];

const patches = [
    {
        image: '/images/homepage-images/green.svg',
        class: 'green',
    },
    {
        image: '/images/homepage-images/maroon.svg',
        class: 'maroon',
    },
    {
        image: '/images/homepage-images/skyblue.svg',
        class: 'skyblue',
    },
    {
        image: '/images/homepage-images/rose.svg',
        class: 'rose',
    },
    {
        image: '/images/homepage-images/blue.svg',
        class: 'blue',
    },
];

const useStyles = makeStyles(() => createStyles({
    container: {
        position: 'relative',
        '&::-webkit-scrollbar': {
            width: 0,
            background: 'transparent',
        },
        maxWidth: '100%',
    },
    bar: {
        boxShadow: 'none',
    },
    title: {
        flexGrow: 1,
        color: '#4C85E1',
    },
    button: {
        backgroundColor: '#E01E5A',
        color: 'white',
    },
    green: {
        top: '-1%',
        width: '50%',
        right: '-2%',
    },
    maroon: {
        top: '15%',
        width: '7%',
        left: '-3%',
    },
    skyblue: {
        top: '27%',
        width: '48%',
        right: '-2%',
    },
    rose: {
        top: '35%',
        width: '7%',
        left: '2%',
    },
    blue: {
        bottom: '-7%',
        width: '22%',
        left: '-5%',
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    logo: {
        maxWidth: 200,
    },
}),
);

function LandingPage() {
    const classes = useStyles();

    function ColorChangeScroll(props) {
        const { children } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            color: trigger ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
        });
    }

    return (
        <div id="home" className={classes.container}>
            <Box display={{ xs: 'none', lg: 'block' }}>
                {patches.map((patch, index) => (
                    <img
                        alt="patch"
                        src={patch.image}
                        style={{ position: 'absolute' }}
                        className={classes[patch.class]}
                        key={index}
                    />
                ))}
            </Box>
            <ColorChangeScroll>
                <AppBar color="transparent" className={classes.bar}>
                    <Toolbar className={classes.toolbar}>
                        <img src="" alt="logo" className={classes.logo} />
                        <AuthButton />
                    </Toolbar>
                </AppBar>
            </ColorChangeScroll>
            <Box pt={5}>
                <Grid container justify="center">
                    {content.map((section, index) => (
                        <Section
                            key={index}
                            title={section.title}
                            byline={section.byline}
                            image={section.image}
                            imageLeft={section.imageLeft}
                        />
                    ))}
                </Grid>
            </Box>
            <Box mt={5}>
                <Typography align="center">
                    Handcrafted with
                    {' '}
                    <span style={{ color: '#ea4e4e' }}>&#9829;</span>
                    {' '}
                    by goScrum.io
                </Typography>
            </Box>
        </div>
    );
}

export default LandingPage;
