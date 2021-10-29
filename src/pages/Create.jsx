import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import backgroundImageCreate from '../assets/image8.jpeg'



const Create = (props) => {
    const history = useHistory();
    const [ newForm, setNewForm ] = useState({
        name: "",
        birth: "",
        death: "",
        image: "",
        bio: "",
        era: "",
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
                        placeholder="Image URL"
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
                </div>
                <input type="submit" value="Create Artist" className="submit"/>
            </form>
        </section>
    </div>
    )
}

export default Create;