import { useState } from "react";
import backgroundImageShow from '../assets/image5.jpeg'

const Show = (props) => {

    const id = props.match.params.id;
    const artists = props.artists;
    const artist = artists.find((a) => a._id === id);
    const [editForm, setEditForm] = useState(artist);
    const [bigImage, setBigImage] = useState(artist.image1)

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

    const handleClick = (event) => {
        setBigImage(event.target.src)
    }

    return (
        <div 
            className="showArtist"
            style={{ backgroundImage: `url(${backgroundImageShow})`}}
        >
            <h1 className="showArtistInfo">{artist.name}</h1>
            <img src={bigImage} id="bigImage" alt="bigImage" />
            <h2 className="showArtistInfo" id="clickImageText">Click an image to view</h2><br />
            <div className="imageDiv">
                <img src={artist.image1} alt={artist.image2.default} id="bodyImages" onClick={handleClick}/>
                <img src={artist.image2} alt={artist.image2.default} id="bodyImages" onClick={handleClick}/>
                <img src={artist.image3} alt={artist.image3.default} id="bodyImages" onClick={handleClick}/>
                <img src={artist.image4} alt={artist.image4.default} id="bodyImages"onClick={handleClick}/>
                <img src={artist.image5} alt={artist.image5.default} id="bodyImages"onClick={handleClick}/>
                {/* <img src={artist.image6} alt={artist.image6.default} id="bodyImages"onClick={handleClick}/>
                <img src={artist.image7} alt={artist.image7.default} id="bodyImages"onClick={handleClick}/>
                <img src={artist.image8} alt={artist.image8.default} id="bodyImages"onClick={handleClick}/>
                <img src={artist.image9} alt={artist.image9.default} id="bodyImages"onClick={handleClick}/>
                <img src={artist.image10} alt={artist.image10.default} id="bodyImages"onClick={handleClick}/> */}
            </div>
            <div className="flexArtistInfo">
                <img src={artist.image} alt={artist.name} id="mainImage"/>
                <h1 id="artistGridColumn" className="showArtistInfo">Artist Information</h1>
                <h3 id="artistGridColumn" className="showArtistInfo">{artist.birth}-{artist.death}</h3>
                <h3 id="artistGridColumn" className="showArtistInfo">Movement/Era: {artist.era}</h3>
                <p id="artistGridColumn" className="showArtistInfo">{artist.bio}</p>
            </div> 
            <form onSubmit={handleSubmit}>
                <div id="editForm">
                    <h2 className="showArtistInfo">EDIT THIS ARTIST</h2>
                    <label className="editLabels" for="editName">NAME</label><br />
                    <input
                        id="editName"
                        className="editEntry"
                        type="text"
                        value={editForm.name}
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                    /><br />
                    <label className="editLabels" for="editBirth">BIRTH</label><br />
                    <input
                        id="editBirth"
                        className="editEntry"
                        type="text"
                        value={editForm.birth}
                        name="birth"
                        placeholder="Date of Birth"
                        onChange={handleChange}
                    /><br />
                    <label className="editLabels" for="editDeath">DEATH</label><br />
                    <input
                        id="editDeath"
                        className="editEntry"
                        type="text"
                        value={editForm.death}
                        name="death"
                        placeholder="Date of Death"
                        onChange={handleChange}
                    /><br />
                    <label className="editLabels" for="editProImage">PROFILE IMAGE</label><br />
                    <input
                        id="editProImage"
                        className="editEntry"
                        type="url"
                        value={editForm.image}
                        name="image"
                        placeholder="Image URL"
                        onChange={handleChange}
                    /><br />
                    <label className="editLabels" for="editEra">ERA/MOVEMENT</label><br />
                    <input
                        id="editEra"
                        className="editEntry"
                        type="text"
                        value={editForm.era}
                        name="era"
                        placeholder="Era/Movement"
                        onChange={handleChange}
                    /><br />
                    <label className="editLabels" for="editBio">BIO</label><br />
                    <textarea
                        id="editBio"
                        className="editEntry"
                        type="text"
                        value={editForm.bio}
                        name="bio"
                        placeholder="Bio"
                        onChange={handleChange}
                    /><br />
                    <label className="editLabels" for="editimages">CHANGE IMAGES</label><br />
                    <input
                        id="editImages"
                        className="editEntry"
                        type="url"
                        value={editForm.image1}
                        name="image1"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="editImages"
                        className="editEntry"
                        type="url"
                        value={editForm.image2}
                        name="image2"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="editImages"
                        className="editEntry"
                        type="url"
                        value={editForm.image3}
                        name="image3"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="editImages"
                        className="editEntry"
                        type="url"
                        value={editForm.image4}
                        name="image4"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="editImages"
                        className="editEntry"
                        type="url"
                        value={editForm.image5}
                        name="image5"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input className="editButtons" type="submit" value="UPDATE ARTIST" id="updateButton"/>
                <button className="editButtons" id="deleteButton" onClick={removeArtist}>
                    DELETE
                </button>
                </div>
            </form>
            
        </div>
    )
};

export default Show;
