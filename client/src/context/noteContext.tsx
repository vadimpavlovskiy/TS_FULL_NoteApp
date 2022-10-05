import * as React from 'react'

interface INotesContext {
    notes: Array<any> | null,
    selectedNote: any | null,
    handleSelect: Function,
}

export const NoteContext = React.createContext<INotesContext | null>(null);
