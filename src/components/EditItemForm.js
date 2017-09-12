import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

const style = {
  margin: 0,
  top: 400,
  right: 100,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
};
const EditItemForm = ({ bucketlistitem, onSaveItem, onChangeItem, toggleItem }) => (

  <MuiThemeProvider>
    <div>
      <Card zDepth={3}>
        <FloatingActionButton style={style} onClick={toggleItem}><ContentClear /></FloatingActionButton>
        <center>
          <form>
            <CardTitle title="Name" />
            <TextField
              value={bucketlistitem.name}
              type="text"
              name="name"
              onChange={onChangeItem}

            />
            <br />
            <RaisedButton label="SAVE" onClick={onSaveItem} />
          </form>
        </center>
      </Card>
    </div>
  </MuiThemeProvider>


);

export default EditItemForm;
