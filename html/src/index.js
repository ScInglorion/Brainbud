import {initializeApp} from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore"

import {
    getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile 
} 
    from 'firebase/auth';
import * as ui from './ui.js';

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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

/* Authorization and Firestore emulator, ucoment when using emulators */
// connectFirestoreEmulator(db, '127.0.0.1', 8080);
// connectAuthEmulator(auth, "http://localhost:9099");

// callback for login button
const login_email_pass = async() =>{
    const login_email = ui.email_field.value;
    const login_password = ui.password_field.value; 
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, login_email, login_password);
        visitor = userCredentials;
        console.log(userCredentials.user);
        console.log(login_error, "gj");
        window.location.href = "glowna.html"  
    }
    catch(error){
        console.log("bład lol");
        ui.showLoginError(login_error, error);
    }    

}

// callback for signup button
const acc_creation = async() =>{
    const registration_email = ui.email_reg_field.value;
    const registration_password = ui.password_reg_field.value;
    const password_confiramtion = ui.password_repeat.value;
    if(registration_password == password_confiramtion){
        try{
            await createUserWithEmailAndPassword(auth, registration_email, registration_password);
            console.log("gj")
            window.location.href = "login.html"     
            
            updateProfile(auth.currentUser, {
                displayName: registration_email
              }).then(() => {
                
              }).catch((error) => {
                console.log("error lol");
              });
        }
        catch(error){
            console.log("error lol");
            ui.showLoginError(login_error1, error);
        }    
    }
    else{
       console.log("rozne hasla lol");
       ui.disclaimer(login_error1, "difference")
    }
}

// monitoring if a user is logged in
const monitor_auth_state = async () =>{
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user)
            if (window.location.pathname.endsWith('glowna.html') == false && window.location.pathname.endsWith('chat.html') == false) {
                window.location.href = "glowna.html";  
            } 
            if(window.location.pathname.endsWith('chat.html') == true){
                const chosen_chatter = localStorage.getItem('value1');
                loadMessages(chosen_chatter);
            }
        } 
        else if (!user) {
            if (window.location.pathname.endsWith('glowna.html') || window.location.pathname.endsWith('chat.html')) {
                window.location.href = "login.html";
            } 
        }
      });
}
 
// function to get a name of a person to chat with
function chatting() {
    const logged_user = auth.currentUser.displayName.substring(0,auth.currentUser.displayName.indexOf("@"))
    const goto_user = ui.chatter_name.value.substring(0,ui.chatter_name.value.indexOf("@"))
    const outcome = logged_user.localeCompare(goto_user);
    let chosen_chatter;
    if (outcome <= 0){
        chosen_chatter = logged_user + goto_user;
    } 
    else {
        chosen_chatter = goto_user + logged_user;
    }  
    localStorage.setItem('value1', `${chosen_chatter}`);
    window.location.href = 'chat.html'

}

// loading sent messages onto the page
function loadMessages(user) {
    const messagesQuery = query(collection(db, user+'_messages'), orderBy('timestamp'));
    console.log(user)
    onSnapshot(messagesQuery, snapshot => {
        ui.chat_window.innerHTML = '';
        snapshot.forEach(doc => {
            const message = doc.data();
            const messageElement = document.createElement('div');
            messageElement.textContent = `${message.name}: ${message.text}`;
            ui.chat_window.appendChild(messageElement);
        });
    });
}

// logout
const logout = async () =>{
    await signOut(auth).then(() =>{
    window.location.href = 'login.html'
    }) 
}  

// buttons functionality
// click on the login button
if (ui.log_btn){
    ui.log_btn.addEventListener("click", login_email_pass);
}

// click on the signup button 
if (ui.sign_btn){
    ui.sign_btn.addEventListener("click", acc_creation);
}
// click on the logiut button
if (ui.logout_btn){
    ui.logout_btn.addEventListener("click", logout);    
}
// accepting chosen user to chat with
if (ui.choose_chat_btn){
    ui.choose_chat_btn.addEventListener("click", chatting);    
}
// sending a message via chat
if (ui.send_message_btn){
    ui.send_message_btn.addEventListener('click', () => {
        const message = ui.message_text.value;
        const user = localStorage.getItem('value1');
    
        if (message && user) {
            addDoc(collection(db, user+'_messages'), {
                text: message,
                name: auth.currentUser.displayName,
                timestamp: new Date()
            }).then(() => {
                ui.message_text.value = '';
            }).catch(error => {
                console.error('Error sending message:', error);
            });
        }
    }); 
}

// monitoring logged user
monitor_auth_state();


