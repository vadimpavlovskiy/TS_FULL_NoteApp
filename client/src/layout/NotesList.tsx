import React, { FC } from "react";
import Note from "../components/Note";

interface INotes {
    notes: Array<any>
}

const NotesList:FC<INotes> = ({notes}) => {
    
    return (
        <div>
            {notes?.map((item) => {return <Note key={item.id} text={item.text} title={item.title}/>})}
        </div>
    )
}

export default NotesList;