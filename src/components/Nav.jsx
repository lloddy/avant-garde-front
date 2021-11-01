import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1>Avant-Garde</h1>
            </Link>
            <Link to="/create">
                <h1 id="addArtist">Add an Artist</h1>
            </Link>
            <Link to="/login">
                <h1>Login</h1>
            </Link>
        </nav>
    )
}

export default Nav