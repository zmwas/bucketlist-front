import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BucketListItems from './BucketListItems';
import BucketDetailsCard from './BucketDetailsCard';
import EditForm from './EditForm';
import EditItemForm from './EditItemForm';

const SingleBucketList = ({
  bucket, editing, onSave, onChange, onEdit, onDelete, editingItem, onEditItem, onSaveItem,
  onChangeItem, onDeleteItem, bucketlistitem, addItemDialog, toggle, toggleItem,
}) => (
  <MuiThemeProvider>
    <div>
      {editing ? <EditForm
        bucket={bucket}
        onSave={onSave}
        onChange={onChange}
        toggle={toggle}
      /> :

        <BucketDetailsCard
        title={bucket.title} description={bucket.description} onEdit={onEdit}
        onDelete={onDelete}
        addItemDialog={addItemDialog}
      />}
      <br />


      {editingItem ? <EditItemForm
        bucketlistitem={bucketlistitem}
        onSaveItem={onSaveItem}
        onChangeItem={onChangeItem}
        toggleItem={toggleItem}
      /> :

      <BucketListItems
          items={bucket.bucketlistitems}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
        />}

    </div>
  </MuiThemeProvider>


);

export default SingleBucketList;
