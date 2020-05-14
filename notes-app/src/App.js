import React, { Component } from 'react';
import Title from './Title.js';
import NoteView from './NoteView.js';
import Note from './Note.js';
import CreateNote from './CreateNote.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteContents: [{
        title: "NoteNote1 jisdbfjsbdf",
        content: "Enter note he"
      },
      {
        title: "Note 2",
        content: "Enter note here"
      }
      ]
    }
  }

  createNewNote = () => {
    const newNote = {
      title: "Note ".concat(this.state.noteContents.length + 1),
      content: "Enter note here"
    };
    this.setState(prevState => {
      return {
        noteContents: [...prevState.noteContents, newNote]
      };
    });
  };

  render() {
    return (
      <div className="App" >
        <Title />
        {this.state.noteContents.map(note => {
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