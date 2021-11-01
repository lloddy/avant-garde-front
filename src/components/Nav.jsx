import { Link, Redirect } from 'react-router-dom'
import { logOut } from '../services/firebase'
import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';

const Nav = (props) => {

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));  
        return () => unsubscribe();
    }, []);


    return (
        <nav className="nav">
            <Link to="/">
                <h1>Avant-Garde</h1>
            </Link>
            <Link to="/create" >
                <h1 id="addArtist">Add an Artist</h1>
            </Link>
                {
                    props.user ?
                    <>
                        
                        <p className="userName">Welcome, {props.user.displayName}</p>
                        <p>
                            <img src={props.user.photoURL} 
                            alt={props.user.displayName} 
                            className="userName"
                            id="userPhoto"
                            />
                        </p>
                        <div className="backGroundBox"></div>
                        <h1 onClick={logOut} className="logButtons">Logout</h1>
                    </>
                    :
                    <Link to="/login">
                        <h1 className="logButtons" >Login</h1>
                    </Link>
                } 
            
        </nav>
    )
}

export default Nav