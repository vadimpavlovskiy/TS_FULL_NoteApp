import React, { FC } from "react";

interface INote {
    title: string
    text: string
}

const Note:FC<INote> = ({text, title}) => {
    return (
        <div className="note">
            {title}
            <br />
            {text}
        </div>
    )
}

export default Note;