import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import SignUpContainer from '../../src/container/SignUpContainer';
import UserForm from '../../src/components/UserForm';
import { Provider } from 'react-redux';
import { stub } from 'sinon';
import thunk from 'redux-thunk';


describe('SignUp Container', () => {
  let store,
    signup;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    const initialState = {
      user: {
        email: '',
        password: '',

      },
    };
    store = mockStore(initialState);
    signup = mount(
      <Provider store={store}>
        <SignUpContainer />
      </Provider>);
  });

  it('renders without crashing', () => {
    const container = signup.find(SignUpContainer);
    expect(signup.exists()).toEqual(true);

    expect(container.find(UserForm).length).toEqual(1);
  });
});
