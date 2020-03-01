import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
// import { toast } from 'react-toastify';
import Loader from '../../components/Shared/Loader';
import GitLab from '../../components/GitLab';

import * as actions from './actions';
import { makeSelectIsFetching, makeSelectSettings } from './selectors';
import { LOADER_TYPE } from '../../utils/Constants';
import { openSnackbar } from '../../components/Shared/Notifier';

const GitlabContainer = ({
    isFetching,
    getData,
    history,
    settings,
    updateFormValues,
    saveData,
}) => {

    const fetchData = async () => {
        // await getData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    const saveSettingsData = async () => {
        const { payload: { url } } = await saveData(settings);
        openSnackbar({ message: 'Saved successfully' }, 'success');
        // redirect to authorize page
        window.location.href = url;
    };

    return (
        <>
            <GitLab
                updateFormValues={updateFormValues}
                settings={settings}
                saveSettingsData={saveSettingsData}
            />
            {isFetching && <Loader type={LOADER_TYPE.fullView} />}
        </>
    );
};

GitlabContainer.propTypes = {
    isFetching: PropTypes.bool,
    settings: PropTypes.object,
    getData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    updateFormValues: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching(), makeSelectSettings()],
    (isFetching, settings) => ({
        isFetching,
        settings,
    }),
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actions,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(GitlabContainer);
