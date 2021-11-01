import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDGPxPz2q-2_yo6IEWwk3p5m62pvqWzMVc",
    authDomain: "avant-garde-2d4d0.firebaseapp.com",
    projectId: "avant-garde-2d4d0",
    storageBucket: "avant-garde-2d4d0.appspot.com",
    messagingSenderId: "177032221884",
    appId: "1:177032221884:web:82a09369f325064d6decb9"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    return auth.signInWithPopup(provider);
};

function logOut() {
    return auth.signOut();
};

export {
    auth,
    signIn,
    logOut
};