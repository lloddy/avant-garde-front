import { Link } from 'react-router-dom'
import { useState } from 'react';

const Create = (props) => {

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
        // props.history.push("/");
    };

    
    return (
        <div>
            <section>
            <form onSubmit={handleSubmit} className="Form">
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.birth}
                    name="birth"
                    placeholder="Date of Birth"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.death}
                    name="death"
                    placeholder="Date of Death"
                    onChange={handleChange}
                />
                <input
                    type="url"
                    value={newForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.era}
                    name="era"
                    placeholder="Era/Movement"
                    onChange={handleChange}
                />
                <input
                    type="textarea"
                    value={newForm.bio}
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Artist" />
            </form>
        </section>
    </div>
    )
}

export default Create;