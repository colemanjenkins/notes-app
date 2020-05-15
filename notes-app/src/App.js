import React, { Component } from 'react';
import Title from './Title.js';
// import NoteView from './NoteView.js';
import Note from './Note.js';
import CreateNote from './CreateNote.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "Note 1",
          content: "Enter note here",
        }]
    };
  }

  createNewNote = () => {
    const newNote = {
      title: "Note " + (this.state.notes.length + 1),
      content: "Enter note here"
    };
    this.setState(prevState => {
      return {
        notes: [...prevState.notes, newNote]
      };
    });
  };


  render() {
    return (
      <div className="App" >
        <Title />

        {this.state.notes.map(note => {
          /* {defaultNotes.map(note => { */
          return (
            <Note title={note.title} content={note.content} className="note" />
          );
        })}
        <CreateNote buttonPass={this.createNewNote} />
      </div>
    );
  }
}

export default App;