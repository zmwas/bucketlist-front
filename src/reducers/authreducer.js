import * as types from '../actions/actiontypes';
import initialState from './initalState';


export default function authReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SIGN_UPUSER_SUCCESS:
      return action.user;
    case types.LOGIN_USER_SUCCESS:
      return action.user;
    case types.SIGN_UPUSER_FAILURE:
      return Object.assign({}, action.user);
    case types.LOGIN_USER_FAILURE:
      return Object.assign({}, action.user);

  }
  return state;
}
