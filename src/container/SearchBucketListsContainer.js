import React from 'react';
import {Route} from 'react-router';
import BucketListContainer from './BucketListContainer';
import Header from '../components/Header';
import {withRouter} from 'react-router-dom'


class SearchBucketListsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            params: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;

        this.setState(function () {
            return {params: value};
        });
        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();

        let params = this.state.params;
        this.props.history.push({
            pathname: '/buckets/',
            search: `?q=` + params

        });

    }

    render() {
        return (
            <div>
                <Header handleChange={this.handleChange} enter={this.handleSubmit}/>
                <Route  path="/buckets" component={BucketListContainer}/>
            </div>

        );
    }


}

export default withRouter(SearchBucketListsContainer);