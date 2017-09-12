import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/authActions';
import UserForm from '../components/UserForm';
import Error from '../components/Error';


class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
        error:'',
        open:false
    };
    this.signUp = this.signUp.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.close = this.close.bind(this);
  }

  signUp(event) {
    event.preventDefault();
    this.props.actions.signUp(this.state.user);

  }
  componentWillReceiveProps(nextProps){
      if (nextProps.user.status != 200) {
        console.log(nextProps.user.data)
          this.setState({open:true, error: nextProps.user.data["message"]});

      }
      else if(nextProps.user==200){
        this.props.history.push('/buckets')
      }
  }
  changeEmail(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        user: { email: value, password: this.state.user.password },
      };
    });
  }

  changePassword(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        user: { email: this.state.user.email, password: value },
      };
    });
  }

  close(){
    this.setState({open:false})
  }
  render() {
    return (<div>
      <UserForm
        user={this.state.user}
        onSave={this.signUp}
        changeEmail={this.changeEmail}
        changePassword={this.changePassword}
        btnName="SIGN UP"
      />
          <Error
          open={this.state.open}
          message={this.state.error}
          close={this.close}
          />
        </div>
    );
  }
}

SignUpContainer.propTypes = {
  actions: PropTypes.object.isRequired,

};

function mapStateToProps(state) {

    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);

