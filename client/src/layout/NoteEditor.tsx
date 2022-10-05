import React from "react";
import { NoteContext } from "../context/noteContext";
import convertDate from "../utils/convertDate";

const NoteEditor = () => {
    const selectedNote = React.useContext(NoteContext)?.selectedNote;
    
    if (!selectedNote) {
        return null
    }
    return (
        <div className="note-editor">
            <h2>{selectedNote[0].title}</h2>
            <div className="note-text">
                {selectedNote[0].text}
            </div>
            <div className="note-time">
                {convertDate(selectedNote[0].createat)}
            </div>
        </div>
    )
}

export default NoteEditor;