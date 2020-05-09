import React from 'react';
import Title from './Title.js';
import NoteView from './NoteView.js';
import Note from './Note.js';
import CreateNote from './CreateNote.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Note />
      <Note />
      <Note />
      <Note />
      <CreateNote />
    </div>
  );
}

export default App;