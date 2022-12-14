import React, { ChangeEvent } from "react";
import { NoteButton, NoteInput } from "./styles/NewNoteStyles";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <NoteInput
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <NoteButton onClick={onAddNoteClick}>Add Note</NoteButton>
    </div>
  );
};