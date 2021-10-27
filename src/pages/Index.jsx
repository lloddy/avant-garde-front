import { Link } from 'react-router-dom'
import { useState } from 'react';

const Index = (props) => {

    const loaded = () => {
        return props.artists.map((artist) => (
            <div key={artist._id} className="artist">
                <Link to={`/artists/${artist._id}`}>
                    <h1>
                        {artist.name}
                    </h1>
                </Link>
                <img src={artist.image} alt={artist.name} className="image" />
            </div>
        ))
    }    
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {props.artists ? loaded() : loading()}
        </div>
    )

}

export default Index