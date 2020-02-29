import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Loader from '../../components/Shared/Loader';
import Project from '../../components/Projects';
import * as actions from './actions';
import { makeSelectIsFetching, makeSelectProjects } from './selectors';
import { LOADER_TYPE } from '../../utils/Constants';

const ProjectsContainer = ({ projects, isFetching, resetState, getProjects }) => {

    useEffect(() => {
        getProjects();
        return () => resetState();
    }, []);

    return (
        <>
            <Project projects={projects}/>
            {isFetching && <Loader type={LOADER_TYPE.fullView}/>}
        </>
    );
};

ProjectsContainer.propTypes = {
    isFetching: PropTypes.bool,
    projects: PropTypes.object,
    resetState: PropTypes.func.isRequired,
    getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching(), makeSelectProjects()],
    (isFetching, projects) => ({
        isFetching,
        projects,
    }),
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
