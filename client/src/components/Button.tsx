import React, { FC } from "react";
import '../styles/componentsStyles/Button.scss'

interface IButton {
    text: string,
    onClick: Function,
}

const Button:FC<IButton> = ({text, onClick}) => {
    return (
        <div onClick={()=>onClick()} className="button">
            {text}
        </div>
    )
}

export default Button;