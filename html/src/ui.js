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
        login_error.innerHTML = `Wrong email. Try again.`
      }
    else if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        login_error.innerHTML = `Wrong password. Try again.`
    }
    else {
        login_error.innerHTML = `Error: ${error.message}`      
    }
  }