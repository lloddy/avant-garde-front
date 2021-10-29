import { useState } from "react";
import backgroundImageShow from '../assets/image5.jpeg'
import defaultImage from '../assets/default.jpeg'


const Show = (props) => {

    const id = props.match.params.id;
    const artists = props.artists;
    const artist = artists.find((a) => a._id === id);
    const [editForm, setEditForm] = useState(artist);
    const addDefualtImage = (event) => {
        event.target.src = defaultImage
    }

    const handleChange = (event) => {
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateArtist(editForm, artist._id)
        props.history.push("/");
    };

    const removeArtist =() => {
        props.deleteArtist(artist._id)
        props.history.push("/")
    };

    return (
        <div 
            className="showArtist"
            style={{ backgroundImage: `url(${backgroundImageShow})`}}
        >
            <h1>{artist.name}</h1>
            <img src={artist.image} alt={artist.name} id="mainImage"/>
            <h3>{artist.birth}-{artist.death}</h3>
            <h3>Movement/Era: {artist.era}</h3>
            <p>{artist.bio}</p>
            <div className="imageDiv">
                <img src={artist.image1} alt={artist.image2.default} id="bodyImages"/>
                <img src={artist.image2} alt={artist.image2.default} id="bodyImages"/>
                <img src={artist.image3} alt={artist.image3.default} id="bodyImages"/>
                <img src={artist.image4} alt={artist.image4.default} id="bodyImages"/>
                <img src={artist.image5} alt={artist.image5.default} id="bodyImages"/>
                {/* <img src={artist.image6} alt={artist.image6.default} id="bodyImages"/>
                <img src={artist.image7} alt={artist.image7.default} id="bodyImages"/>
                <img src={artist.image8} alt={artist.image8.default} id="bodyImages"/>
                <img src={artist.image9} alt={artist.image9.default} id="bodyImages"/>
                <img src={artist.image10} alt={artist.image10.default} id="bodyImages"/> */}
            </div>
            <form id="editForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.birth}
                    name="birth"
                    placeholder="Date of Birth"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.death}
                    name="death"
                    placeholder="Date of Death"
                    onChange={handleChange}
                />
                <input
                    type="url"
                    value={editForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.era}
                    name="era"
                    placeholder="Era/Movement"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.bio}
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Artist" />
            </form>
            <button id="delete" onClick={removeArtist}>
                DELETE
            </button>
        </div>
    )
};

export default Show;
