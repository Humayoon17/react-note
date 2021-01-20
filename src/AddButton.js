import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddButton = ({ notes, handleNewNote, setIsPageRefreshed }) => {
  const [showColors, setShowColors] = useState(false);

  const handleSelectColor = (e) => {
    setIsPageRefreshed(false);
    const className = e.target.getAttribute('btncolor');
    const newNote = {
      id: uuidv4(),
      note: '',
      timestamp: new Date(),
      color: className,
    };

    handleNewNote([...notes, newNote]);
    setShowColors(false);
  };

  return (
    <>
      <div className='add-btn'>
        <Fab
          onClick={() => {
            setShowColors(!showColors);
          }}
          className='btn-add-new'
          aria-label='add'
        >
          <Add />
        </Fab>
      </div>

      {showColors && (
        <div
          className='colors-container'
          style={{
            display: showColors && 'flex',
          }}
        >
          <Fab
            onClick={handleSelectColor}
            btncolor='c2'
            size='small'
            className='c2'
          >
            {''}
          </Fab>
          <Fab
            onClick={handleSelectColor}
            size='small'
            className='c3'
            btncolor='c3'
          >
            {''}
          </Fab>
          <Fab
            onClick={handleSelectColor}
            size='small'
            className='c4'
            btncolor='c4'
          >
            {''}
          </Fab>
          <Fab
            onClick={handleSelectColor}
            size='small'
            className='c5'
            btncolor='c5'
          >
            {''}
          </Fab>
          <Fab
            onClick={handleSelectColor}
            size='small'
            className='c6'
            btncolor='c6'
          >
            {''}
          </Fab>
          <Fab
            onClick={handleSelectColor}
            size='small'
            className='c7'
            btncolor='c7'
          >
            {''}
          </Fab>
          <Fab
            onClick={handleSelectColor}
            size='small'
            className='c8'
            btncolor='c8'
          >
            {''}
          </Fab>
        </div>
      )}
    </>
  );
};

export default AddButton;
