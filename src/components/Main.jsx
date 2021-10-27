import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "../pages/Index"
import Show from "../pages/Show"
import Create from "../pages/Create"

const Main = (props) => {
    const [ artists, setArtists ] = useState([])

    const URL = 'http://localhost:3001/artists/'

    const getArtists = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setArtists(data);
    };

    const createArtists = async (artist) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(artist)
        })
        getArtists();
    }

    const updateArtist = async (artist, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(artist),
        })
        getArtists();
    }

    const deleteArtist = async id => {
        await fetch(URL + id, { method: "DELETE" });
        getArtists();
    }

    useEffect(() => getArtists(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index artists={artists} />
                </Route>
                <Route
                    path="/artists/:id"
                    render={(rp) => (
                        artists.length ?
                            <Show
                            artists={artists}
                            updateArtist={updateArtist}
                            deleteArtist={deleteArtist}
                            {...rp}
                            />
                        :
                        <Redirect to="/" />
                    )}
                />
                <Route 
                    path="/create"
                    >
                    <Create createArtists={createArtists}/>   
                </Route>
            </Switch>
        </main>
    )
}

export default Main