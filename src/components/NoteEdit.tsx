import React, { useState } from "react";
import { TiTick, TiTimes } from "react-icons/ti";
import { editNote, getAllNotes } from "../services/noteService";
import { NoteEditProps } from "../interfaces/interface";

const NoteEdit: React.FC<NoteEditProps> = ({ note, setNotes, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedBody, setEditedBody] = useState(note.body);

  const handleSaveClick = async () => {
    const editedNote: any = {
      id: note.id,
      title: editedTitle,
      body: editedBody,
    };
    const res = await editNote(editedNote);
    const notes = await getAllNotes();
    setNotes(notes);
    onCancel();
  };

  return (
    <div>
      <h3>Edit or delete note</h3>
      <input
            className='title-input'
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <textarea
            className='description-input'

        value={editedBody}
        onChange={(e) => setEditedBody(e.target.value)}
      ></textarea>
      <div className='edit-delete-wrapper'>
        <TiTick
          size={20}
          onClick={handleSaveClick}
          style={{ cursor: "pointer" }}
        />
        <TiTimes className='delete-icon' size={20} onClick={onCancel} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default NoteEdit;
