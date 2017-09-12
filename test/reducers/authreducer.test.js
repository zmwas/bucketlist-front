import authreducer from '../../src/reducers/authreducer';
import * as types from '../../src/actions/actiontypes';

describe('auth reducer', () => {
  const user = { user: { email: 'zacky@gmail.com', password: 'hunter123' } };
  it('should return the initial state', () => {
    expect(authreducer(undefined, {})).toEqual({});
  });
  it('should sign up a user', () => {
    expect(authreducer(user, { type: types.SIGN_UPUSER_SUCCESS }))
      .toEqual(user);
  });
});
