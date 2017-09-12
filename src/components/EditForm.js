import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

const style = {
  top: 120,
  right: 100,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
};
const EditForm = ({ bucket, onSave, onChange, toggle }) => (

  <MuiThemeProvider>
    <div>
      <Card>
        <FloatingActionButton style={style} onClick={toggle}><ContentClear /></FloatingActionButton>
        <center>
          <form>
            <CardTitle title="Title" />
            <TextField
              value={bucket.title}
              type="text"
              name="title"
              onChange={onChange}
            />
            <br />
            <CardTitle title="Description" />
            <TextField
              value={bucket.description}
              type="text"
              name="description"
              onChange={onChange}
            />
            <br />
            <RaisedButton label="SAVE" onClick={onSave} />
          </form>
        </center>
      </Card>
    </div>
  </MuiThemeProvider>


);

export default EditForm;
