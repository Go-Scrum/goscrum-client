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
} from './selectors';
import { LOADER_TYPE } from '../../utils/Constants';

const ProjectContainer = ({
    isFetchingChannels,
    isFetchingUsers,
    project,
    users,
    channels,
    isFetching,
    resetState,
    getProject,
    saveProject,
    match,
    updateFormValues,
}) => {
    useEffect(() => {
        const { params } = match;
        if (params && params.id && params.id !== 'new') {
            getProject(params.id);
        }
        return () => resetState();
    }, []);

    const upsertProject = async () => {
        const response = await saveProject(project);
        //    TODO:Toast here.
    };

    return (
        <>
            <Project
                project={project}
                upsertProject={upsertProject}
                users={users}
                channels={channels}
                updateFormValues={updateFormValues}
            />
            {(isFetching || isFetchingChannels || isFetchingUsers) && <Loader type={LOADER_TYPE.fullView} />}
        </>
    );
};

ProjectContainer.propTypes = {
    isFetching: PropTypes.bool,
    project: PropTypes.object,
    resetState: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    saveProject: PropTypes.func.isRequired,
    updateFormValues: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
    [
        makeSelectIsFetching(),
        makeSelectIsFetchingChannels(),
        makeSelectIsFetchingUsers(),
        makeSelectProject(),
        makeSelectUsers(),
        makeSelectChannels(),
    ],
    (isFetching, isFetchingChannels, isFetchingUsers, project, users, channels) => ({
        isFetching,
        isFetchingChannels,
        isFetchingUsers,
        project,
        users,
        channels,
    }),
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actions,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
