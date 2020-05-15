import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import './CreateNote.css'

class CreateNote extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Card className="create-note-button">
                {/* <button onClick={() => this.props.buttonPass()}>
                    + New Note
                </button> */}
                <Button className="button" onClick={() => this.props.buttonPass()}>
                    New Note
                    <AddIcon className="button" />
                </Button>
            </Card>
        )
    }
}

export default CreateNote