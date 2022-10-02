import React, { FC } from "react";
import '../styles/componentsStyles/Input.scss';

interface IInput {
    placeholder: string,
    setState: Function,
    type: string
}

const Input:FC<IInput> = ({placeholder, setState, type}) => {
    return (
        <input className="input" onChange={(event)=>setState(event.target.value)} type={type} placeholder={placeholder} />
    )
}

export default Input;
