import { AuthErrorCodes } from 'firebase/auth';

export const email_field = document.querySelector('#email') // login email field reference
export const password_field = document.querySelector('#password') // login password reference
export const email_reg_field = document.querySelector('#emailreg') // registration email reference
export const password_reg_field = document.querySelector('#passwordreg') // regitration password referece
export const password_repeat = document.querySelector('#repeat') // password confirmation reference
export const chatter_name = document.querySelector('#chatFind') // choser user for chatting reference
export const message_text = document.querySelector('#message_text') // field with content of the chat messaged
export const chat_window = document.querySelector('#chat_window') // reference to chat window


export const log_btn = document.querySelector('#btn_login') // login button reference
export const sign_btn = document.querySelector('#reg_button') // sign-up button reference
export const logout_btn = document.querySelector('#btn_logout') // log-out confirmation reference
export const choose_chat_btn = document.querySelector('#btn_chatFind') // button for accepting chosen user for chatting reference
export const send_message_btn = document.querySelector('#message_btn') // confirmation of sendiing messege via chat  reference

// Login error
export const showLoginError = (div, error) => { 
    if (error.code == AuthErrorCodes.INVALID_EMAIL) {
      div.innerHTML = `Please provide a proper email adress.`
      }
    else if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      div.innerHTML = `Please provide password that is at least 6 characters long.`
    }
    else if (error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS){
      div.innerHTML = `Wrong email or password.`
    }
    else if (error.code == AuthErrorCodes.EMAIL_EXISTS){
      div.innerHTML = `Email already in use.`
    }
    else {
      div.innerHTML = `Error: ${error.message}`      
    }
  }

  export const disclaimer = (div, clear) => {
    if (clear == "created"){
      div.innerHTML = 'Konto zostało utworzone, przejdź do strony logownaia.'
    }
    else if(clear == "difference"){
      div.innerHTML = 'There is a difference between passwords'
    }
  }
 