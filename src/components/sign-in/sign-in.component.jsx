import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBotton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email ann password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email} handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomBotton type='submit'>Sign in</CustomBotton>
            <CustomBotton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomBotton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;