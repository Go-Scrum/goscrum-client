import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Loader from '../../components/Shared/Loader';
import Project from '../../components/Projects';
import * as actions from './actions';
import { makeSelectIsFetching, makeSelectProject } from './selectors';
import { LOADER_TYPE } from '../../utils/Constants';

const ProjectContainer = ({ project, isFetching, resetState, getProject, saveProject, match }) => {

    useEffect(() => {
        const { params } = match;
        // console.log(params.id)
        if (params && params.id && params.id !== 'new') {
            getProject(params.id);
        }
        return () => resetState();
    }, []);

    const upsertProject = async () => {
        const response = await saveProject(project);
        //    TODO:Toast here.
    }

    return (
        <>
            <Project projects={project}/>
            {isFetching && <Loader type={LOADER_TYPE.fullView}/>}
        </>
    );
};

ProjectContainer.propTypes = {
    isFetching: PropTypes.bool,
    project: PropTypes.object,
    resetState: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    saveProject: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching(), makeSelectProject()],
    (isFetching, project) => ({
        isFetching,
        project,
    }),
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
