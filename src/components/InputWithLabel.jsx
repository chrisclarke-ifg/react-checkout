import React from 'react';

// TODO: add success and error messages and states
// Spread rest for action bindings

const InputWithLabel = ({
    dataTitle,
    placeholder,
    action,
    value,
    validationMessage,
    required,
    success,
    ...rest
}) => {
    const defaultValue = value || '';
    const className = `input login__input i-track ${required && 'i-input-required'} ${validationMessage && 'input--error'} ${success && 'input--success'}`;

    return <>
        <label className="label hidden-xs-up"
            htmlFor={action}>{placeholder}</label>
        <input
            id={action}
            name={action}
            placeholder={placeholder}
            type="text"
            className={className}
            defaultValue={defaultValue}
            data-cy={dataTitle}
            { ...rest }
            ></input>
        {validationMessage && <span class="input-tooltip input-tooltip--validation">{validationMessage}</span>}
    </>
};

export default InputWithLabel;