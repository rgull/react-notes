import React, { useState } from 'react';
import {createNote} from '../services/noteService'
interface Note {
  title: string;
  body: string;
}

interface NoteFormProps {
  onSubmit?: (note: Note) => void;
  setShowModal:any;
}

const NoteForm: React.FC<NoteFormProps> = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit =async  (event: React.FormEvent) => {
    event.preventDefault();
    await createNote({
      id:Math.random(),
      body:body
    })
    setTitle('');
    setBody('');
    props.setShowModal(false);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default NoteForm;
