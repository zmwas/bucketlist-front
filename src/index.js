import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import 'material-grid/dist/css/material-grid.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUpContainer from './container/SignUpContainer';
import LoginContainer from './container/LoginContainer';
import BucketsContainer from './container/AddBucketsContainer';
import BucketListContainer from './container/BucketListContainer';
import SearchBucketListsContainer from './container/SearchBucketListsContainer';
import configureStore from './store/configureStore';


const store = configureStore();

render(
    <MuiThemeProvider>
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={SignUpContainer}/>
                <Route path="/login" component={LoginContainer}/>
                <Route  path="/buckets/"  component={SearchBucketListsContainer}/>
            </div>
        </Router>
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('app'),
);

