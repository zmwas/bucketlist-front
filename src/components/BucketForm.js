import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  margin: 20,
};
const BucketForm = ({ onSave, cancel, changeName, changeDescription, btnName, open }) => (

  <MuiThemeProvider>
    <div>
      <Dialog
        title="Add a bucket list"
        actions={[
          <RaisedButton
            label="Cancel"
            primary
            onClick={cancel}
            style={styles}
          />,
        ]}
        open={open}
      >
        <center>
          <form>
            <TextField
              hintText="Stuff to do before I die"
              floatingLabelText="Title"
              type="text"
              name="title"
              onChange={changeName}
            />
            <br />
            <TextField
              type="text"
              floatingLabelText="Description"
              name="description"
              onChange={changeDescription}
            />
            <br />
            <RaisedButton label={btnName} onClick={onSave} />
          </form>
        </center>
      </Dialog>
    </div>
  </MuiThemeProvider>


);

export default BucketForm;
