import React from 'react';

const Input = (props) => {

    const onChangeHandle = (e) => {
        props.handleChange(e)
    }

    return (
        <div>
            <label htmlFor="input-app">{props.label}</label>
            <input id='input-app' type="text" onChange={onChangeHandle} />
        </div>
    )
}

export default Input;
