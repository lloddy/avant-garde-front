import { Link } from 'react-router-dom'
import { logOut } from '../services/firebase'
import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import Logo from '../assets/logo.svg'

const Nav = (props) => {

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));  
        return () => unsubscribe();
    }, []);


    return (
        <div className="navMenu">
            <nav className="nav">
                
                <Link to="/">  
                    <img src={Logo} className="logo" alt="logo"/>
                </Link>
                <div className="menuItems">
                    <Link to="/create" >
                        <h1 id="addArtist" >Add an Artist</h1>
                    </Link>
                        {
                            props.user ?
                            <>
                                <h1 onClick={logOut}>Logout</h1>
                                <p className="userName" id="displayName">Welcome, {props.user.displayName}</p>
                                <p>
                                    <img src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                    className="userName"
                                    id="userPhoto"
                                    />
                                </p>
                                {/* <div className="backGroundBox"></div> */}
                                
                            </>
                            :
                            <Link to="/login">
                                <h1>Login</h1>
                            </Link>
                        } 
                </div>
                <label for="navToggle" class="navToggleLabel">
                    <span>&#9776;</span>
                </label>
                <input type="checkbox" id="navToggle"/>
                <div className="menuItemsHam">
                    <Link to="/create" >
                        <h1 id="addArtist" >Add an Artist</h1>
                    </Link>
                        {
                            props.user ?
                            <>
                                <h1 onClick={logOut}>Logout</h1>
                                
                                <p>
                                    <img src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                    className="userName"
                                    id="userPhoto"
                                    />
                                </p>
                                {/* <div className="backGroundBox"></div> */}
                                
                            </>
                            :
                            <Link to="/login">
                                <h1>Login</h1>
                            </Link>
                        } 
                </div>

            </nav>
        </div>
    )
}

export default Nav