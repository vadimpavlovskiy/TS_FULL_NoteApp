import * as React from 'react'

interface INotesContext {
    notes: Array<any>,
    selectedNote: any,
    handleSelect: (param:object) => void,
}

export const NoteContext = React.createContext<INotesContext | null>(null);
