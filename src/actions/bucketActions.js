import BucketService from '../api/bucketService';
import * as types from './actiontypes';


export function createBucketSuccess(bucket) {
    return {type: types.CREATE_BUCKET_SUCCESS,bucket};
}
export function createBucketFailure(response) {
    return {type: types.CREATE_BUCKET_FAILURE};
}
export function getBucketsSuccess(payload) {
    return {type: types.GET_BUCKETS_SUCCESS, payload,error:false,loading:false};
}
export function getBucketsFailure(buckets) {
    return {type: types.GET_BUCKETS_FAILURE, buckets};
}
export function searchBucketsSuccess(buckets) {
    return {type: types.SEARCH_BUCKETS_SUCCESS, buckets};
}
export function searchBucketsFailure(buckets) {
    return {type: types.SEARCH_BUCKETS_FAILURE, buckets};
}

export function updateBucketSuccess(bucket) {
    return {type: types.UPDATE_BUCKET_SUCCESS, bucket};
}
export function updateBucketFailure(bucket) {
    return {type: types.UPDATE_BUCKET_FAILURE, bucket};
}
export function deleteBucketSuccess(bucket) {
    return {type: types.DELETE_BUCKET_SUCCESS, bucket};
}
export function deleteBucketFailure(bucket) {
    return {type: types.DELETE_BUCKET_FAILURE, bucket};
}
export function createBucketItemSuccess(response) {
    return {type: types.CREATE_BUCKET_ITEM_SUCCESS};
}

export function updateBucketItemSuccess(bucket) {
    return {type: types.UPDATE_BUCKET_ITEM_SUCCESS, bucket};
}

export function deleteBucketItemSuccess(bucket) {
    return {type: types.DELETE_BUCKET_ITEM_SUCCESS, bucket};
}

export function createBucket(bucket) {
    return dispatch => BucketService.post('/bucketlist/', bucket, (status, data) => dispatch(createBucketSuccess(data))).catch((error) => {
        throw (error);
    });
}

export function getBucket() {
    return dispatch => BucketService.get('/bucketlist/', (status, data) => dispatch(getBucketsSuccess(data))).catch((error) => {
        return dispatch(getBucketsFailure(error))

    });
}

export function searchBucket(params) {
    return dispatch => BucketService.search('/bucketlist/',params, (status, data) => dispatch(searchBucketsSuccess(data))).catch((error) => {
        throw (error);
    });
}

export function updateBucket(bucket) {
    return dispatch => BucketService.put(`/bucketlist/${bucket.id}`, bucket, (status, data) => dispatch(updateBucketSuccess(bucket))).catch((error) => {
        throw (error);
    });
}

export function deleteBucket(bucket) {
    return dispatch => BucketService.delete(`/bucketlist/${bucket.id}`, (status, data) => dispatch(deleteBucketSuccess(bucket))).catch((error) => {
        throw (error);
    });
}

export function createBucketItem(bucket, bucketlistitem) {

    return dispatch => BucketService.post(`/bucketlist/${bucket.id}/items`, bucketlistitem, (status, data) => dispatch(createBucketItemSuccess(bucket))).catch((error) => {
        console.log(error.response);

        throw (error);
    });
}


export function updateBucketItem(bucket, bucketlistitem) {
    return dispatch => BucketService.put(`/bucketlist/${bucket.id}/` + `items/${bucketlistitem.id}`,
        bucketlistitem, (status, data) => {
            const index = bucket.bucketlistitems.findIndex(item => item.id == bucketlistitem.id);
            bucket.bucketlistitems.splice(index, 1, bucketlistitem);
            return dispatch(updateBucketItemSuccess(bucket));
        }).catch((error) => {
        throw (error);
    });
}

export function deleteBucketItem(bucket, item_id) {
    return dispatch => BucketService.delete(`/bucketlist/${bucket.id}/` + `items/${item_id}`, (status, data) => {
        const index = bucket.bucketlistitems.findIndex(item => item.id == item_id);
        bucket.bucketlistitems.splice(index, 1);
        return dispatch(deleteBucketItemSuccess(bucket));
    }).catch((error) => {
        throw (error);
    });
}
