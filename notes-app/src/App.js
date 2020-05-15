import React, { Component } from 'react';
import Title from './Title.js';
import NoteView from './NoteView.js';
import Note from './Note.js';
import CreateNote from './CreateNote.js';
import './App.css';


const defaultNotes = [
  {
    title: "Note 1",
    content: "Enter text here",
  },
  {
    title: "Note 2",
    content: "Enter text here",
  },
  {
    title: "Note 3",
    content: "Enter text here",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  createNewNote = () => {
    // console.log("Create new note triggered\n");
    // this.setState(prevState => {
    //   return {
    //     notes:
    //       [...prevState.notes,
    //       {
    //         title: "Default",
    //         content: "Enter note here"
    //       }
    //       ]
    //   };
    // });

    const newNote = {
      title: "Note ".concat(this.state.notes.length + 1),
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