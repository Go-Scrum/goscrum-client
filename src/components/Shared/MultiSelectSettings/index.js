import React from 'react';
import PropTypes from 'prop-types';
import SearchSelect from '../SearchSelect';

const MultiSelectSettings = ({ fieldLabel, value, handleChange, id, placeHolder, options, isMulti, disabled }) => {
    const getOptions = () => (options && options.length > 0) ? options.map(option => ({
        ...option,
        label: option.real_name,
        value: option.user_id,
    })) : [];

    const getMultiSelectValue = () => (value && value.length > 0) ? value.map(option => ({
        ...option,
        label: option.real_name,
        value: option.user_id,
    })) : [];

    const getSingleSelectValue = () => (value && value.id) ?
        {
            ...value,
            label: value.real_name,
            value: value.user_id,
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
