import React from 'react';

export const Button = (props) => {
    let { children, className, onclick } = props;
    return (
        <button className={className} onClick={onclick}>{children}</button>
    );
};