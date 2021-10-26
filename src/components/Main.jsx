import { useEffect, useState } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Index from "../pages/Index"

const Main = (props) => {
    const [ artists, setArtists ] = useState([])

    const URL = 'http://localhost:3001/artists/'

    const getArtists = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setArtists(data);
    };

    // const createArtists = async (artist) => {
    //     await fetch(URL, + IdleDeadline, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(artist)
    //     })
    //     getArtists();
    // }
    useEffect(() => getArtists(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index artists={artists}/>
                </Route>
            </Switch>
        </main>
    )
}

export default Main