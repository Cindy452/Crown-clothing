import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import {SigninAndSignupContainer} from './signin-and-signup.styles';

const SignInAndSignUpPage = () => (
  <SigninAndSignupContainer>
      <SignIn />
      <SignUp />
  </SigninAndSignupContainer>
)

export default SignInAndSignUpPage;