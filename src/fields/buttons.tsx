import React from 'react';
import '../vislib.module.css';

export const Normal = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;

    return(
        <button className={`btn btn-light ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};

export const Previous = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;
    icon = icon ? icon : <i className="bi bi-arrow-bar-left"></i>;

    return(
        <button className={`btn btn-light ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};

export const Next = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;
    icon = icon ? icon : <i className="bi bi-arrow-bar-right"></i>;
    
    return(
        <button className={`btn btn-light ${setClassName}`} id={id} disabled={setDisabled}>
            {text}{icon}
        </button>
    );
};

export const Primary = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;

    return(
        <button className={`btn btn-primary ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};

export const Warning = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;

    return(
        <button className={`btn btn-warning ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};

export const Danger = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;

    return(
        <button className={`btn btn-danger ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};

export const Add = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;
    icon = <i className="bi bi-person-plus-fill"></i>;

    return(
        <button className={`btn btn-light ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};

export const Delete = ({id, text, icon, className, disabled}: any) => {
    let setClassName = className ? className : "";
    let setDisabled = disabled ? true : undefined;
    icon = <i className="bi bi-trash-fill"></i>;

    return(
        <button className={`btn btn-danger ${setClassName}`} id={id} disabled={setDisabled}>
            {icon}{text}
        </button>
    );
};
// export const Icon = ({id, text, icon, className, disabled}: any) => {
//     let iconImage = <img src={props.src}></img>;
// };