import { Button } from '@material-ui/core';
import { Delete, Edit, Save } from '@material-ui/icons';
import React, { useState, useRef } from 'react';

export default function Note({
  note,
  timestamp,
  handleNewNote,
  color,
  notes,
  id,
  isPageRefreshed,
}) {
  const coverDevRef = useRef();
  const [noteInput, setNoteInput] = useState(note);

  document.addEventListener(
    'DOMContentLoaded',
    function () {
      if (isPageRefreshed) {
        const exists = document.querySelectorAll('.show-cover-dev');

        exists.forEach((ex) => {
          ex.classList.remove('show-cover-dev');
        });
      }
    },
    false
  );

  const handleEdit = () => {
    coverDevRef.current.classList.toggle('show-cover-dev');
  };

  const handleSave = () => {
    coverDevRef.current.classList.toggle('show-cover-dev');

    if (noteInput.trim() !== '') {
      // find the note and save the new value to it
      const editedNote = notes.map((noteTemp) => {
        if (noteTemp.id === id) {
          return { ...noteTemp, note: noteInput, timestamp: new Date() };
        }
        return noteTemp;
      });

      handleNewNote(editedNote);
    }
  };

  const handleDelete = () => {
    const tempNotes = notes.filter((noteTemp) => noteTemp.id !== id);

    handleNewNote(tempNotes);
  };

  function getDate(dateValue) {
    const date = new Date(dateValue);
    const day = date.getDay();
    const month = getMonth(date.getMonth());
    const year = date.getFullYear();

    return month + '-' + day + '-' + year;
  }

  function getMonth(month) {
    const monthShortNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return monthShortNames[month];
  }

  return (
    <div className={`note ${color}`}>
      <Button onClick={handleSave} className='btn-save-note'>
        <Save />
      </Button>
      <textarea
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
      />
      <div ref={coverDevRef} className={`cover-dev show-cover-dev ${color} `}>
        <div className='text'>{noteInput}</div>
        <div className='info'>
          <span>{getDate(timestamp)}</span>
          <div className='action-btns'>
            <Button onClick={handleDelete} className='btn-delete'>
              <Delete />
            </Button>
            <Button onClick={handleEdit} className='btn-edit'>
              <Edit />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
