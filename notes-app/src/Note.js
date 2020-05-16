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
import DeleteNote from './DeleteNote.js'
import './Note.css';


class Note extends Component {

    render() {
        return (
            <Card className='root'>
                <CardContent className="root">
                    {/* <div style={{ float: "right", color: "red", fontSize: "13px" }}>
                        Delete
                    </div> */}
                    <Button className="button" onClick={() => this.props.deleteNote()}>
                        Delete
                        <CloseIcon className="button" />
                    </Button>
                    <div style={{ float: "right", color: "gray", fontSize: "13px" }} >
                        Created {this.props.time}
                    </div>
                    <Typography className='title' gutterBottom>
                        <InputBase
                            className='title'
                            defaultValue={this.props.title}
                            inputProps={{ 'aria-label': 'naked' }}
                            style={{ fontSize: "20px", color: "black" }}
                        />
                    </Typography>
                    <Typography className="noteBody">
                        <InputBase
                            defaultValue={this.props.content}
                            inputProps={{ 'aria-label': 'naked' }}
                            multiline
                        />
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Note