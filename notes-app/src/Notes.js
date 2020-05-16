/*
Now, unused file, here for reference
*/


import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import './Notes.css';


class Notes extends Component {
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

    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    return (
                        <Card className='root'>
                            <CardContent className="root">

                                <div style={{ float: "right", color: "gray", fontSize: "13px" }} >
                                    Created {this.timeStamp(note.time)}
                                    <Button className="button" onClick={() => this.props.deleteNote(note)}
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
                })
                }
            </div>
        );
    }
}

export default Notes