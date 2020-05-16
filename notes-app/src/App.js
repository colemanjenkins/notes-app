import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import Title from './Title.js';
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
          time: Date.now()
        }
      ]
    };
  }

  timeStamp = (time) => {
    let months = ["January", "February", "March",
      "April", "May", "June", "July", "August", "September",
      "October", "November", "December"];

    let output = '';
    let date = new Date(time);

    //format: Month ##day, ####year at hour:min

    output += months[date.getMonth()] + ' ';
    output += date.getDate() + ', ';
    output += date.getFullYear() + ' at ';

    let hours = date.getHours();
    let amOrPm = "AM"
    if (hours > 12 && hours < 24) {
      hours -= 12;
      amOrPm = "PM";
    } else if (hours === 24) {
      hours = 12
      amOrPm = "AM"
    }
    output += hours + ':';

    let minutes = date.getMinutes();
    let minOutput = '' + minutes;
    if (minutes < 10)
      minOutput = "0" + minutes;

    output += minOutput + " " + amOrPm;

    return output;
  }

  createNewNote = () => {
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

  deleteNote = delNote => {
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
          {this.state.notes.map(note => {
            return (
              <Card className='root'>
                <CardContent className="root">

                  <div style={{ float: "right", color: "gray", fontSize: "13px" }} >
                    Created {this.timeStamp(note.time)}
                    <Button className="button" onClick={() => this.deleteNote(note)}
                      style={{
                        textTransform: "none", margin: "0px", marginBottom: "4px", border: "0px",
                        padding: "0px"
                      }}>
                      <CloseIcon className="button" style={{ color: "gray", }} />
                    </Button>
                  </div>

                  <Typography className='title' gutterBottom>
                    <InputBase
                      className='title'
                      defaultValue={note.title}
                      inputProps={{ 'aria-label': 'naked' }}
                      style={{ fontSize: "20px", color: "black" }}
                    />
                  </Typography>
                  <Typography className="noteBody">
                    <InputBase
                      defaultValue={note.content}
                      inputProps={{ 'aria-label': 'naked' }}
                      multiline
                    />
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    );
  }
}

export default App;