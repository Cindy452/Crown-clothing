import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
       } catch (error) {
        console.error(error);
       }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I don't have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                 name='displayName' 
                 type='text' 
                 value={displayName} 
                 label='name'
                 required 
                 handleChange={this.handleChange}   
                 />
                <FormInput 
                name='email' 
                type='email' 
                value={email} 
                label='email'
                required 
                handleChange={this.handleChange} 
                />
                 <FormInput 
                name='password' 
                type='password' 
                value={password} 
                label='password'
                required 
                handleChange={this.handleChange} 
                />
                <FormInput 
                name='confirmPassword' 
                type='password' 
                value={confirmPassword} 
                label='confirmPassword'
                required 
                handleChange={this.handleChange} 
                />
                <div className='buttons'>
                <CustomButton type='submit'>Sign Up</CustomButton>
              </div>
            </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;