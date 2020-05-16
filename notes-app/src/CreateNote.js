import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import './CreateNote.css'

class CreateNote extends Component {

    render() {
        return (
            <Button className="button" onClick={() => this.props.buttonPass()}>
                New Note
                <AddIcon className="button" />
            </Button>
        )
    }
}

export default CreateNote