import React from 'react';
import Title from './Title.js';
import NoteView from './NoteView.js';
import Note from './Note.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <NoteView />
      <Note />
    </div>
  );
}

export default App;