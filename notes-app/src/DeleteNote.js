import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import './CreateNote.css'

class DeleteNote extends Component {

    render() {
        return (
            <Button className="button" onClick={() => this.props.deleteNote(this)}>
                Delete
                <CloseIcon className="button" />
            </Button>
            // <Card className="create-note-button">
            //     {/* <button onClick={() => this.props.buttonPass()}>
            //         + New Note
            //     </button> */}
            //     <Button className="button" onClick={() => this.props.buttonPass()}>
            //         New Note
            //         <AddIcon className="button" />
            //     </Button>
            // </Card>
        )
    }
}

export default DeleteNote