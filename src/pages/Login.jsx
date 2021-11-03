import { signIn } from '../services/firebase';

const Login = (props) => {

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