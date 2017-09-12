import { combineReducers } from 'redux';
import user from './authreducer';
import buckets from './bucketReducer';

const rootReducer = combineReducers({
  user,
  buckets,
});

export default rootReducer;
