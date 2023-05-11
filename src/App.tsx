import { Modal, Box } from '@mui/material';
import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(list);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>My Notes App</h1>
      <button onClick={() => setShowModal(true)}>Add Note</button>
      <Routes>
        <Route path="/" element={<NoteList notes={notes} setNotes={setNotes} />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={{ width: 300, bgcolor: 'background.paper', p: 2 }}>
          <h3>Add new note</h3>
          <NoteForm setShowModal={setShowModal} />
        </Box>
      </Modal>
    </div>
  );
};

export default App;
