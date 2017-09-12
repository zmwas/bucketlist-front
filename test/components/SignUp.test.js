import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import UserForm from '../../src/components/UserForm';


describe('SignUp Form', () => {
  let signup;
  const submitRegisterMock = jest.fn();
  const user = stub().withArgs({ email: 'zacky@gmail.com', password: 'hunter123' });
  beforeEach(() => {
    signup = shallow(<UserForm onSave={submitRegisterMock} user={user} />);
  });
  it('renders without crashing', () => {
    expect(signup.exists()).toEqual(true);
  });
  it('should have  a div', () => {
    expect(signup.find('div').length).toEqual(1);
  });
  it('should have  a form', () => {
    expect(signup.find('form').length).toEqual(1);
  });
  it('should have  2 text fields', () => {
    expect(signup.find('TextField').length).toEqual(2);
  });

  describe('Register button', () => {
    it('should have  a raised button', () => {
      expect(signup.find('RaisedButton').length).toEqual(1);
    });

    it('should submit user details when clicked', () => {
      expect(submitRegisterMock.mock.calls.length).toEqual(0);
      signup.find('RaisedButton').simulate('click');
      expect(submitRegisterMock.mock.calls.length).toEqual(1);
    });
  });
});

