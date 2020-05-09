import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 260,
        minHeight: 200,
        maxHeight: 260,
        margin: '30px',
        color: 'red',
        display: 'inline-block'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Note() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const title = 'Note 1'
    const body = "Here's some text!"

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography className='noteBody'>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
}