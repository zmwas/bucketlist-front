import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as types from '../../src/actions/actiontypes';
import * as actions from '../../src/actions/authActions';

describe('signUp', () => {
  const user = { email: 'zacky@gmail.com', password: 'hunter123' };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates SIGN_UPUSER_SUCCESS after user is created', () => {
    nock('https://bucketlist-goals-api.herokuapp.com').post('/auth/register', user).reply(201);
    const expectedActions = [
      { type: types.SIGN_UPUSER_SUCCESS },
    ];
    const store = mockStore();
    return store.dispatch(actions.signUp(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
