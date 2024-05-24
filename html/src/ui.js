import { AuthErrorCodes } from 'firebase/auth';

export const email_field = document.querySelector('#login') // login email field reference
export const password_field = document.querySelector('#password') // login password reference
export const email_reg_field = document.querySelector('#emailreg') // registration email reference
export const password_reg_field = document.querySelector('#passwordreg') // regitration password referece
export const password_repeat = document.querySelector('#repeat') // password confirmation reference

export const log_btn = document.querySelector('#btn_login') // login button reference
export const sign_btn = document.querySelector('#reg_button') // sign-up button reference

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
 