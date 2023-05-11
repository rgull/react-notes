import { deleteNote, editNote, getAllNotes } from '../services/noteService'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBin2Line } from 'react-icons/ri';
import Note from './Note';
import { Modal, Box } from '@mui/material';
import '../styles/note.css'
import NoteEdit from './NoteEdit';

interface Note {
  id: number;
  title: string;
  body: string;
}

const NoteList: React.FC<any> = ({ notes, setNotes }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');


  const handleEditClick = async (note: Note) => {
    setSelectedNote(note);
    setEditedTitle(note.title);
    setEditedBody(note.body);
    setShowModal(true);
  };

  const handleDeleteClick = async (id: any) => {

    const res = await deleteNote(id)
    if (res) {
      getAllNotes().then((res: any) => {
        setNotes(res);
      })
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  const handleSaveClick = async () => {
    if (selectedNote) {
      let editData = {
        id: selectedNote.id,
        title: editedTitle,
        body: editedBody
      }
      const res = await editNote(editData)
      if (res) {
        getAllNotes().then((res: any) => {
          setNotes(res);
        })
      }
      handleModalClose();
    }
  };

  return (
    <div>
      {notes?.map((note: any) => (
        <div key={note.id} className="container">
          <Link to={`/note/${note.id}`}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </Link>
          <div>
            <RiEdit2Line
              size={20}
              onClick={() => handleEditClick(note)}
              style={{ cursor: 'pointer' }}
            />
            <RiDeleteBin2Line
              size={20}
              onClick={() => handleDeleteClick(note.id)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      ))}
      <Modal open={showModal} onClose={handleModalClose}>
        <Box sx={{ width: 300, bgcolor: 'background.paper', p: 2 }}>
          {selectedNote && (
            <NoteEdit
              note={selectedNote}
              onSave={handleSaveClick}
              onCancel={handleModalClose}
            />
          )}
        </Box>
      </Modal>

    </div>
  );
};

export default NoteList;
