import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import SearchBar from './SearchBar';

const Header = ({handleChange,enter}) => (
    <MuiThemeProvider>
        <AppBar title="A new name">
            <SearchBar handleChange={handleChange} enter={enter}/>
        </AppBar>
    </MuiThemeProvider>


);
export default Header;
