import React, { FC } from "react";
import Note from "../components/Note";
import '../styles/layoutStyles/NotesList.scss'
interface INotes {
    notes: Array<any>
}

const NotesList:FC<INotes> = ({notes}) => {
    
    return (
        <div className="notes-container">
            <h2>Notes</h2>
            {notes?.map((item) => {return <Note date={item.createat} key={item.id} text={item.text} title={item.title}/>})}
        </div>
    )
}

export default NotesList;