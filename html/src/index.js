import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClJdhELYGExPlqs--ynUpChdFJfXGCxOY",
    authDomain: "brainbud-db976.firebaseapp.com",
    databaseURL: "https://brainbud-db976-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "brainbud-db976",
    storageBucket: "brainbud-db976.appspot.com",
    messagingSenderId: "685632772619",
    appId: "1:685632772619:web:79e4fd6a77eda7f692850e",
    measurementId: "G-HEVXKT4NPC"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);


