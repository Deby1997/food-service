import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';



const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,

    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const handleRegister = event => {

        navigate('/register');
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h2 className='text-primary'>Login </h2>
            <form className='w-50 container' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input ref={passRef} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>

            </form>
            <p>New here?<span className='text-danger' onClick={handleRegister}>Please Register</span></p>
            <Social></Social>
        </div>
    );
};

export default Login;