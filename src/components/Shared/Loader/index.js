import React from 'react';
import PropTypes from 'prop-types';
import loader from '../../../assets/images/loader.gif';
import loaderInv from '../../../assets/images/loaderInv.gif';
import './styles.css';

const getWrapperClass = (isInline, isInlineCover) => {
    if (isInline) {
        return 'inline-loading-container-wrapper';
    } else if (isInlineCover) {
        return 'loading-container-wrapper inline-cover';
    }
    return 'loading-container-wrapper';
};

const getLoaderClass = (isInline, isInlineCover) => {
    if (isInline) {
        return 'inline-loading-container';
    } else if (isInlineCover) {
        return 'loading-container inline-cover';
    }
    return 'loading-container';
};

const LoadingWrapper = ({ children, isInline, isInlineCover }) => (
    <div className={getWrapperClass(isInline, isInlineCover)}>
        <div className={getLoaderClass(isInline, isInlineCover)}>{children}</div>
    </div>
);

LoadingWrapper.propTypes = {
    children: PropTypes.object,
    isInline: PropTypes.bool,
    isInlineCover: PropTypes.bool,
};

const Loading = props => {
    let loaderImage = loader;
    if (props.isInline) {
        loaderImage = loaderInv;
    }
    if (props.error) {
        return (
            <LoadingWrapper isInline={props.isInline} isInlineCover={props.isInlineCover}>
                <p>Something went wrong!</p>
            </LoadingWrapper>
        );
    }
    if (props.timedOut) {
        return (
            <LoadingWrapper isInline={props.isInline} isInlineCover={props.isInlineCover}>
                <div className={props.isInline ? 'text-center' : 'text-center mt-5'}>
                    <img src={loaderImage} alt="logo" />
                </div>
            </LoadingWrapper>
        );
    }
    if (props.pastDelay) {
        return (
            <LoadingWrapper isInline={props.isInline} isInlineCover={props.isInlineCover}>
                <span>
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </span>
            </LoadingWrapper>
        );
    }
    return null;
};

Loading.propTypes = {
    error: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool,
    isInline: PropTypes.bool,
    isInlineCover: PropTypes.bool,
};

export default Loading;
