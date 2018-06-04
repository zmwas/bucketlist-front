import React from 'react';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Cell} from 'material-grid/dist';
import {Route} from 'react-router-dom';
import {parse} from 'query-string';
import {withRouter} from 'react-router-dom';

import * as actions from '../actions/bucketActions';
import BucketList from '../components/BucketLists';
import Error from '../components/Error';
import Loading from '../components/Loading';
import NoBucketLists from '../components/NoBucketLists';
import SingleBucketContainer from './SingleBucketContainer';
import AddBucketsContainer from './AddBucketsContainer';
import BucketsContainer from './AddBucketsContainer';

class BucketListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exists: true,
            error:false,
            snackbar:false
        };
        this.toggleDialog = this.toggleDialog.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.props.actions.getBucket();
    }


    componentWillReceiveProps(nextProps,nextState) {
        let params = parse(nextProps.location.search);
        let close = nextProps.location.state;
        if (params['q']) {
            this.props.actions.searchBucket(params);
            nextProps.location.search = "";
        } else if (close == "close") {
            this.setState({open: false});
            nextProps.location.state = "";
        }


    }
    close(){
        this.setState({open:false})
    }

    toggleDialog() {
        this.setState({open: !this.state.open});
    }

    render() {
        const buckets = this.props.buckets;
        const loading = this.props.loading;
        const error = this.props.error;
        const message = this.props.message

        if (loading == true) {
            return (<Loading/>);
        }


        return (
            <div>

                <Grid>

                    <Cell col={4} phone={3}>
                        <div className="master">
                            <AddBucketsContainer open={this.state.open} cancel={this.toggleDialog}/>
                            {loading == false && buckets.length==0 ? <NoBucketLists add={this.toggleDialog}/> :
                                <BucketList buckets={buckets} add={this.toggleDialog}/>
                            }
                            {error?<Error
                                open={true}
                                message={message}
                                autoHideDuration={4000}
                                close={this.close}
                            />:<div></div>}

                        </div>

                    </Cell>

                    <Cell col={1} hidePhone hidetablet>

                        <div className="space"/>

                    </Cell>

                    <Cell col={7} hidePhone hidetablet>

                        <div className="detail">

                            <Route path="/buckets/:id" component={SingleBucketContainer}/>

                        </div>

                    </Cell>

                </Grid>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

function mapStateToProps(state) {
    return {
        error: state.buckets.error,
        message: state.buckets.message,
        loading: state.buckets.loading,
        buckets: state.buckets.data.data,
        status:state.buckets.data.status

    };
}


BucketListContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    buckets: PropTypes.array.isRequired,
    children: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BucketListContainer));
