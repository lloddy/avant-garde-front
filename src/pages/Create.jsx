import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import backgroundImageCreate from '../assets/image13.jpeg'


const Create = (props) => {
    const history = useHistory();
    const [ newForm, setNewForm ] = useState({
        name: "",
        birth: "",
        death: "",
        image: "",
        bio: "",
        era: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: ""
    });

    const handleChange = (event) => {
        setNewForm(prevState => ({...prevState,
        [event.target.name]: event.target.value }))
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createArtists(newForm);
        setNewForm({
            name: "",
            birth: "",
            death: "",
            image: "",
            bio: "",
            era: "",
        });
        history.push("/");
    };

    
    return (
        <div style={{ backgroundImage: `url(${backgroundImageCreate})`}}>
            <section>
            <form onSubmit={handleSubmit} >
                <div className="newForm">
                    <input 
                        id="createInput"
                        type="text"
                        value={newForm.name}
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="text"
                        value={newForm.birth}
                        name="birth"
                        placeholder="Date of Birth"
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="text"
                        value={newForm.death}
                        name="death"
                        placeholder="Date of Death"
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="url"
                        value={newForm.image}
                        name="image"
                        placeholder="Profile Image"
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="text"
                        value={newForm.era}
                        name="era"
                        placeholder="Era/Movement"
                        onChange={handleChange}
                    />
                    <textarea
                        id="createInputTextArea"
                        type="textarea"
                        value={newForm.bio}
                        name="bio"
                        placeholder="Bio"
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="url"
                        value={newForm.image1}
                        name="image1"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="url"
                        value={newForm.image2}
                        name="image2"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="url"
                        value={newForm.image3}
                        name="image3"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="url"
                        value={newForm.image4}
                        name="image4"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                    <input
                        id="createInput"
                        type="url"
                        value={newForm.image5}
                        name="image5"
                        placeholder="Add an image of their work."
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="Create Artist" className="submit"/>
            </form>
        </section>
    </div>
    )
}

export default Create;