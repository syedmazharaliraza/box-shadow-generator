import React from 'react';
import { useState } from 'react/cjs/react.development';

function Control(props) {
    const [value, setValue] = useState(props.initialValue);

    const inputHandler = (e) => {
        setValue(e.target.value);
        props.inputHandler(value);
    };

    return (<>
        <label htmlFor={props.value}>Set {props.value}</label>
        <input type={props.type} id={props.value} min={props.min ? props.min : ""} max={props.max ? props.max : ""} value={value} onChange={inputHandler} />
    </>)
};

export default Control;
