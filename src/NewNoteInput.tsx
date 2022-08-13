import React from "react";


interface NewNoteInputProps {
    addNote(note:string): void;
  }

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  return (
    <div>
      <input type="text" name="note" placeholder="Note" />
      <button>Add Note</button>
    </div>
  );
};
