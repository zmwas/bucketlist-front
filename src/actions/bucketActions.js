import BucketService from '../api/bucketService';
import * as types from './actiontypes';


export function createBucketLoading(status) {
    return {type: types.CREATE_BUCKET_LOADING, loading: status, error: false};
}

export function createBucketSuccess(payload) {
    return {type: types.CREATE_BUCKET_SUCCESS, payload, error: false, loading: false};
}

export function createBucketFailure(message) {
    return {type: types.CREATE_BUCKET_FAILURE, error: true, message, loading: false};
}

export function getBucketsLoading(status) {
    return {type: types.GET_BUCKETS_LOADING, loading: status, error: false};
}

export function getBucketsSuccess(payload) {
    return {type: types.GET_BUCKETS_SUCCESS, payload, error: false, loading: false};
}

export function getBucketsFailure(message) {
    return {type: types.GET_BUCKETS_FAILURE, message, error: true, loading: false};
}

export function searchBucketsLoading(status) {
    return {type: types.SEARCH_BUCKETS_LOADING, error: false, loading: status};
}

export function searchBucketsSuccess(payload) {
    return {type: types.SEARCH_BUCKETS_SUCCESS, payload, error: false, loading: false};
}

export function searchBucketsFailure(message) {
    return {type: types.SEARCH_BUCKETS_FAILURE, message, error: true, loading: false};
}

export function updateBucketLoading(status) {
    return {type: types.UPDATE_BUCKET_LOADING, error: false, loading: status};
}

export function updateBucketSuccess(payload) {
    return {type: types.UPDATE_BUCKET_SUCCESS, payload, error: false, loading: false};
}

export function deleteBucketLoading(status) {
    return {type: types.DELETE_BUCKET_LOADING, error: false, loading: status};
}

export function updateBucketFailure(message) {
    return {type: types.UPDATE_BUCKET_FAILURE, message, error: true, loading: false};
}

export function deleteBucketSuccess(bucket) {
    return {type: types.DELETE_BUCKET_SUCCESS, bucket, error: false, loading: false};
}

export function deleteBucketFailure(message) {
    return {type: types.DELETE_BUCKET_FAILURE, message, error: true, loading: false};
}


export function createBucket(bucket) {
    return dispatch => {
        dispatch(createBucketLoading(true));
        BucketService.post('/bucketlist/', bucket, (status, data) => dispatch(createBucketSuccess(data))).catch((error) => {
            dispatch(createBucketFailure(error.response.data.message));
        });

    };
}

export function getBucket() {
    return dispatch => {
        dispatch(getBucketsLoading(true));
        BucketService.get('/bucketlist/', (status, data) => dispatch(getBucketsSuccess(data))).catch((error) => {
            return dispatch(getBucketsFailure(error.response.data.message));
        });
    };
}

export function searchBucket(params) {
    return dispatch => {
        dispatch(searchBucketsLoading(true));
        BucketService.search('/bucketlist/', params, (status, data) => dispatch(searchBucketsSuccess(data)))
            .catch((error) => {
                dispatch(searchBucketsFailure(error.response.data.message));
            });

    };
}

export function updateBucket(bucket) {
    return dispatch => {
        dispatch(updateBucketLoading(true));
        BucketService.put(`/bucketlist/${bucket.id}`, bucket, (status, data) => dispatch(updateBucketSuccess(data)))
            .catch((error) => {
                dispatch(updateBucketFailure(error.response.data.message));
            });
    };
}

export function deleteBucket(bucket) {
    return dispatch => {
        dispatch(deleteBucketLoading(true));
        BucketService.delete(`/bucketlist/${bucket.id}`, (status, data) => dispatch(deleteBucketSuccess(bucket)))
            .catch((error) => {
                dispatch(deleteBucketFailure(error.response.data.message));
            });
    };
}
