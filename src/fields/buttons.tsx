import React from 'react';

export const Normal = ({id, text, icon, className, active, disabled}: any) => {
    let setClassName = active == true ? `btn btn-light pda-btn ${className ? className : null} active` : `btn btn-light pda-btn ${className ? className : null}`;

    return(
        <button className={setClassName} id={id} {...disabled ? 'disabled' : null}>
            {icon}{text}
        </button>
    );
};

export const Previous = ({id, text, icon, className, disabled}: any) => {
    return(
        <button className={className} id={id} {...disabled ? 'disabled' : null}>
            {icon}{text}
        </button>
    );
};

export const Next = ({}) => {};
export const Primary = ({}) => {};
export const Warning = ({}) => {};
export const Danger = ({}) => {};
export const Add = ({}) => {};
export const Delete = ({}) => {};
export const Icon = ({}) => {};