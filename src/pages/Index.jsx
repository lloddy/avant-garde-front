import { Link } from 'react-router-dom'
import backgroundImageIndex from '../assets/image1.jpeg'

const Index = (props) => {

    const loaded = () => {
        return props.artists.map((artist) => (
            <div key={artist._id} className="artist">
                <Link to={`/artists/${artist._id}`}>
                    <h1 className="artistName">
                        {artist.name}
                    </h1>
                <img src={artist.image} alt={artist.name} className="indexImage" />
                </Link>
            </div>
        ))
    }    
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div className="artist"
            style={{
                backgroundImage: `url(${backgroundImageIndex})`,
            }}>
            {props.artists ? loaded() : loading()}
        </div>
    )

}

export default Index