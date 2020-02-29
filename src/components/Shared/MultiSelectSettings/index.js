import React from 'react';
import PropTypes from 'prop-types';
import SearchSelect from '../SearchSelect';

const MultiSelectSettings = ({ fieldLabel, value, handleChange, id, placeHolder, options, isMulti, disabled }) => {
    const getOptions = () => (options && options.length > 0) ? options.map(option => ({
        ...option,
        label: option.name,
        value: option.id,
    })) : [];

    const getMultiSelectValue = () => (value && value.length > 0) ? value.map(option => ({
        ...option,
        label: option.name,
        value: option.id,
    })) : [];

    const getSingleSelectValue = () => (value && value.id) ?
        {
            ...value,
            label: value.name,
            value: value.id,
        } : null;

    return (
        <SearchSelect
            value={isMulti ? getMultiSelectValue() : getSingleSelectValue()}
            disabled={disabled}
            fieldLabel={fieldLabel}
            id={id}
            handleChange={handleChange}
            isMulti={isMulti}
            options={getOptions()}
            placeHolder={placeHolder}
        />
    );
};

MultiSelectSettings.propTypes = {
    fieldLabel: PropTypes.string,
    value: PropTypes.any,
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    options: PropTypes.array,
    placeHolder: PropTypes.string,
    isMulti: PropTypes.bool,
};

export default MultiSelectSettings;
