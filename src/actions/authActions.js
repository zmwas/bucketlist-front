import AuthService from '../api/authService';
import { SIGN_UPUSER_SUCCESS, LOGIN_USER_SUCCESS, SIGN_UPUSER_FAILURE, LOGIN_USER_FAILURE } from './actiontypes';


export function createUserSuccess(user) {
  return { type: SIGN_UPUSER_SUCCESS,user };
}
export function createUserFailure(user){
    return { type: SIGN_UPUSER_FAILURE,user}
}

export function loginUserSuccess(user) {
  return { type: LOGIN_USER_SUCCESS, user };
}
export function loginUserFailure(user){
    return { type: LOGIN_USER_FAILURE,user}
}

export function signUp(user) {
  return dispatch => AuthService.post('https://bucketlist-goals-api.herokuapp.com/auth/register',
    user, (status, data) => {
      return dispatch(createUserSuccess(data));
    }).catch((error) => {

     return dispatch(createUserFailure(error.response))

  });
}

export function login(user) {
  return dispatch => AuthService.login('https://bucketlist-goals-api.herokuapp.com/auth/login',
    user, (status, data) => {
      const token = data.Authorization;
      window.localStorage.setItem('token', token);
      return dispatch(loginUserSuccess(status));
    }).catch((error) => {
      return dispatch(loginUserFailure(error.response))
  });
}
