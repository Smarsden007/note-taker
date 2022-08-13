import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NoteState } from "./notesReducer";
import { addNote } from "./action";
import { MasterContainer, NoteBox, SubContainer, List} from "./styles/NoteStyles";
import {RiTodoLine} from 'react-icons/ri'
function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };
const todo = {
  margin: '5rem',
}

  return (
    <>
      <SubContainer>
      <MasterContainer>
      <RiTodoLine size={200} style={todo}/>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      
      <ul>
        {notes.map((note) => {
          return <NoteBox><List key={note}>{note}</List></NoteBox>;
        })}
      </ul>
      
      
      </MasterContainer>
     </SubContainer>
    </>
  );
}

export default App;