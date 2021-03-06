import React from 'react';
import Link from "@material-ui/core/Link";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideDialogBox({ title, message, openbox, setDialogState }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(openbox);
    }, [openbox]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log('handle close');
        setOpen(false);
        setDialogState(false);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {message}
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    <Link
                        href="https://www.youtube.com/watch?v=0AI-m0rhZG8&t=26s"
                        variant="body2"
                    >
                        video tutorial
                    </Link>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    OK. I got it.
                </Button>
            </DialogActions>
        </Dialog>
    );
}
