import {initializeApp} from 'firebase/app';

import {getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword} 
    from 'firebase/auth';
import { 
    email_field,
    password_field,
    log_btn,
    showLoginError,
    email_reg_field,
    password_reg_field,
    password_repeat,
    sign_btn
} from './ui.js';



// firebase project config
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

// firebase instance
const firebaseApp = initializeApp(firebaseConfig);
// firebase authorization instance
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

// callback for login button
const login_email_pass = async() =>{
    const login_email = email_field.value;
    const login_password = password_field.value; 
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, login_email, login_password);
        console.log(userCredentials.user);
        console.log("gj");
    }
    catch(error){
        console.log("bład lol");
        showLoginError(error);
    }    

}
// callback for signup button
const acc_creation = async() =>{
    const registration_email = email_reg_field.value;
    const registration_password = password_reg_field.value;
    const password_confiramtion = password_repeat.value;
    if(registration_password == password_confiramtion){
        try{
            await createUserWithEmailAndPassword(auth, registration_email, registration_password);
            console.log("gj")
        }
        catch(error){
            console.log("error lol");
            showLoginError(error);
        }    
    }
    else{
       console.log("rozne hasla lol");
    }
}

// Waiting for a click on the login button
if (log_btn){
    log_btn.addEventListener("click", login_email_pass);
}

// Waiting for a click on the signup button 
if (sign_btn){
    sign_btn.addEventListener("click", acc_creation);
}



