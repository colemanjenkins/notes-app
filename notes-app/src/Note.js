import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 260,
        minHeight: 200,
        maxHeight: 260,
        margin: '30px',
        color: 'red',
        display: 'inline-block',
        overflow: 'scroll'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: 'gray',
    },
    pos: {
        marginBottom: 12,
    },
    input: {

    },
});

export default function Note() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    let five = 1;
    const defaultTitle = 'Note ' + five;
    const body = "Here's some text!"

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    <InputBase
                        className={classes.title}
                        defaultValue={defaultTitle}
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                </Typography>
                <Typography className='noteBody'>
                    <InputBase
                        className={classes.input}
                        defaultValue="Enter note here"
                        inputProps={{ 'aria-label': 'naked' }}
                        multiline
                    />
                </Typography>
            </CardContent>
        </Card>
    );
}