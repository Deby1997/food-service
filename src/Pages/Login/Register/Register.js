
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const SignIn = () => {
    const navigate = useNavigate();
    const handleRegister = event => {

        navigate('/home');
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    // if (user) {
    //     return (
    //         <div>
    //             <p>Registered User: {user.email}</p>
    //             navigate ('/home')
    //         </div>
    //     );
    // }
    if (user) {
        navigate('/home');
    }
    return (
        <div className="App mt-3">
            <h1>Registration</h1>
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br />
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required /> <br />
            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required /> <br />
            <button className='btn btn-primary' onClick={() => createUserWithEmailAndPassword(email, password)}>
                Register
            </button>
            <p>Already had an accouny? <span className='text-danger' onClick={handleRegister}>Please Login</span></p>
            <Social></Social>
        </div>
    );
};
export default SignIn;