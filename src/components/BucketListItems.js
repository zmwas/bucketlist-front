import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Cell } from 'material-grid/dist';


const BucketListItems = ({ items, editingItem, onEditItem, onDeleteItem }) => (
  <MuiThemeProvider>
    <Paper zDepth={4}>
      <List style={{ height: 300, overflow: 'auto' }}>

            {items.map(item => (
          <Grid key={item.name}>
            <Cell col={8} >
                                  <ListItem
                                      primaryText={item.name}
                key={item.name}
                style={{ padding: 0, marginTop: 0 }} />
            </Cell>
            <Cell col={4} style={{ float: 'right' }}>
              <FlatButton label="EDIT" primary onClick={onEditItem} data-id={item.id} />
              <FlatButton label="DELETE" secondary onClick={onDeleteItem} data-id={item.id} />
            </Cell>
          </Grid>

        ),
        )}

          </List>
    </Paper>
  </MuiThemeProvider>

);

export default BucketListItems;

