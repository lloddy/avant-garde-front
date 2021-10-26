import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1>Avant-Garde</h1>
            </Link>
        </nav>
    )
}

export default Nav