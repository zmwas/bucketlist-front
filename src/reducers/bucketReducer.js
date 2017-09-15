import * as types from '../actions/actiontypes';
import initalState from './initalState';


export default function bucketReducer(state = initalState.buckets, action) {
    switch (action.type) {
        case types.CREATE_BUCKET_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.CREATE_BUCKET_SUCCESS:
            let newState = [...state.data.data, action.payload.data];
            return Object.assign({}, state, {error: action.error, loading: action.loading, data: {data: newState}});
        case types.CREATE_BUCKET_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});
        case types.GET_BUCKETS_SUCCESS:
            return Object.assign({}, state, {error: action.error, loading: action.loading, data: action.payload});
        case types.GET_BUCKETS_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});
        case types.GET_BUCKETS_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.SEARCH_BUCKETS_SUCCESS:
            return Object.assign({}, state, {error: action.error, loading: action.loading, data: action.payload});
        case types.SEARCH_BUCKETS_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});
        case types.SEARCH_BUCKETS_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.UPDATE_BUCKET_SUCCESS:
            let updatedState = [...state.data.data.filter(bucket => bucket.id !== action.payload.data.id), action.payload.data];
            return Object.assign({}, state, {error: action.error, loading: action.loading, data: {data: updatedState}});
        case types.UPDATE_BUCKET_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.UPDATE_BUCKET_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});
        case types.DELETE_BUCKET_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.DELETE_BUCKET_SUCCESS: {
            const truncatedState = [...state.data.data.filter(bucket => bucket.id !== action.bucket.id)];
            return Object.assign({}, state, {
                error: action.error,
                loading: action.loading,
                data: {data: truncatedState}
            });
        }
        case types.CREATE_BUCKET_ITEM_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.CREATE_BUCKET_ITEM_SUCCESS:
            let currentBucket = state.data.data.find(bucket => bucket.id == action.bucket.id);
            let currentItems = currentBucket.bucketlistitems;
            let newItem = [...currentItems, action.payload.data];
            let newBucket = Object.assign({}, currentBucket, {bucketlistitems: newItem});
            let newBucketState = [...state.data.data.filter(bucket => bucket.id !== action.bucket.id), newBucket];
            return Object.assign({}, state, {
                error: action.error,
                loading: action.loading,
                data: {data: newBucketState}
            });
        case types.CREATE_BUCKET_ITEM_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});

        case types.UPDATE_BUCKET_ITEM_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.UPDATE_BUCKET_ITEM_SUCCESS:
            let current = state.data.data.find(bucket => bucket.id === action.bucket.id);
            let updatedItemState = [...current.bucketlistitems.filter(item => item.id !== action.payload.data.id), action.payload.data];
            let bucketState = Object.assign({}, current, {bucketlistitems: updatedItemState});
            let updatedBucketState = [...state.data.data.filter(bucket => bucket.id !== action.bucket.id), bucketState];
            return Object.assign({}, state, {
                error: action.error,
                loading: action.loading,
                data: {data: updatedBucketState}
            });

        case types.UPDATE_BUCKET_ITEM_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});
        case types.DELETE_BUCKET_ITEM_LOADING:
            return Object.assign({}, state, {error: action.error, loading: action.loading});
        case types.DELETE_BUCKET_ITEM_SUCCESS:
            let currentBucketItemState = state.data.data.find(bucket => bucket.id === action.bucket.id);
            let truncatedItemState = [...currentBucketItemState.bucketlistitems.filter(item => item.id !== action.bucketlistitem.id)];
            let truncatedBucketState = Object.assign({}, currentBucketItemState, {bucketlistitems: truncatedItemState});
            let newTruncatedBucketState = [...state.data.data.filter(bucket => bucket.id !== action.bucket.id), truncatedBucketState];
            return Object.assign({}, state, {
                error: action.error,
                loading: action.loading,
                data: {data: newTruncatedBucketState}
            });
        case types.DELETE_BUCKET_ITEM_FAILURE:
            return Object.assign({}, state, {error: action.error, loading: action.loading, message: action.message});


    }
    return state;
}
