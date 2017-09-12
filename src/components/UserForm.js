import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const UserForm = ({ onSave, changeEmail, changePassword, btnName }) => (

  <MuiThemeProvider >
    <div>
      <form>
        <TextField
          hintText="person@example.com"
          floatingLabelText="Email"
          type="email"
          name="email"
          onChange={changeEmail}
        />
        <br />
        <TextField
          type="password"
          floatingLabelText="Password"
          name="password"
          onChange={changePassword}
        />
        <br />
        <RaisedButton label={btnName} onClick={onSave} />
      </form>
    </div>
  </MuiThemeProvider>


);

export default UserForm;
