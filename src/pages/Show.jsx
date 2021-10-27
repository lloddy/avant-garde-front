import { useState, useEffect } from "react";

const Show = (props) => {

    const id = props.match.params.id;
    const artists = props.artists;
    const artist = artists.find((a) => a._id === id);
    const [editForm, setEditForm] = useState(artist);

    const handleChange = (event) => {
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateArtists(editForm, artist._id)
        props.history.push("/");
    };

    const removeArtist =() => {
        props.deleteArtist(artist._id)
        props.history.push("/")
    };

    return (
        <div className="artist">
            <h1>{artist.name}</h1>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.birth}-{artist.death}</h3>
            <h3>{artist.era}</h3>
            <p>{artist.bio}</p>
            <button id="delete" onClick={removeArtist}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
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
                    type="textarea"
                    value={editForm.bio}
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Artist" />
            </form>
        </div>
    )
};

export default Show;
