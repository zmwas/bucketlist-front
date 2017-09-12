import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  margin: 20,
};
const AddItemDialog = ({ open, cancel, submit, onChange, bucket, bucketlistitem }) => (
  <MuiThemeProvider>
    <Dialog
      title="Add an item to your bucket list"
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

      <form>
        <TextField
          hintText="See sakura blossoms"
          floatingLabelText="Name"
          type="text"
          name="name"
          onChange={onChange}
        />
        <br />
        <RaisedButton
          label="ADD"
          primary
          onClick={submit}
        />
      </form>

    </Dialog>
  </MuiThemeProvider>


);

export default AddItemDialog;
