import React, { FC } from "react";
import convertDate from "../utils/convertDate";
import '../styles/componentsStyles/Note.scss';

interface INote {
    title: string
    id: number
    text: string
    onClick: Function
    date: Date
}

const Note:FC<INote> = ({text, id, date, onClick, title}) => {
    return (
        <div onClick={()=>onClick(id)} className="note">
            <div className="note-title">{title}</div>
            <div className="note-text">{text}</div>
            <div className="note-date">{convertDate(date)}</div>
        </div>
    )
}

export default Note;