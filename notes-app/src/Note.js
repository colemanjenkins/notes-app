import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import './Note.css';


class Note extends Component {


    constructor(props) {
        super(props);

    };

    render() {
        return (
            <Card className='root'>
                <CardContent>
                    <Typography className='title' gutterBottom>
                        <InputBase
                            className='title'
                            defaultValue={this.props.title}
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                    </Typography>
                    <Typography className='noteBody'>
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