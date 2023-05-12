import { Modal, Box } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteDetails from './components/NoteDetails';
import NoteForm from './components/NoteForm';
import NoteList from './components/NotesList';
import { list } from './constants/constants';

interface Note {
  id: number;
  title: string;
  body: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(list);
  const [showModal, setShowModal] = useState(false);

  const handleAddNoteClick = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <React.Fragment>
          <div className='app-home'>
      <h1 className='heading'>My Notes App</h1>
      <button className='add-note' onClick={handleAddNoteClick}>Add Note</button>
      <Routes>
        <Route path="/" element={<NoteList notes={notes} setNotes={setNotes} />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
      <Modal open={showModal} onClose={handleModalClose}>
        <Box sx={style}>
          <h3>Add new note</h3>
          <NoteForm setShowModal={setShowModal} />
        </Box>
      </Modal>
    </div>
    </React.Fragment>
  );
};

export default App;
