import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 0,
  top: 113,
  right: 100,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
};
const BucketDetailsCard = ({ title, description, onEdit, onDelete, addItemDialog }) => (

  <MuiThemeProvider>
    <div>
      <Card zDepth={3}>
        <CardTitle title={title} />
        <FloatingActionButton style={style} onClick={addItemDialog}><ContentAdd /></FloatingActionButton>
        <Divider />
        <CardTitle title="Description" />
        <CardText>
          {description}
        </CardText>
        <CardActions>
          <FlatButton label="EDIT" primary onClick={onEdit} />
          <FlatButton label="DELETE" secondary onClick={onDelete} />
        </CardActions>
      </Card>
    </div>
  </MuiThemeProvider>
);

export default BucketDetailsCard;
