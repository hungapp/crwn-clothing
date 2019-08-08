import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUp } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUp({ email, password, displayName });

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   createUserProfileDocument(user, { displayName });
    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <form className="sign-up-form" onSubmit={this.onSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: signUpInfo => dispatch(signUpStart(signUpInfo))
});
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
