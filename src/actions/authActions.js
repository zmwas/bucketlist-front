import AuthService from '../api/authService';
import { SIGN_UPUSER_SUCCESS, SIGN_UPUSER_FAILURE } from './actiontypes';


export function createUserSuccess(user) {
  return { type: SIGN_UPUSER_SUCCESS,user };
}
export function createUserFailure(user){
    return { type: SIGN_UPUSER_FAILURE,user}
}


export function signUp(user) {
  return dispatch => AuthService.post('https://bucketlist-goals-api.herokuapp.com/auth/register',
    user, (status, data) => {
      return dispatch(createUserSuccess(data));
    }).catch((error) => {

     return dispatch(createUserFailure(error.response))

  });
}

