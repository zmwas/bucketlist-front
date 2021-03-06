import * as types from '../actions/actiontypes';
import initalState from './initalState';


export default function bucketReducer(state = initalState.buckets, action) {
  switch (action.type) {
    case types.CREATE_BUCKET_SUCCESS:
      return [Object.assign({}, action.bucket)];
    case types.GET_BUCKETS_SUCCESS:
      return action.buckets;
    case types.SEARCH_BUCKETS_SUCCESS:
        return action.buckets;
    case types.UPDATE_BUCKET_SUCCESS:
      return [...state.filter(bucket => bucket.id !== action.bucket.id),
        Object.assign({}, action.bucket)];
    case types.DELETE_BUCKET_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfBucketToDelete = state.findIndex(bucket => bucket.id == action.bucket.id);
      newState.splice(indexOfBucketToDelete, 1);
      return newState;
    }
    case types.CREATE_BUCKET_ITEM_SUCCESS:
      return [Object.assign({}, action.bucket)];
    case types.UPDATE_BUCKET_ITEM_SUCCESS:
      return [...state.filter(bucket => bucket.id !== action.bucket.id),
        Object.assign({}, action.bucket)];
    case types.UPDATE_BUCKET_ITEM_SUCCESS:
      return [...state.filter(bucket => bucket.id !== action.bucket.id),
        Object.assign({}, action.bucket)];
  }
  return state;
}
