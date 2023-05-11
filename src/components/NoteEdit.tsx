import React, { useState } from 'react';
import { TiTick, TiTimes } from 'react-icons/ti';

interface NoteEditProps {
  note: any;
  onSave: (editedNote: any) => void;
  onCancel: () => void;
}

const NoteEdit: React.FC<NoteEditProps> = ({ note, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedBody, setEditedBody] = useState(note.body);

  const handleSaveClick = () => {
    const editedNote: any = {
      id: note.id,
      title: editedTitle,
      body: editedBody,
    };
    onSave(editedNote);
  };

  return (
    <div>
      <h3>Edit or delete note</h3>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <textarea
        value={editedBody}
        onChange={(e) => setEditedBody(e.target.value)}
      ></textarea>
      <div>
        <TiTick
          size={20}
          onClick={handleSaveClick}
          style={{ cursor: 'pointer' }}
        />
        <TiTimes
          size={20}
          onClick={onCancel}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default NoteEdit;
