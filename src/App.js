import { useState, useEffect } from 'react';
import AddButton from './AddButton';
import './App.css';
import Note from './Note';

const initialNotes =
  localStorage.getItem('notes') === null
    ? []
    : JSON.parse(localStorage.getItem('notes'));

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const [isPageRefreshed, setIsPageRefreshed] = useState(true);

  const handleNewNote = (newNote) => {
    setNotes(newNote);
  };

  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  useEffect(() => {
    localStorage.removeItem('notes');
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='App'>
      <div className='add-btn-container'>
        <AddButton
          handleNewNote={handleNewNote}
          notes={notes}
          setIsPageRefreshed={setIsPageRefreshed}
        />
      </div>
      <div className='notes-container'>
        {notes.map((note) => (
          <Note
            key={note.id}
            color={note.color}
            note={note.note}
            timestamp={note.timestamp}
            handleNewNote={handleNewNote}
            notes={notes}
            id={note.id}
            isPageRefreshed={isPageRefreshed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
