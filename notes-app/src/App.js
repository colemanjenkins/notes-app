import React, { Component } from 'react';

import Title from './Title.js';
import Notes from './Notes.js'
import CreateNote from './CreateNote.js';
import './App.css';

/*Having trouble getting local host to run. 
Comments on code have still been made.  */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "Note 1",
          content: "Enter note here",
          time: Date.now()
        }
      ]
    };
  }

  createNewNote = () => {
    console.log("createNote()")
    // let array = [...this.state.notes];
    const newNote = {
      title: "Note " + (this.state.notes.length + 1),
      content: "Enter note here",
      time: Date.now()
    };
    // const newArr = array.push(newNote);
    // this.setState({ notes: newArr });
    this.setState(prevState => {
      return {
        notes: [...prevState.notes, newNote]
      };
    });
  };

  handleContentChange(event, note) {

  }

  deleteNote = delNote => {
    console.log("deleteNote()")
    console.log(delNote)
    // let array = [...this.state.notes];
    // let index = array.indexOf(delNote);
    // if (index != -1) {
    //   array.splice(index, 1);
    //   this.setState({ notes: array });
    // }

    this.setState({
      notes: this.state.notes.filter(function (note) {
        return note !== delNote
      })
    });

    // const newNotes = this.state.notes.filter(
    //   note => delNote !== note
    // );
    // console.log(newNotes);
    // this.setState(prevState => {
    //   return { notes: newNotes };
    // });
    // console.log(this.state.notes);
  }

  render() {
    return (
      <div className="App" >
        <Title />
        <div className="create">
          <CreateNote buttonPass={this.createNewNote} />
        </div>
        <div className="notes">
          <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
        </div>
      </div>
    );
  }
}

export default App;