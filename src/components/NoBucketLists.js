import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
    margin: 0,
    top: 65,
    right: 'auto',
    bottom: 'auto',
    left: 472,
    position: 'fixed',
};
const NoBucketLists = ({add}) => (
    <MuiThemeProvider>
        <div>There are no bucket lists add a bucket list
            <FloatingActionButton style={style} onClick={add}><ContentAdd/></FloatingActionButton>
        </div>
    </MuiThemeProvider>

);

export default NoBucketLists;