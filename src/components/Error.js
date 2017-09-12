import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Error = ({message, open,close}) => (
    <MuiThemeProvider>
        <Snackbar
            open={open}
            message={message}
            autoHideDuration={4000}
            onRequestClose={close}
        />
    </MuiThemeProvider>

);

export default Error;

