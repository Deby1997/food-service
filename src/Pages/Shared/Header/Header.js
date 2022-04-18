
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);


    }


    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to="/home">Home</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            <NavLink className="nav-link active" aria-current="page" to="/blog">Blogs</NavLink>

                            <NavLink className="nav-link" to="/service">Services</NavLink>
                            {user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>LogOut</button> :
                                <NavLink className="nav-link" to="/login">Login</NavLink>


                            }

                        </div>
                    </div>
                </div>
            </nav>
            {/* <NavLink className="navbar-brand" to="/home">Home</NavLink>
            <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink> */}

        </header>
    );
};

export default Header;