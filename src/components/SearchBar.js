import React from 'react';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

const style = {
    backgroundColor: 'white',
    padding: 0,
};
const SearchBar = ({handleChange, enter}) => (
    <div>
        <form onSubmit={enter}>
            <TextField name="q" style={style} placeholder='Search' onChange={handleChange}>
            </TextField>
        </form>
    </div>
);

export default SearchBar;