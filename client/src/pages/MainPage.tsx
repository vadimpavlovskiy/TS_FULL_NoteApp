import React, { useEffect, useState } from "react";
import { getUsersNotes } from "../axios/usersAxios";
import Header from "../layout/Header";
import NotesList from "../layout/NotesList";

import '../styles/pagesStyles/MainPage.scss'

const MainPage = () => {
    const [notes, setNotes] = useState();
    useEffect(() => {
      getUsersNotes().then(res => setNotes(res.userNotes))
    }, [])
    
    if(notes === undefined) {
        return null
    }
    return (
        <div className="container">
            {/* <Header /> */}
       <NotesList notes={notes}/>
        </div>
    )
}

export default MainPage;