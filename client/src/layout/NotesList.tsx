import React, { FC } from "react";
import Button from "../components/Button";
import Note from "../components/Note";
import { NoteContext } from "../context/noteContext";
import '../styles/layoutStyles/NotesList.scss'

const NotesList:FC = () => {
    const notesContext = React.useContext(NoteContext);
    
    return (
        <div className="notes-container">
            <div className="notes-header">
            <h2>Notes</h2>
            <Button text="New Note" onClick={()=>console.log('Clicked')}/>
            </div>
            {notesContext!.notes?.map((item) => {return <Note onClick={notesContext!.handleSelect} id={item.id} date={item.createat} key={item.id} text={item.text} title={item.title}/>})}
        </div>
    )
}

export default NotesList;