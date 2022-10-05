import React, { useEffect, useState } from "react";
import { getUsersNotes } from "../axios/usersAxios";
import { NoteContext } from "../context/noteContext";
import Header from "../layout/Header";
import NoteEditor from "../layout/NoteEditor";
import NotesList from "../layout/NotesList";

import '../styles/pagesStyles/MainPage.scss'

const MainPage = () => {

    const [notes, setNotes] = useState<any[]>([]);
    const [selectedNote, setSelectedNote] = useState<any | null>(null);

    useEffect(() => {
      getUsersNotes().then(res => setNotes(res.userNotes))
    }, [])

    // Set Selected Note
    const handleSelect = (note:Number) => {
        
        const noteSelected = notes.filter((item) => {
            if(item.id === note) {
                return item
            }
        })
        return setSelectedNote(noteSelected)
    }
    if(notes === undefined) {
        return null
    } else {
        return (
            <NoteContext.Provider  value={{notes, selectedNote, handleSelect}}>
            <div className="container">
                {/* <Header /> */}
           <NotesList />
           <NoteEditor />
            </div>
            </NoteContext.Provider>
        )
    }
    
}

export default MainPage;