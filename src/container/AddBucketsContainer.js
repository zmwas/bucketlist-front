import React from 'react';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/bucketActions';
import { withRouter } from 'react-router';

import BucketForm from '../components/BucketForm';


class BucketsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucket: {
        title: '',
        description: '',

      },
    };
    this.addBucket = this.addBucket.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  addBucket(event) {
    event.preventDefault();
    this.props.actions.createBucket(this.state.bucket);
    this.props.history.push({pathname:'/buckets/',state:"close"});

  }

  changeTitle(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        bucket: { title: value, description: this.state.bucket.description },
      };
    });
  }

  changeDescription(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        bucket: { title: this.state.bucket.title, description: value },
      };
    });
  }

  render() {
    return (
      <BucketForm
        bucket={this.state.bucket}
        open={this.props.open}
        cancel={this.props.cancel}
        onSave={this.addBucket}
        changeName={this.changeTitle}
        changeDescription={this.changeDescription}
        btnName="CREATE"
      />
    );
  }
}

BucketsContainer.propTypes = {
  actions: PropTypes.object.isRequired,

};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(BucketsContainer));
