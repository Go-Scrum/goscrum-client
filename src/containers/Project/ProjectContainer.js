import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Loader from '../../components/Shared/Loader';
import Project from '../../components/Project';
import * as actions from './actions';
import {
    makeSelectIsFetching,
    makeSelectProject,
    makeSelectIsFetchingUsers,
    makeSelectIsFetchingChannels,
    makeSelectUsers,
    makeSelectChannels,
    makeSelectIsFetchingTeams,
    makeSelectTeams,
} from './selectors';
import { makeSelectSettings } from '../Settings/selectors';
import { LOADER_TYPE } from '../../utils/Constants';

const ProjectContainer = ({
    isFetchingChannels,
    isFetchingUsers,
    isFetchingTeams,
    project,
    users,
    channels,
    teams,
    isFetching,
    resetState,
    getProject,
    getUsers,
    getChannels,
    saveProject,
    getTeams,
    match,
    updateFormValues,
    settings,
}) => {
    const fetchData = async () => {
        const { params } = match;
        if (settings) {
            getTeams(settings.id);
        }
        if (params && params.id && params.id !== 'new') {
            const response = await getProject(params.id);
            console.log(response);
            // getUsers(settings.id, response.channel_id);
            // getChannels(settings.id, response.team_id);
        }
    };

    useEffect(() => {
        if (settings && settings.id) {
            fetchData();
        }
        return () => resetState();
    }, [settings]);

    const upsertProject = async () => {
        const response = await saveProject(project);
        //    TODO:Toast here.
    };

    return (
        <>
            <Project
                project={project}
                upsertProject={upsertProject}
                getUsers={getUsers}
                getChannels={getChannels}
                users={users}
                settings={settings}
                channels={channels}
                teams={teams}
                updateFormValues={updateFormValues}
            />
            {(isFetching || isFetchingChannels || isFetchingUsers || isFetchingTeams)
            && <Loader type={LOADER_TYPE.fullView} />}
        </>
    );
};

ProjectContainer.propTypes = {
    isFetching: PropTypes.bool,
    isFetchingTeams: PropTypes.bool,
    isFetchingUsers: PropTypes.bool,
    isFetchingChannels: PropTypes.bool,
    project: PropTypes.object,
    resetState: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    getTeams: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    getChannels: PropTypes.func.isRequired,
    saveProject: PropTypes.func.isRequired,
    updateFormValues: PropTypes.func.isRequired,
    users: PropTypes.array,
    channels: PropTypes.array,
    settings: PropTypes.object,
    teams: PropTypes.array,
};

const mapStateToProps = createSelector(
    [
        makeSelectIsFetching(),
        makeSelectIsFetchingChannels(),
        makeSelectIsFetchingUsers(),
        makeSelectIsFetchingTeams(),
        makeSelectProject(),
        makeSelectUsers(),
        makeSelectChannels(),
        makeSelectSettings(),
        makeSelectTeams(),
    ],
    (isFetching, isFetchingChannels, isFetchingUsers, isFetchingTeams, project, users, channels, settings, teams) => ({
        isFetching,
        isFetchingChannels,
        isFetchingUsers,
        isFetchingTeams,
        project,
        users,
        channels,
        settings,
        teams,
    }),
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actions,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
