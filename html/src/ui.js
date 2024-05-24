import { AuthErrorCodes } from 'firebase/auth';

export const email_field = document.querySelector('#login') // login email field reference
export const password_field = document.querySelector('#password') // login password reference
export const email_reg_field = document.querySelector('#emailreg') // registration email reference
export const password_reg_field = document.querySelector('#passwordreg') // regitration password referece
export const password_repeat = document.querySelector('#repeat') // password confirmation reference

export const log_btn = document.querySelector('#btn_login') // login button reference
export const sign_btn = document.querySelector('#reg_button') // sign-up button reference

// Login error
export const showLoginError = (error) => { 
    if (error.code == AuthErrorCodes.INVALID_EMAIL) {
      login_error.innerHTML = `Please provide a proper email adress.`
      }
    else if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      login_error.innerHTML = `Please provide password that is at least 6 characters long.`
    }
    else if (error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS){
      login_error.innerHTML = `Wrong email or password.`
    }
    else {
      login_error.innerHTML = `Error: ${error.message}`      
    }
  }

  export const sukces = (clear) => {
    login_error.innerHTML = 'Konto zostało utworzone, przejdź do strony logownaia.'
  }