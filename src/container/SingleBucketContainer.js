import React from 'react';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/bucketActions';
import SingleBucket from '../components/SingleBucket';
import AddItemDialog from '../components/AddItemDialog';

class SingleBucketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bucket: this.props.bucket,
            bucketitem: {name: ''},
            editing: false,
            editingitem: false,
            open: false,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateBucket = this.updateBucket.bind(this);
        this.updateBucketState = this.updateBucketState.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.updateBucketItem = this.updateBucketItem.bind(this);
        this.getItembyId = this.getItembyId.bind(this);
        this.toggleEditItem = this.toggleEditItem.bind(this);
        this.updateBucketItemState = this.updateBucketItemState.bind(this);
        this.deleteBucketItem = this.deleteBucketItem.bind(this);
        this.toggleDialog = this.toggleDialog.bind(this);
        this.createBucketItem = this.createBucketItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.bucket.id != nextProps.bucket.id) {
            this.setState({bucket: nextProps.bucket});
        }
    }

    toggleEdit() {
        this.setState({bucket: this.state.bucket, editing: !this.state.editing});
    }

    toggleEditItem(event) {
        const bucketitem = this.getItembyId(event);
        this.setState({editingitem: !this.state.editingitem, bucketitem});
    }


    updateBucketState(event) {
        const field = event.target.name;
        const bucket = this.state.bucket;
        bucket[field] = event.target.value;

        return this.setState({bucket});
    }

    updateBucket(event) {
        event.preventDefault();

        this.props.actions.updateBucket(this.state.bucket);
        this.props.history.push('/buckets/' + this.state.bucket.id);
        this.toggleEdit();
    }

    deleteBucket(event) {
        this.props.actions.deleteBucket(this.state.bucket);
        this.props.history.push('/buckets/');
    }

    updateBucketItemState(event) {
        const field = event.target.name;
        const bucketitem = this.state.bucketitem;
        bucketitem[field] = event.target.value;
        return this.setState({bucketitem});
    }

    getItembyId(event) {
        const id = event.currentTarget.getAttribute('data-id');
        const items = this.state.bucket.bucketlistitems;
        const item = Object.assign({}, items.find(item => item.id == id));
        return item;
    }

    createBucketItem(event) {
        event.preventDefault();
        this.props.actions.createBucketItem(this.state.bucket, this.state.bucketitem);
        this.toggleDialog();
        this.props.actions.getBucket();
        this.props.history.push('/buckets/' + this.state.bucket.id);


    }

    updateBucketItem(event) {
        event.preventDefault();
        const id = this.state.bucket.id;
        this.props.actions.updateBucketItem(this.state.bucket, this.state.bucketitem);
        this.setState({editingitem: !this.state.editingitem});
        this.props.actions.getBucket();
        this.props.history.push('/buckets/' + id);
    }

    deleteBucketItem(event) {
        const bucket = this.state.bucket;
        const item_id = event.currentTarget.getAttribute('data-id');
        this.props.actions.deleteBucketItem(bucket, item_id);
        this.props.actions.getBucket();
        this.props.history.push('/buckets/' + bucket.id);

    }

    toggleDialog() {
        this.setState({open: !this.state.open});
    }


    render() {
        return (
            <div>
                <SingleBucket
                    bucket={this.state.bucket}
                    editing={this.state.editing}
                    editingItem={this.state.editingitem}
                    bucketlistitem={this.state.bucketitem}
                    addItemDialog={this.toggleDialog}
                    toggle={this.toggleEdit}
                    onChange={this.updateBucketState}
                    onEdit={this.toggleEdit}
                    onSave={this.updateBucket}
                    onDelete={this.deleteBucket}
                    toggleItem={this.toggleEditItem}
                    onEditItem={this.toggleEditItem}
                    onChangeItem={this.updateBucketItemState}
                    onSaveItem={this.updateBucketItem}
                    onDeleteItem={this.deleteBucketItem}
                />
                <AddItemDialog
                    open={this.state.open}
                    cancel={this.toggleDialog}
                    submit={this.createBucketItem}
                    onChange={this.updateBucketItemState}
                />

            </div>
        );
    }
}

SingleBucketContainer.propTypes = {
    bucket: PropTypes.object.isRequired,
};

function getBucketbyId(buckets, id) {
    const bucket = Object.assign({}, buckets.find(bucket => bucket.id == id));
    return bucket;
}

function mapStateToProps(state, props) {
    let bucket = {title: '', description: '', bucketlistitems: []};
    const bucketId = props.match.params.id;
    const buckets = state.buckets;
    if (buckets.length > 0 && bucketId) {
        bucket = getBucketbyId(buckets, bucketId);
    }

    return {bucket};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBucketContainer);
