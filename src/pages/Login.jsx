import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
        <main>
            <h1>Login</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </main>
    );
};

export default Login;