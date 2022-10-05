import React, { useEffect, useState } from "react";
import { getUsersNotes } from "../axios/usersAxios";
import { NoteContext } from "../context/noteContext";
import Header from "../layout/Header";
import NotesList from "../layout/NotesList";

import '../styles/pagesStyles/MainPage.scss'

const MainPage = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState({});
    useEffect(() => {
      getUsersNotes().then(res => setNotes(res.userNotes))
    }, [])

    // Set Selected Note
    const handleSelect = (note:object) => {
        return setSelectedNote(note)
    }
    
    if(notes === undefined) {
        return null
    } else {
        return (
            <NoteContext.Provider  value={{notes, selectedNote, handleSelect}}>
            <div className="container">
                {/* <Header /> */}
           <NotesList />
            </div>
            </NoteContext.Provider>
        )
    }
    
}

export default MainPage;