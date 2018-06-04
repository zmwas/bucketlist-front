import BucketService from '../api/bucketService';
import * as types from './actiontypes';


export function createBucketItemLoading(status) {
    return {type: types.CREATE_BUCKET_ITEM_LOADING, error: false, loading: status};
}

export function createBucketItemSuccess(payload, bucket) {
    return {type: types.CREATE_BUCKET_ITEM_SUCCESS, payload, error: false, loading: false, bucket};
}
export function createBucketItemFailure(message) {
    return {type: types.CREATE_BUCKET_ITEM_FAILURE, message, error: true, loading: false};
}

export function updateBucketItemLoading(status) {
    return {type: types.UPDATE_BUCKET_ITEM_LOADING, error: false, loading: status};
}

export function updateBucketItemSuccess(payload, bucket, bucketlistitems) {
    return {type: types.UPDATE_BUCKET_ITEM_SUCCESS, bucket, bucketlistitems, payload,error: false, loading: false};
}

export function updateBucketItemFailure(message) {
    return {type: types.UPDATE_BUCKET_ITEM_FAILURE, message, error: true, loading: false};
}

export function deleteBucketItemLoading(status) {
    return {type: types.DELETE_BUCKET_ITEM_LOADING, error: false, loading: status};
}

export function deleteBucketItemSuccess(bucket,bucketlistitem) {
    return {type: types.DELETE_BUCKET_ITEM_SUCCESS, bucket,bucketlistitem,error: false, loading: false};
}

export function deleteBucketItemFailure(message) {
    return {type: types.DELETE_BUCKET_ITEM_FAILURE, message, error: true, loading: false};
}


export function createBucketItem(bucket, bucketlistitem) {

    return dispatch => {
        dispatch(createBucketItemLoading(true));
        BucketService.post(`/bucketlist/${bucket.id}/items`, bucketlistitem, (status, data) => {
                dispatch(createBucketItemSuccess(data, bucket, bucketlistitem));

            }
        )
            .catch((error) => {

                dispatch(createBucketItemFailure(error.response.data.message))
            });

    };
}


export function updateBucketItem(bucket,bucketlistitem) {
    return dispatch => {
        dispatch(updateBucketItemLoading(true));
        BucketService.put(`/bucketlist/${bucket.id}/` + `items/${bucketlistitem.id}`,
            bucketlistitem, (status, data) => {
                 dispatch(updateBucketItemSuccess(data,bucket,bucketlistitem));
            }).catch((error) => {
            dispatch(updateBucketItemFailure(error.response.data.message))
        });
    };
}

export function deleteBucketItem(bucket,bucketlistitem, item_id) {
    return dispatch => {
        dispatch(deleteBucketItemLoading(true));

        BucketService.delete(`/bucketlist/${bucket.id}/` + `items/${item_id}`, (status, data) => {
            dispatch(deleteBucketItemSuccess(bucket, bucketlistitem));
        }).catch((error) => {
            dispatch(deleteBucketItemFailure(error.response.data.message))
        });

    }
}
