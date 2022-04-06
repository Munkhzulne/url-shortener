import React from 'react';

export const Input = (props) => {
    let { fatherClass, className, labelClassName, label, id, ...others } = props;

    return (
        <div className={fatherClass}>
            <label htmlFor={id} className={labelClassName}>{label}</label>
            <input id={id} className={`input ${className}`} {...others} />
        </div>
    );
};