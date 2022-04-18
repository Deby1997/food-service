import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        return (
            errorElement =
            <p>Error: {error?.message} {error1?.message}</p>

        );
    }

    if (user || user1) {
        navigate('/home');
    }
    return (

        < div >

            <div>OR</div>
            {errorElement}
            <div>
                <button className='btn btn-primary' onClick={() => signInWithGoogle()}> Sign In With Google</button>
            </div>

            <div>
                <button className='btn btn-primary mt-2'> Sign In With Facebook</button>
            </div>
            <div>
                <button className='btn btn-primary mt-2' onClick={() => signInWithGithub()}> Sign In With Github</button>
            </div>

        </div >
    );
};

export default Social;