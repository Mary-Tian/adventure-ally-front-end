import React from 'react';
import'./SignIn.css';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import { render } from '@testing-library/react';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }


handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ""})
}

handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
}


render = () => {
    return(
        <div className='sign-in'>
            <h2>Sign in with your email and password.</h2>

            <form onSubmit={this.handleSubmit}>
                <input name='email' type='email' value={this.state.email} />
                <label>Email</label>
                <input name='password' type='password' value={this.state.email} onChange={this.handleChange}/>
                <label>Password</label>
                <input type='submit' value='Submit Form' />
                <button type='submit'> Sign in </button>
                <button onClick={signInWithGoogle} > 
                {' '} Sign in with Google{' '}
                </button>
            </form>
        </div>
    )
};
};

const SignInPage = () => {
    <div className='sign-in'>SIGN IN</div>
};

export default SignIn;