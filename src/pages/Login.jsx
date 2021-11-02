import { signIn } from '../services/firebase';
import { useHistory } from 'react-router-dom'

const Login = (props) => {


    // const routeChange = () => {
    //     let path = 'newPath'
    //     history.push('/')
    // }

    const history = useHistory();
    return (
        <main>
            <div className="loginPage">
                <h1>Please Login</h1>
                <button id="loginPageButton" onClick={signIn}>Sign in with Google</button>
            </div>
        </main>
    );
};

export default Login;